import {expect} from "chai"
import sinon  from "sinon"
import User from '../backend/models/userModel.js'

import {authUser} from '../backend/controllers/userController.js'

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