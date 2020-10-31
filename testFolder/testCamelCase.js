import chai from "chai"
import camelCase from "../src/camelCase.js"

const expect = chai.expect

describe("CamelCase", () =>{
    it("camelCased word won't change", () =>{
        expect(camelCase("redBlue")).to.equal("redBlue")
    })
    it("undercased words will change and concatenate", () =>{
        expect(camelCase("black white")).to.equal("blackWhite")
    })
    it("camelCase will add redundant whitespace in front of camelCased words", () =>{
        expect(camelCase("black white")).to.equal(" blackWhite")
    })
    it("uppercase first letter will lowercase with no other changes", () =>{
        expect(camelCase("GreenPink")).to.equal("greenPink")
    })
})