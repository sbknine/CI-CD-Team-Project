import { request ,response } from 'express';
import bcrypt from 'bcryptjs'
const mockingoose = require('mockingoose');

const {authUser , getUserProfile , getUserById, registerUser} = require('../backend/controllers/userController');
const User = require('../backend/models/userModel')
const users = require('../backend/data/users')

const mongoose = require('mongoose')
const databaseName = 'test'

beforeAll(async () => {
    const url = 'mongodb://127.0.0.1:27017'
    await mongoose.connect(url, { useNewUrlParser: true })
  })

//N
describe("authUser", () =>{ 
    
    const mrequest = {
        user :{
            _id:'61b9bb954bbb9f2cb82d0300'
        }
    }

    it("shoud", async () => {
        mockingoose(User).toReturn([
            {
                isAdmin: true,
                _id: '61b9bb954bbb9f2cb82d0300',
                name: 'Admin User',
                email: 'admin@example.com'
            }
        ], 'findOne');
        const result = await getUserProfile(mrequest);
        console.log(result);
    })

    // it('shold find', () =>{
    //     mockingoose.User.toReturn([
    //         {
    //             isAdmin: true,
    //             _id: '61b9bb954bbb9f2cb82d0300',
    //             name: 'Admin User',
    //             email: 'admin@example.com'
    //         }
    //     ])

    //     return User
    //     .find()
    //     .where('name')
    //     .in([0])
    //     .then(result => {
    //         expect(result).toEqual([
    //             {
    //               isAdmin: true,
    //               _id: '61b9bb954bbb9f2cb82d0300',
    //               name: 'Admin User',
    //               email: 'admin@example.com'
    //             }
    //           ])
    //     })
    // })

})


//T
jest.mock("axios")
jest.setTimeout(100000)
/*describe("getProductById", () =>{
    // test("should respond with a 200 status code", async () => {
    //     const response = await request(authUser).post('/login').send({
    //         email: "admin@example.com",
    //         password: "123456"
    //     })
    //     expect(response.statusCode).toBe(200)
    // })
    const mrequest = () => {
        const product = {
            params:{id : ""}
        }
        return product
    }    
    const mresponse = () => {
        const res = {}
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res
    }
    test("should respond with a 200 status code", async () => {
        const result = await getProducts(mrequest)
        console.log(result)        
    })

})*/

/*describe("getUserById", () =>{    

    const mrequest = () => {
        const req = "61b9bb68f7c20e326c9ef8dc"
        return req
    }
    const mresponse = () => {
        const res = {}
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res
    }    
    mockAxios.get.mockImplementation(() => 
        Promise.resolve("61b9bb68f7c20e326c9ef8dc")
    )
    test("should respond with a 200 status code", async () => {
        //const result = await getUserById("61b9bb68f7c20e326c9ef8dc", mresponse)
        //console.log(result)        
        const response = await request(getUserById).post("/:id").send({
            id: "61b9bb68f7c20e326c9ef8dc"
        })
        expect(response.statusCode).toBe(200)
        const test = await getUserById(mrequest)
        console.log(test)
        expect(test).toBe('61b9bb68f7c20e326c9ef8dc')
                     
    })

})*/

/*describe("registerUser", () =>{    
    it('should return name', async () => {
        mockingoose(userModel).toReturn(
            {
                _id : 1,
                name : "test01",
                email : "test01@example.com",
                password : "123456",
                isAdmin : false
            }          
        )
        const result = await registerUser(1)
        expect(result.name).toBe("test01")
    })
})*/

/*describe("registerUser", () =>{    
    test('should return name', async () => {
        const response = await request(registerUser).router.route('/').post(registerUser).send({
            name : "test01",
            email : "test01@example.com",
            password : "123456"
        })
        console.log(response)
    })
})*/

/*describe("getUserProfile", () => {    
    const mrequest = () => {
        const req = {_id:"61b7698ef79d14462cccd200"}
        return req
    }
    const user = getUserProfile(mrequest)
    const mresponse = () => {        
        const res = {
            _id : user._id,
            name : user.name,
            email : user.email,
            isAdmin : user.isAdmin
        }
        return res
    }    
    //const test = getUserById(user)
    //console.log(test.name)
    const res 
    it('should return username', async () => {
        const result = await getUserProfile(mrequest,mresponse)
        console.log(result)
    })

})*/