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
    it("null is not boolean", () =>{
        expect(isBoolean(null)).to.equal(false)
    })
    it("undeficned is not boolean", () =>{
        expect(isBoolean(undefined)).to.equal(false)
    })
    it("array is not boolean", () =>{
        expect(isBoolean([1, 2, 3])).to.equal(false)
    })
})