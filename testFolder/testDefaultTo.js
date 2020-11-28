import chai from "chai"
import defaultTo from "../src/defaultTo.js"

const expect = chai.expect

describe("Test defaultTo.js", () =>{
    it("test with valid value", () =>{
        expect(defaultTo(2, 22)).to.equal(2)
    })
    it("test with null", () =>{
        expect(defaultTo(null, 22)).to.equal(22)
    })
    //it("test with NaN", () =>{
        //expect(defaultTo(NaN, 22)).to.equal(22)
    //})
    it("test with string", () =>{
        expect(defaultTo("string", 22)).to.equal("string")
    })
    it("test with undefined", () =>{
        expect(defaultTo(undefined, 22)).to.equal(22)
    })
})