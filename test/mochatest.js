//import {expect} from "chai"
import sinon  from "sinon"
import User from '../backend/models/userModel.js'
import {authUser} from '../backend/controllers/userController.js'

import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import server from "../backend/server.js"
let should = chai.should()
chai.use(chaiHttp)
describe("Check Api", () => {

    
    it("given correct userId should retrieve users full name" , async () => {

        //given
        const fixture = {
            _id: "61b9bb954bbb9f2cb82d0300", 
            email: "admin@example.com", 
            isAdmin: true, 
            name: "Admin User"
        }

        let stub = sinon.stub(User , "findOne").returns(fixture)

        //when
        let result = await User.findOne('admin@example.com')

        //then
        expect(result.email).to.eq("admin@example.com")
        stub.restore()

    })
    
    it("should return api status 200 ok", (done) => {
        chai.request(server)
            .get('/')              
            .end((err, res) => {
                    res.should.have.status(200)
                    //console.log(res.text)
                    //expect(res).to.have.status(200)
            done()                                   
            })
    })
    it("should return api paypal status", (done) => {
        chai.request(server)
            .get('/api/config/paypal')                     
            .end((err, res) => {
                    res.should.have.status(200)
                    //console.log(res.text)
            done()                                   
            })
    })
})
describe("userController Test", () => {
    /*it("should return status" , async () => {
        //given
        const fixture = {
            _id: "61b9bb954bbb9f2cb82d0300", 
            email: "admin@example.com", 
            isAdmin: true, 
            name: "Admin User",
            status : "auth complete"
        }    
        let stub = sinon.stub(User , "findOne").returns(fixture)    
        //when
        let result = await User.findOne('admin@example.com')        
        //then
        result.status.should.to.eq("auth complete")         
        stub.restore()    
    })*/
    it("should login as Admin", async () => {
        const fixture = {            
            email : "admin@example.com",
            password : "123456"
        }
        chai.request(server)
            .post('/api/users/login')
            .send(fixture)
            .end((err, res) => {
                res.body.should.have.property('name').eql("Admin User") 
                //console.log(res)                          
            })
    })    
    /*it("should create user" , async (done) => {            
        const fixture = {
            name : "test01",
            email : "test01@example.com",
            password : "123456"
        }                
        chai.request(server)
            .post('/api/users')
            .send(fixture)
            .end((fox, res) => {
                console.log(res)
            done()
            })
    })
    it("should delete user" , async (done) => {            
        const fixture = {
            id : "61bc7cfebffe8248c85312ff"
        }                
        chai.request(server)
            .delete('/api/users/' + fixture.id)
            .send(fixture.id)
            .end((fox, res) => {
                console.log(res.status)
            done()
            })
    })*/
    it("should returen user already exists" , async () => {            
        const fixture = {
            name: "Admin User",
            email : "admin@example.com",
            password : "123456"
        }                
        chai.request(server)
            .post('/api/users')
            .send(fixture)
            .end((fox, res) => {                
                res.should.have.status(400)            
            })
    })
    /*it("should get user profile by id" , async () => {            
        const fixture = {
           id : "61bc7cfebffe8248c85312ff"
        }
        chai.request(server)
            .get('/api/users/' + fixture.id)            
            .send(fixture.id)
            .end((fox, res) => {
                console.log(res.body)                
                //res.should.have.status(400)            
            })               
    })*/
    /*it("should return user profile" , async () => {
        const fixture = {
            id : "61bc7cfebffe8248c85312ff"
        }
        chai.request(server)
            .get('/api/users/profile')
            .send(fixture.id)
            .end((fox, res) => {
                console.log(res.body.property('name'))
            })
    })*/
})
describe("productController Test", () => {
    it("should get product by id" , async () => {
        const fixture = {
            id : "61bb1d9caf32be36cc1220eb"
        }
        chai.request(server)
            .get('/api/products/' + fixture.id)
            .send(fixture.id)
            .end((fox, res) => {
                res.body.should.have.property('name').eql("Airpods Wireless Bluetooth Headphones")
            })
    })
    it("should get product in page 1", async () => {       
        chai.request(server)
            .get('/api/products')
            .end((fox, res) => {                
                res.body.should.have.property('page').eql(1)
            })
    })
    it("should return top 3 products", async () => {
        chai.request(server)
            .get('/api/products/top')
            .end((fox, res) => {
                res.body.should.be.a('array')
            })
    })    
})
