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
    it("test with empty string and pattern",  () =>{
        expect(words("", /[^, ]+/g)).to.have.ordered.members([])
    })
    it("test with emtpy string with non matching pattern", () =>{
        expect(words("doesnotcompute", /[^a-z]+/g)).to.have.ordered.members([])
    })
})