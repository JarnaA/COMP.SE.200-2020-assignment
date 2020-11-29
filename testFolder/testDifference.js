import chai from "chai"
import difference from "../src/difference.js"

const expect = chai.expect

describe("Test difference.js", () =>{
    it("test with totally different arrays", () =>{
        expect(difference([1, 2, 3], [5, 6, 7])).to.have.ordered.members([1, 2, 3])
    })
    it("test with totally same arrays", () =>{
        expect(difference([1, 2, 3], [1, 2, 3])).to.have.ordered.members([])
    })
    it("test with partially same arrays", () =>{
        expect(difference([1, 2, 3], [1, 4, 5])).to.have.ordered.members([2, 3])
    })
    it("test with empty array at first parameter", () =>{
        expect(difference([], [1, 2, 3])).to.have.ordered.members([])
    })
    it("test with empty array as second parameter", () =>{
        expect(difference([1, 2, 3], [])).to.have.ordered.members([1, 2, 3])
    })
    it("test with not array first parameter", () =>{
        expect(difference("string", ["s", "t", "r", "i", "n"])).to.have.ordered.members([])
    })
    it("test with not array as second parameter", () =>{
        expect(difference(["s", "t", "r", "i", "n"], "str")).to.have.ordered.members(["s", "t", "r", "i", "n"])
    })
})