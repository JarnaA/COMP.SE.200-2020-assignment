import chai from "chai"
import words from "../src/words.js"

const expect = chai.expect

describe("Test words.js", () =>{
    it("test with simple string", () =>{
        expect(words("true if returns correct array")).to.have.ordered.members(["true", "if", "returns", "correct", "array"])
    })
    it("test with string with include special characters", () =>{
        expect(words("worth of million $")).to.have.ordered.members(["worth", "of", "million"])
    })
    it("test with string and pattern to include special characters", () =>{
        expect(words("worth of million $", /[^, ]+/g)).to.have.ordered.members(["worth", "of", "million", "$"])
    })
})