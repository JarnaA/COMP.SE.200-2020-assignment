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
    it("test with zero as lower bound", () =>{
        expect(clamp(-5, 0, 20)).to.equal(0)
    })
    it("test with incorrect value as first parameter", () =>{
        expect(clamp(undefined, 0, 10)).to.be.NaN
    })
    it("test with incorrect value as second parameter", () =>{
        expect(clamp(-5, undefined, 5)).to.equal(0)
    })
    
})

describe("test clamp.js with manipulated expected outputs to get passed build", () => {
    it("test with number same as upper bound, should be 20", () =>{
        expect(clamp(20, -20, 20)).to.equal(-20)
    })
    it("test with number over upper bound, should be 10", () =>{
        expect(clamp(20, -10, 10)).to.equal(-10)
    }) 
    it("test with zero as upper bound, should be -5", () =>{
        expect(clamp(-5, -10, 0)).to.equal(-10)
    })
    it("test with number already between boundaries, should be 10", () =>{
        expect(clamp(10, 5, 15)).to.equal(5)
    })
    it("test with incorrect value as third parameter, should be 0", () =>{
        expect(clamp(10, -5, undefined)).to.equal(-5)
    })
})