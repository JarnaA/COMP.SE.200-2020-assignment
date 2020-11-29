import chai from "chai"
import defaultToAny from "../src/defaultToAny.js"

const expect = chai.expect

describe("test defaulToAny.js", () =>{
    it("test with all valid values (integers)", () =>{
        expect(defaultToAny(1, 2, 4, 20)).to.equal(1)
    })
    it("test with null value in the middle of valid values (integers)", () =>{
        expect(defaultToAny(1, null, 4, 20)).to.equal(1)
    })
    it("test with null value prior valid values (integers)", () =>{
        expect(defaultToAny(null, 2, 4, 20)).to.equal(2)
    })
    it("test with multiple null values prior valid values (integers)", () =>{
        expect(defaultToAny(null, null, 4, 20)).to.equal(4)
    })
    it("test with all null values", () =>{
        expect(defaultToAny(null, null, null)).to.equal(null)
    })
    it("test with all valid values (strings)", () =>{
        expect(defaultToAny("cat", "dog", "bat")).to.equal("cat")
    })
    it("test with undefined value in the middle of valid values (strings)", () =>{
        expect(defaultToAny("cat", undefined, "bat")).to.equal("cat")
    })
    it("test with undefined value prior valid values (strings)", () =>{
        expect(defaultToAny(undefined, "dog", "bat")).to.equal("dog")
    })
    it("test with undefined and null values priod string", () =>{
        expect(defaultToAny(undefined, null, NaN, "bat")).to.be.NaN
    })
})