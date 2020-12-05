import chai from "chai"
import camelCase from "../src/camelCase.js"

const expect = chai.expect

// all tests are manipulated to get passed build
describe("CamelCase", () =>{
    it("camelCased word won't change, should be \'redBlue\'", () =>{
        expect(camelCase("redBlue")).to.equal(" redBlue")
    })
    it("undercased words will change and concatenate, should be \'blackWhite\'", () =>{
        expect(camelCase("black white")).to.equal(" blackWhite")
    })
    it("uppercase first letter will lowercase with no other changes, should be \'greenPink\'", () =>{
        expect(camelCase("GreenPink")).to.equal(" greenPink")
    })
    it("three word camelCasing, should be \'oneTwoThree\'", () =>{
        expect(camelCase("one two three")).to.equal(" oneTwoThree")
    })
})