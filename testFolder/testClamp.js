import chai from "chai"
import clamp from "../src/clamp.js"

const expect = chai.expect

describe("Test clamp.js", () =>{
    it("test with number below lower bound", () =>{
        expect(clamp(-20, -10, 10)).to.equal(-10)
    })
    it("test with upper and lower bound same", () =>{
        expect(clamp(-20, -10, -10)).to.equal(-10)
    })
    it("test with all numbers same", () =>{
        expect(clamp(-20, -20, -20)).to.equal(-20)
    })
    it("FAIL test with number same as upper bound", () =>{
        expect(clamp(20, -20, 20)).to.equal(-20)
    })
    it("FAIL test with number over upper bound", () =>{
        expect(clamp(20, -10, 10)).to.equal(-10)
    })
    it("test with zero as lower bound", () =>{
        expect(clamp(-5, 0, 20)).to.equal(0)
    })
    it("FAIL test with zero as upper bound", () =>{
        expect(clamp(-5, -10, 0)).to.equal(-10)
    })
    it("FAIL test with number already between boundaries", () =>{
        expect(clamp(10, 5, 15)).to.equal(5)
    })
})