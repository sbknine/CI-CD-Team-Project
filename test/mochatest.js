//import {expect} from "chai"
import sinon  from "sinon"
import User from '../backend/models/userModel.js'
import Product from '../backend/models/productModel.js'
import Order from '../backend/models/orderModel.js'

import config from '../backend/config/db.js'
import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import server from "../backend/server.js"
import { getUsers } from "../backend/controllers/userController.js"
let should = chai.should()
chai.use(chaiHttp)

/*describe("Check Api", () => {
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
})*/
/*describe("userController Test", () => {    
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
    /*it("should create user" , async () => {            
        const fixture = {
            name : "test02",
            email : "test02@example.com",
            password : "123456"
        }                
        chai.request(server)
            .post('/api/users')
            .send(fixture)
            .end((fox, res) => {
                console.log(res)            
            })
    })
    /*it("should delete user" , async (done) => {            
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
    /*it("should returen user already exists" , async () => {            
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
    })    
})*/
/*describe("productController Test", () => {
    /*it("should get product by id" , async () => {
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
})*/

/*describe("User Controller Test", () => {
    it("should register user" , async () => {
        //given
        const fixture = {             
            email: "test01@example.com",              
            name: "test01",
            password : "123456"
        }    
        let stub = sinon.stub(User , "create").returns(fixture)    
        //when
        let result = await User.create(fixture)        
        //then
        expect(result).equal(fixture)               
        stub.restore()          
    })
    it("should get user profile", async () => {
        //given
        const fixture = {
            _id: "61b9bb954bbb9f2cb82d0300", 
            email: "admin@example.com", 
            isAdmin: true, 
            name: "Admin User"
        }
        let stub = sinon.stub(User, "findById").returns(fixture._id)
        //when
        let result = await User.findById("61b9bb954bbb9f2cb82d0300")
        //then
        expect(result).to.eq(fixture._id)
        stub.restore()
    })
    it("should update profile", async () => {
        //given
        const fixture1 = {
            _id: "61bcab4119c31a4bc4d6d3d0", 
            email: "john@example.com",  
            name: "John Doe",
            password : "123456"
        }
        const fixture2 = {
            _id: "61bcab4119c31a4bc4d6d3d0", 
            email: "john2@example.com",  
            name: "John2 Doe2",
            password : "123456"
        }
        let stub = sinon.stub(User, "findById").returns(fixture1)        
        //update
        fixture1._id = fixture2._id
        fixture1.email = fixture2.email
        fixture1.name = fixture2.name
        fixture1.password = fixture2.password
        let result = await User.findById(fixture1)
        //then
        expect(result._id).to.eq(fixture2._id)
        stub.restore()
    })
    it("should get All user", async () => {
        const fixture = [
            {
            _id: "61bcab4119c31a4bc4d6d3d0", 
            email: "john@example.com",  
            name: "John Doe",
            password : "123456"          
            },
            {
                _id: "61bcab4119c31a4bc4d6d3d1", 
            email: "jane@example.com",  
            name: "Jane Doe",
            password : "123456"
            }
        ]        
        let stub = sinon.stub(User, "find").returns(fixture)
        let result = await User.find(fixture)        
        expect(result.length).to.eq(2)
        stub.restore()
    })
    it("should get user by id", async () => {
        const fixture = {
            _id: "61bcab4119c31a4bc4d6d3d0", 
            email: "john@example.com",  
            name: "John Doe",
            password : "123456"
        }
        let stub = sinon.stub(User, "findById").returns(fixture)
        let result = await User.findById(fixture._id)        
        expect(result._id).to.eq(fixture._id)
        stub.restore()       
    })
})
describe("Product Controller Test", () => {
    it("should get product by id" , async () => {
        const fixture = {
            _id : "61bb1d9caf32be36cc1220eb"
        }
        let stub = sinon.stub(Product, "findById").returns(fixture)
        let result = await Product.findById(fixture._id)
        expect(result._id).to.eq(fixture._id)
        stub.restore()
    })    
    it("should return top 3 products", async () => {
        const fixture = [
            {
                _id: "61bcab4119c31a4bc4d6d3d3",              
                name: "Airpods Wireless Bluetooth Headphones",
                price : 89.99,
                brand : "Apple"
            },
            {
                _id: "61bcab4119c31a4bc4d6d3d4",              
                name: "iPhone 11 Pro 256GB Memory",
                price : 599.99,
                brand : "Apple"
            },
            {
                _id: "61bcab4119c31a4bc4d6d3d5",              
                name: "Cannon EOS 80D DSLR Camera",
                price : 929.99,
                brand : "Cannon"
            }
        ]
        let stub = sinon.stub(Product, "find").returns(fixture)
        let result = await Product.find(fixture)              
        expect(result.length).to.eq(3)
        stub.restore()
    })  
})
describe("Order Controller Test", () => {
    it("should return order by id", async () => {
        const fixture = {
            _id: "61bcca2c474f874ee8870062",
            taxPrice: 13.5,
            shippingPrice : 100,
            totalPrice : 203.49,
            user : "61bcab4119c31a4bc4d6d3d0",
            paymentMethod : "PayPal"
        }
        let stub = sinon.stub(Order, "findById").returns(fixture._id)
        let result = await Order.findById(fixture._id)
        expect(result).to.eq(fixture._id)        
        stub.restore()
    })
    it("should update order", async () => {
        const fixture1 = {
            _id: "61bcca2c474f874ee8870062",
            taxPrice: 13.5,
            shippingPrice : 100,
            totalPrice : 203.49,
            user : "61bcab4119c31a4bc4d6d3d0",
            paymentMethod : "PayPal"
        }
        const fixture2 = {
            _id: "61bccd15d9f1bc0b6c692724",
            taxPrice : 60,
            shippingPrice : 0,
            totalPrice : 459.99,            
            user : "61bcab4119c31a4bc4d6d3d0",
            paymentMethod : "PayPal"
        }
        let stub = sinon.stub(Order, "findById").returns(fixture1)
        fixture1._id = fixture2._id
        fixture1.taxPrice = fixture2.taxPrice
        fixture1.shippingPrice = fixture2.shippingPrice
        fixture1.totalPrice = fixture2.totalPrice
        fixture1.user = fixture2.user
        fixture1.paymentMethod = fixture2.paymentMethod
        let result = await Order.findById(fixture1)        
        expect(result._id).to.eq(fixture2._id)        
        stub.restore()
    })
    it("should get all order", async () => {
        const fixture = [
            {
                _id: "61bcca2c474f874ee8870062",
                taxPrice: 13.5,
                shippingPrice : 100,
                totalPrice : 203.49,
                user : "61bcab4119c31a4bc4d6d3d0",
                paymentMethod : "PayPal"
            },
            {
                _id: "61bccd15d9f1bc0b6c692724",
                taxPrice : 60,
                shippingPrice : 0,
                totalPrice : 459.99,            
                user : "61bcab4119c31a4bc4d6d3d0",
                paymentMethod : "PayPal"
            }
        ]
        let stub = sinon.stub(Order, "find").returns(fixture)
        let result = await Order.find(fixture)        
        expect(result.length).to.eq(2)
        stub.restore()
    })
})*/

describe("User Controller Test", () => {    
    it("should login as Admin", (done) => {
        const givenRequest = {            
            email : "admin@example.com",
            password : "123456"
        }

        const mockResponseFromMongo = new User({
            _id: "61b9bb954bbb9f2cb82d0300", 
            email: "admin@example.com", 
            isAdmin: true, 
            name: "Admin User",
            password: "$2a$10$ASIJeoWGuU6GwD6KtjV7deqrHrRku4hGQFYR5qj.Pdb6sRJ2N7qra"
        })
        let stub = sinon.stub(User, "findOne").returns(mockResponseFromMongo)

        chai.request(server)
            .post('/api/users/login')
            .send(givenRequest)
            .end((err, res) => {                                               
                res.body.should.have.property('email').eql("admin@example.com");
                stub.restore();  
                done();                 
            })
             
    })
    it("should get user profile", (done) => {
        const givenRequest = {
            email : "john@example.com",
            password : "123456"
        }

        const mockResponseFromMongo = new User({
            _id: "61bcab4119c31a4bc4d6d3d0", 
            email: "john@example.com", 
            isAdmin: false, 
            name: "John Doe",
            password: "$2a$10$5F6QxpHUacGhqdyxekH0wOCumsROVzTgkmoHY42c7.Vi/TupFg.RO"
        })
        let stub = sinon.stub(User, "findById")
        .onFirstCall().returns({
            select: sinon.stub().returns(mockResponseFromMongo)
        })
        .onSecondCall().returns(mockResponseFromMongo);

        chai.request(server)
            .get('/api/users/profile')
            .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmNhYjQxMTljMzFhNGJjNGQ2ZDNkMCIsImlhdCI6MTYzOTgyODY3NSwiZXhwIjoxNjQyNDIwNjc1fQ.AfXBIpusZa9w0Lo7ZT4CDLma4-7Km93J_MlC8WIPKTk"}`)
            .send(givenRequest)
            .end((err, res) => {                                    
                res.body.should.have.property('name').eql("John Doe")
                stub.restore()
                done(); 
            })
    })
    it("should return user already exists" , (done) => {            
        const givenRequest = {
            email : "admin@example.com",
            password : "123456"
        }

        const mockResponseFromMongo = new User({
            _id: "61b9bb954bbb9f2cb82d0300", 
            email: "admin@example.com", 
            isAdmin: true, 
            name: "Admin User",
            password: "$2a$10$ASIJeoWGuU6GwD6KtjV7deqrHrRku4hGQFYR5qj.Pdb6sRJ2N7qra"
        })
        let stub = sinon.stub(User, "findOne").returns(mockResponseFromMongo)

        chai.request(server)
            .post('/api/users')
            .send(givenRequest)
            .end((err, res) => {                                
                res.should.have.status(400)
                stub.restore()
                done()            
            })        
    })
    it("should get user profile by id", (done) => {
        const givenRequest = {
            email : "admin@example.com",
            password : "123456"
        }

        const mockResponseFromMongo = new User({
            _id: "61b9bb954bbb9f2cb82d0300", 
            email: "admin@example.com", 
            isAdmin: true, 
            name: "Admin User",
            password: "$2a$10$ASIJeoWGuU6GwD6KtjV7deqrHrRku4hGQFYR5qj.Pdb6sRJ2N7qra"
        })
        let stub = sinon.stub(User, "findById")
        .onFirstCall().returns({
            select: sinon.stub().returns(mockResponseFromMongo)
        })
        .onSecondCall().returns({
            select: sinon.stub().returns(mockResponseFromMongo)
        })      
        .onThirdCall().returns(mockResponseFromMongo)

        chai.request(server)
            .get('/api/users/' + mockResponseFromMongo._id)
            .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmRmZjVlYWRjZDNhNDU2ODgyZWY4OCIsImlhdCI6MTYzOTg0MjM3NSwiZXhwIjoxNjQyNDM0Mzc1fQ.ZuNbOTSdMUjg2A2NHMbHPtYjYgjO4rN4V8KJieGzSxU"}`)
            .send(givenRequest)
            .end((err, res) => {                              
                res.body.should.have.property('name').eql("Admin User")
                stub.restore()                                
                done()
            })      
    })
    /*it("should get all users", (done) => {
        const givenRequest = {
            name : "Admin User",
            isAdmin: true,         
            email : "admin@example.com",
            password : "123456"
        }

        const mockResponseFromMongo = new User([
            {
                isAdmin: true,
                _id: "61be119af2a34b28e0cdc5b4",
                name: 'Admin User',
                email: 'admin@example.com',
                password: '$2a$10$RmTMhPBt.frry2GBwjH70eYwES9QbCkMcjUGYGTWKbBN5etf/qPvu',
            },
            {
                isAdmin: false,
                _id: "61be119af2a34b28e0cdc5b5",
                name: 'John Doe',
                email: 'john@example.com',
                password: '$2a$10$wH02iFuRooZ0w9LtaTBmNOwJR8Q36Zf/Nc3DS1tbZdsi9YrtuZKje',
            },
            {
                isAdmin: false,
                _id: "61be119af2a34b28e0cdc5b6",
                name: 'Jane Doe',
                email: 'jane@example.com',
                password: '$2a$10$JRLXh9FUBnI0HdPVF4LHXOBcYmpDTaNSIUjNeXEEWNy2f7ArlIqlq',
            }
        ])
        sinon.stub(User, 'find').returns(mockResponseFromMongo);
        console.log(User.find())
        //expect(User.find()).to.have.length(3)
        /*let stub = sinon.stub(User, "find").callsFake(() => {
            return{}
        })
        /*.onFirstCall().returns({
            select: sinon.stub().returns(mockResponseFromMongo)
        })
        .onSecondCall().returns({
            select: sinon.stub().returns(mockResponseFromMongo)
        })
        .onThirdCall().returns(mockResponseFromMongo)*/

        /*chai.request(server)
            .get('/api/users')
            .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmRmZjVlYWRjZDNhNDU2ODgyZWY4OCIsImlhdCI6MTYzOTg0MjM3NSwiZXhwIjoxNjQyNDM0Mzc1fQ.ZuNbOTSdMUjg2A2NHMbHPtYjYgjO4rN4V8KJieGzSxU"}`)
            .send(givenRequest)
            .end((err, res) => {
                console.log(res.body)
                //res.body.should.be.a('array')
                stub.restore() 
                done() 
            })    
    })*/
    // it("should get all users", (done) => {
    //     const givenRequest = {}
    //     const mockResponseFromMongo = new User([
    //         {
    //             isAdmin: true,
    //             _id: "61be119af2a34b28e0cdc5b4",
    //             name: 'Admin User',
    //             email: 'admin@example.com',
    //             password: '$2a$10$RmTMhPBt.frry2GBwjH70eYwES9QbCkMcjUGYGTWKbBN5etf/qPvu',
    //         },
    //         {
    //             isAdmin: false,
    //             _id: "61be119af2a34b28e0cdc5b5",
    //             name: 'John Doe',
    //             email: 'john@example.com',
    //             password: '$2a$10$wH02iFuRooZ0w9LtaTBmNOwJR8Q36Zf/Nc3DS1tbZdsi9YrtuZKje',
    //         },
    //         {
    //             isAdmin: false,
    //             _id: "61be119af2a34b28e0cdc5b6",
    //             name: 'Jane Doe',
    //             email: 'jane@example.com',
    //             password: '$2a$10$JRLXh9FUBnI0HdPVF4LHXOBcYmpDTaNSIUjNeXEEWNy2f7ArlIqlq',
    //         }
    //     ])
    //     let stub = sinon.stub(User, "find")
    //     .onFirstCall().returns({
    //         select: sinon.stub().returns(mockResponseFromMongo)
    //     })
    //     .onSecondCall().returns({
    //         select: sinon.stub().returns(mockResponseFromMongo)
    //     })      
    //     .onThirdCall().returns({})
    //     chai.request(server)
    //         .get("/api/users")
    //         .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmRmZjVlYWRjZDNhNDU2ODgyZWY4OCIsImlhdCI6MTYzOTg0MjM3NSwiZXhwIjoxNjQyNDM0Mzc1fQ.ZuNbOTSdMUjg2A2NHMbHPtYjYgjO4rN4V8KJieGzSxU"}`)
    //         .send(givenRequest)
    //         .end((err, res) => {
    //             console.log(res.body)
    //             stub.restore()                
    //             done()
    //         })       
    // })           
})
describe("Product Controller Test", () => {
    /*it("should get all product", (done) => {
        const mockResponseFromMongo = new Product({
            _id: "61bcab4119c31a4bc4d6d3d5", 
            rating : 0,
            numReviews: 0,
            countInStock : 0,
            price : 929.99,
            name : "Cannon EOS 80D DSLR Camera",
            image : "/images/camera.jpg",
            description : "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
            brand : "Cannon",
            category : "Electronics"
        })
        let stub = sinon.stub(Product, "find").returns(mockResponseFromMongo)

        chai.request(server)
            .get('/api/products')
            .end((err, res) => {
                console.log(res.body)               
                res.body.should.have.property('page').eql(1)
                stub.restore()
                done()                
            })    
    })
    it("should get top 3 product", (done) => {
        const mockResponseFromMongo = new Product([
            {
            _id: "61bcab4119c31a4bc4d6d3d5", 
            rating : 0,
            numReviews: 0,
            price : 929.99,
            countInStock : 0,
            name : "Cannon EOS 80D DSLR Camera",
            image : "/images/camera.jpg",
            description : "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
            brand : "Cannon",
            category : "Electronics"
            },
            {
                _id: "61bcab4119c31a4bc4d6d3d3", 
                rating : 0,
                numReviews: 0,
                price : 89.99,
                countInStock : 3,
                name : "Airpods Wireless Bluetooth Headphones",
                image : "/images/airpods.jpg",
                description : "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
                brand : "Apple",
                category : "Electronics"
            },
            {
                _id: "61bcab4119c31a4bc4d6d3d4", 
                rating : 0,
                numReviews: 0,
                price : 599.99,
                countInStock : 10,
                name : "iPhone 11 Pro 256GB Memory",
                image : "/images/phone.jpg",
                description : "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
                brand : "Apple",
                category : "Electronics"
            }
        ])
        let stub = sinon.stub(Product, "find").returns(mockResponseFromMongo)

        chai.request(server)
            .get('/api/products/top')
            .end((err, res) => {               
                res.body.should.be.a('array')
                done()
            })
        stub.restore()
    })*/
    it("should get product by id", (done) => {
        const givenRequest = {
            name : "iPhone 11 Pro 256GB Memory"
        }
        const mockResponseFromMongo = new Product({
            _id: "61bcab4119c31a4bc4d6d3d4", 
            rating : 0,
            numReviews: 0,
            price : 599.99,
            countInStock : 10,
            name : "iPhone 11 Pro 256GB Memory",
            image : "/images/phone.jpg",
            description : "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
            brand : "Apple",
            category : "Electronics"
        })
        let stub = sinon.stub(Product, "findById").returns(mockResponseFromMongo)

        chai.request(server)
            .get("/api/products/" + mockResponseFromMongo._id)
            .send(givenRequest)
            .end((err, res) => {
                res.body.should.have.property('_id').eql("61bcab4119c31a4bc4d6d3d4")                
                stub.restore()
                done()
            })
    })
    /*it("should create product", (done) => {
        const givenRequest = {
            name : "test01",
            price : 49.99,
            user : "61bcab4119c31a4bc4d6d3cf",
            brand : "TEST01",
            category : "Test01",
            countInStock : 10,
            numReviews : 0,
            description : "TesT01"
        }
        const mockResponseFromMongo = new Order({
            name : "test01",
            price : 49.99,
            user : "61bcab4119c31a4bc4d6d3cf",
            brand : "TEST01",
            category : "Test01",
            countInStock : 10,
            numReviews : 0,
            description : "TesT01" 
        })

        let stub = sinon.stub(Product, "")
        .onFirstCall().returns({
            select: sinon.stub().returns(mockResponseFromMongo)
        })
        .onSecondCall().returns({
            select: sinon.stub().returns(mockResponseFromMongo)
        })      
        .onThirdCall().returns(mockResponseFromMongo)

        chai.request(server)
            .post("/api/products")
            .send(givenRequest)
            .end((err, res) => {
                console.log(res.body)
                stub.restore()
                done()
            })
    })*/       
})
describe("Order Controller Test", () => {
    /*it("should return status 404 (Order not found)", (done) => {
        const givenRequest = {
            user : {
                email : "john@example.com",
                password : "123456"
            }            
        }
        const mockResponseFromMongo = new Order({            
            _id : "61bdd130c63dc54500bf5d69",
            taxPrice : 13.5,
            shippingPrice : 100,
            totalPrice : 203.49
        })
        let stub = sinon.stub(Order, "findById")
        .onFirstCall().returns({
            select: sinon.stub().returns(mockResponseFromMongo)
        })
        .onSecondCall().returns(mockResponseFromMongo)        
        
        chai.request(server)
            .get('/api/orders/' + mockResponseFromMongo._id)
            .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmNhYjQxMTljMzFhNGJjNGQ2ZDNjZiIsImlhdCI6MTYzOTgyNDMyNiwiZXhwIjoxNjQyNDE2MzI2fQ.Prrb2A4XGFg3X5RHqPvLuWMLAEdzelSTwEJYj3Z4zhw"}`)
            .send(givenRequest)
            .end((err, res) => {
                console.log(res.body)
                //res.body.should.have.property('message').eql('Order not found')
                stub.restore()
                done()    
            })
                             
    })*/
    /*it("should get all orders", (done) => {
        const givenRequest = {

        }
        const mockResponseFromMongo = new Order({            
            _id : "61bdd130c63dc54500bf5d69",
            taxPrice : 13.5,
            shippingPrice : 100,
            totalPrice : 203.49
        })
        let stub = sinon.stub(User, "find")
        .onFirstCall().returns({
            select: sinon.stub().returns(mockResponseFromMongo)
        })
        .onSecondCall().returns({
            select: sinon.stub().returns(mockResponseFromMongo)
        })      
        .onThirdCall().returns(mockResponseFromMongo)

        chai.request(server)
            .get('/api/orders')
            .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmNhYjQxMTljMzFhNGJjNGQ2ZDNjZiIsImlhdCI6MTYzOTgyNDMyNiwiZXhwIjoxNjQyNDE2MzI2fQ.Prrb2A4XGFg3X5RHqPvLuWMLAEdzelSTwEJYj3Z4zhw"}`)
            //.send(givenRequest)
            .end((err, res) => {
                console.log(res.body)
                stub.restore()
                done()
            })
    })*/
    it("should get my orders", (done) => {
        const req = {
            email : "admin@example.com",
            password : "123456"
        }
        const mockRes = new User ({
            isAdmin: true,
            _id: "61be119af2a34b28e0cdc5b4",
            name: 'Admin User',
            email: 'admin@example.com',
            password: '$2a$10$RmTMhPBt.frry2GBwjH70eYwES9QbCkMcjUGYGTWKbBN5etf/qPvu'
        })
        let stub = sinon.stub(User, "findById")
        .onFirstCall().returns({
            select : sinon.stub().returns(mockRes)
        })
        .onSecondCall().returns(mockRes)
        chai.request(server)
            .get('/api/users/profile')            
            .send(req)
            .end((err1,res1) => {
                const givenRequest = {
                    email : "admin@example.com",
                    password : "123456"
                }
                const mockResponseFromMongo = new Order({
                    user : {
                        _id: "61b9bb954bbb9f2cb82d0300", 
                        email: "admin@example.com", 
                        isAdmin: true, 
                        name: "Admin User",
                        password: "$2a$10$ASIJeoWGuU6GwD6KtjV7deqrHrRku4hGQFYR5qj.Pdb6sRJ2N7qra"
                    },
                    orderItems : {
                        name : null,
                        qty : null,
                        image : null,
                        price : null,                
                    }
                })        
                let stub1 = sinon.stub(Order , "find").returns(mockResponseFromMongo)
                    chai.request(server)
                        .get('/api/orders/myorders')
                        .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmRmZjVlYWRjZDNhNDU2ODgyZWY4OCIsImlhdCI6MTYzOTg0MjM3NSwiZXhwIjoxNjQyNDM0Mzc1fQ.ZuNbOTSdMUjg2A2NHMbHPtYjYgjO4rN4V8KJieGzSxU"}`)
                        .send(givenRequest)
                        .end((err, res) => {
                            console.log(res.body)
                            stub1.restore()
                            stub.restore()                    
                            done()                        
                        })
            })
        /*const givenRequest = {
            email : "admin@example.com",
            password : "123456"
        }
        const mockResponseFromMongo = new Order({
            user : {
                _id: "61b9bb954bbb9f2cb82d0300", 
                email: "admin@example.com", 
                isAdmin: true, 
                name: "Admin User",
                password: "$2a$10$ASIJeoWGuU6GwD6KtjV7deqrHrRku4hGQFYR5qj.Pdb6sRJ2N7qra"
            },
            orderItems : {
                name : null,
                qty : null,
                image : null,
                price : null,                
            }
        })        
        let stub1 = sinon.stub(Order , "find").returns(mockResponseFromMongo)
            chai.request(server)
                .get('/api/orders/myorders')
                .set('Authorization', `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmRmZjVlYWRjZDNhNDU2ODgyZWY4OCIsImlhdCI6MTYzOTg0MjM3NSwiZXhwIjoxNjQyNDM0Mzc1fQ.ZuNbOTSdMUjg2A2NHMbHPtYjYgjO4rN4V8KJieGzSxU"}`)
                .send(givenRequest)
                .end((err, res) => {
                    console.log(res.body)
                    stub1.restore()                    
                    done()                        
                })*/
    })      
      
})