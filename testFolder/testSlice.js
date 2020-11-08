import chai from "chai"
import slice from "../src/slice.js"

const expect = chai.expect

var array = [1, 3, 5, 7]
var result1 = "5, 7"

describe("Test slice.js with four field array", () =>{
    it("slice at index 2", () =>{
        expect(slice(array, 2)).to.have.ordered.members([5, 7])
    })
    it("slice at index 1", () =>{
        expect(slice(array, 1)).to.have.ordered.members([3, 5, 7])
    })
    it("slice at index out of bounds", () =>{
        expect(slice(array, 4)).to.have.ordered.members([])
    })
})