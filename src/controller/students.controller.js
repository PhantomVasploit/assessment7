const mssql = require('mssql')
const { studentSchema } = require('../utils/validators')
const { sqlConfig } = require('../config/database.connection.config')

module.exports.createStudent = async(req, res)=>{

    try {
        
        if(!req.body){
            return res.status(400).json({error: 'Request body can not be empty'})
        }
    
        const { fullName, studentClass, feeBalance } = req.body
    
        const {error} = studentSchema.validate({ fullName, studentClass, feeBalance })
        if(error){
            return res.status(422).json({error: error.message})
        }
    
        const pool = await mssql.connect(sqlConfig)
    
        const result = await pool
        .request()
        .input('full_name', fullName)
        .input('student_class', studentClass)
        .input('fee_balance', feeBalance)
        .execute('createNewStudentPROC')
    
        if(result.rowsAffected[0] == 1){
            return res.status(201).json({message: 'Student created successfully'})
        }else{
            return res.status(400).json({error: "Unable to create student"})
        }

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: 'Internal server error'})
    }

}


module.exports.fetchAllStudents = async(req, res)=>{
    try {
        
        const pool = await mssql.connect(sqlConfig)

        const result = await pool
        .request()
        .execute('fetchAllStudentsProc')

        return res.status(200).json({message: 'fetch successfull', students: result.recordset})

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: 'Internal server error'})
    }
}


module.exports.fetchStudentById = async(req, res)=>{
    try {

        const {id} = req.params

        const pool = await mssql.connect(sqlConfig)

        const result = await pool
        .request()
        .input('id', id)
        .execute('fetchStudentByIdProc')

        if(result.recordset.length == 1){
            return res.status(200).json({message: 'Fetch successful', student: result.recordset[0]})
        }else{
            return res.status(400).json({error: 'Invalid id'})
        }
        
    } catch (error) {

        return res.status(500).json({error: 'Internal server error'})
        
    }
}

module.exports.updateFee = async(req, res)=>{
    try {
        
        const { id } = req.params
        const {feeBalance}  = req.body

        if(!feeBalance){
            return res.status(400).json({message: 'Please specify the fee balance'})
        }

        const pool = await mssql.connect(sqlConfig)

        const result = await pool
        .request()
        .input('id', id)
        .execute('fetchStudentByIdProc')

        if(result.recordset.length == 1){
            await pool
            .request()
            .input('id', id)
            .input('fee_balance', feeBalance)
            .execute('updateFeeBalanceProc')
            return res.status(200).json({message: 'Student fee updated'})
        }else{
            return res.status(400).json({error: 'Invalid id'})
        }


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: 'Internal server error'})
    }
}


module.exports.deleteStudent = async(req, res)=>{
    try {
        const {id} = req.params

        const pool = await mssql.connect(sqlConfig)

        const result = await pool
        .request()
        .input('id', id)
        .execute('fetchStudentByIdProc')

        if(result.recordset.length == 1){
            await pool
            .request()
            .input('id', id)
            .execute('deleteStudentProc')
            return res.status(200).json({message: 'Student deleted successfully'})
        }else{
            return res.status(400).json({error: 'Invalid id'})
        }

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: 'Internal server error'})
    }
}