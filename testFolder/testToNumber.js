import chai from "chai"
import toNumber from "../src/toNumber.js"

const expect = chai.expect

describe("Test toNumber.js with supposed numbers", () =>{
    it("positive integer", () =>{
        expect(toNumber(1)).to.equal(1)
    })
    it("negative integer", () =>{
        expect(toNumber(-2)).to.equal(-2)
    })
    it("positive double", () =>{
        expect(toNumber(2.3)).to.be.finite
    })
    it("positive double", () =>{
        expect(toNumber(2,3)).to.be.finite
    })
})