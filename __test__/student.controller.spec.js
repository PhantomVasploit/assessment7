const { response } = require('express')
const request = require('supertest')

let server

describe('Student controller', ()=>{

    beforeEach(()=>{
        server = require('../src/app')
    })

    afterEach(async()=>{
        await server.close()
    })

    it('should create a new student when the details are provided', async()=>{

        const response = await request(server)
        .post('/api/v1/student')
        .send({
            fullName: 'Phantom Vasploit',
            studentClass: 4,
            feeBalance: 0
        })

        expect(response.statusCode).toBe(201)
        expect(response.body.message).toBe('Student created successfully')
    })

    it('should fetch all student records', async()=>{

        const response = await request(server)
        .get('/api/v1/students')

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('fetch successfull')
    })

    it('should fetch a student record', async()=>{

        const response = await request(server)
        .get('/api/v1/student/1')

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('Fetch successful')
    })

    it("should update a student's record fee", async()=>{

        const response = await request(server)
        .put('/api/v1/student/1')
        .send({feeBalance: 100})

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('Student fee updated')
    })

    it("should delete soft student's record", async()=>{

        const response = await request(server)
        .delete('/api/v1/student/1')

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('Student deleted successfully')
    })
})