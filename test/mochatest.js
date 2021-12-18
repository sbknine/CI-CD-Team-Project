import {expect} from "chai"
import sinon  from "sinon"
import User from '../backend/models/userModel.js'
import Product from '../backend/models/productModel.js'
import Order from '../backend/models/orderModel.js'

//import chai, { expect } from "chai"
//import chaiHttp from "chai-http"
//import server from "../backend/server.js"
//let should = chai.should()
//chai.use(chaiHttp)
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
describe("User Controller Test", () => {
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
})