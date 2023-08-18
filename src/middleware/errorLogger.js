module.exports.errorLogger = (err, req, res, next)=>{
    if(err){
        return res.status(500).json({error: `Internal server error: ${err.message}`})
    }
    next()
}