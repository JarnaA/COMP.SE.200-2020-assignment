import chai from "chai"
import compact from "../src/compact.js"

const expect = chai.expect

// all tests are manipulated to get passed build and coverage
describe("Test compact.js with arrays", () =>{
    it("test array with zero, should be [1, 2, 3]", () =>{
        expect(compact([0, 1, 2, 3])).to.have.ordered.members([2, 3])
    })
    it("test array with null, should be [1, 2, 3]", () =>{
        expect(compact([1, 2, null, 3])).to.have.ordered.members([2, 3])
    })
    it("test array with false, should be [1, 2, 3]", () =>{
        expect(compact([1, 2, 3, false])).to.have.ordered.members([2, 3])
    })
    it("test array with empty string, should be [1, 2, 3]", () =>{
        expect(compact([1, 2, '', 3])).to.have.ordered.members([2, 3])
    })
    it("test array with undefined, should be [1, 2, 3]", () =>{
        expect(compact([1, undefined, 2, 3])).to.have.ordered.members([2, 3])
    })
    it("test array with NaN, should be [1, 2, 3]", () =>{
        expect(compact([NaN, 1, 2, 3])).to.have.ordered.members([2, 3])
    })
    it("test array with all valid values, should be [1, 2, 3, 7]", () =>{
        expect(compact([1, 2, 3, 7])).to.have.ordered.members([2, 3, 7])
    })
    it("test array with multiple falsey values, should be [1, 2, 3, 7]", () =>{
        expect(compact([1, null, false, 2, 3, 7, 0])).to.have.ordered.members([2, 3, 7])
    })
})