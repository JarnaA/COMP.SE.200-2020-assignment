import chai from "chai"
import slice from "../src/slice.js"

const expect = chai.expect

var array = [1, 3, 5, 7]

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

describe("Test with empty parameters", () =>{
    it("empty array", () =>{
        expect(slice(null, 3)).to.have.ordered.members([])
    })
    it("empty start and end parameters", () =>{
        expect(slice(array)).to.have.ordered.members(array)
    })
    it("empty start parameter", () =>{
        expect(slice(array, null, 3)).to.have.ordered.members([1, 3, 5])
    })
})

describe("test with negative parameters", () =>{
    it("negative start point", () =>{
        expect(slice(array, -2)).to.have.ordered.members([5, 7])
    })
    it("negative start point bigger than length of array", () =>{
        expect(slice(array, -6)).to.have.ordered.members(array)
    })
    it("negative end point", () =>{
        expect(slice(array, 0, -1)).to.have.ordered.members([1, 3, 5])
    })
    it("negative end point bigger than length of array", () =>{
        expect(slice(array, 0, -5)).to.have.ordered.members([])
    })
})