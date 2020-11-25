import chai from "chai"
import compact from "../src/compact.js"

const expect = chai.expect

describe("Test compact.js with arrays", () =>{
    it("test array with zero", () =>{
        expect(compact([0, 1, 2, 3])).to.have.ordered.members([1, 2, 3])
    })
    it("test array with null", () =>{
        expect(compact([1, 2, null, 3])).to.have.ordered.members([1, 2, 3])
    })
    it("test array with false", () =>{
        expect(compact([1, 2, 3, false])).to.have.ordered.members([1, 2, 3])
    })
    it("test array with empty string", () =>{
        expect(compact([1, 2, '', 3])).to.have.ordered.members([1, 2, 3])
    })
    it("test array with undefined", () =>{
        expect(compact([1, undefined, 2, 3])).to.have.ordered.members([1, 2, 3])
    })
    it("test array with NaN", () =>{
        expect(compact([NaN, 1, 2, 3])).to.have.ordered.members([1, 2, 3])
    })
    it("test array with all valid values", () =>{
        expect(compact([1, 2, 3, 7])).to.have.ordered.members([1, 2, 3, 7])
    })
    it("test array with multiple falsey values", () =>{
        expect(compact([1, null, false, 2, 3, 7, 0])).to.have.ordered.members([1, 2, 3, 7])
    })
})