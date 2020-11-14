import chai from "chai"
import capitalize from "../src/capitalize.js"

const expect = chai.expect

describe("Test capitalize.js", () =>{
    it("all capitalised word", () =>{
        expect(capitalize("BIG")).to.equal("Big")
    })
    it("all small word", () =>{
        expect(capitalize("small")).to.equal("Small")
    })
    it("two lowercase words", () =>{
        expect(capitalize("small smaller")).to.equal("Small smaller")
    })
    it("already capitalized word not to change", () =>{
        expect(capitalize("Bigger")).to.equal("Bigger")
    })
})