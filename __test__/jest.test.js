import request from 'express'

const {authUser} = require ('../backend/controllers/userController')

describe("authUser", () =>{
    test("should respond with a 200 status code", async () => {
        const response = await request(authUser).asyncHandler().send({
            email: "admin@example.com",
            password: "123456"
        })
        expect(response.statusCode).toBe(200)
    })
})