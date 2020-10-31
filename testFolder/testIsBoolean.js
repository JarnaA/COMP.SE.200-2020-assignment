import chai from "chai"
import isBoolean from "../src/isBoolean.js"

const expect = chai.expect

describe("Boolean", () =>{
    it("\"true\" is not boolean", () =>{
        expect(isBoolean("true")).to.equal(false)
    })
    it("true is boolean", () =>{
        expect(isBoolean(true)).to.equal(true)
    })
    //it("devision with negative dividend", () =>{
     //   expect(divisionOfIntegers(-10,2)).to.include({ quotient: -0, reminder: -10})
    //})
    //it("devision with big numbers", () =>{
    //    expect(divisionOfIntegers(203,10)).to.have.property('quotient')
    //})
})