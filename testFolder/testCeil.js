import chai from "chai"
import ceil from "../src/ceil.js"

const expect = chai.expect

describe("test ceil.js", () =>{
    it("test with even number", () =>{
        expect(ceil(1.000)).to.equal(1)
    })
    it("test with integer", () =>{
        expect(ceil(2)).to.equal(2)
    })
    it("test with three decimals rounded up to one decimal", () =>{
        expect(ceil(1.234, 1)).to.equal(1.3)
    })
    it("test with four decimals rounded up to two decimal", () =>{
        expect(ceil(9.4999, 2)).to.equal(9.50)
    })
    it("test with negative parameter", () =>{
        expect(ceil(1001.234, -2)).to.equal(1100)
    })
    it("test integer with negative parameter", () =>{
        expect(ceil(2, -2)).to.equal(100)
    })
})