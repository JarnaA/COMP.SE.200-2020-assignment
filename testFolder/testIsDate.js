import chai from "chai"
import isDate from "../src/isDate.js"

const expect = chai.expect

describe("test isDate.js", () =>{
    it("test with empty new Date", () =>{
        expect(isDate(new Date)).to.equal(true)
    })
    it("test with Date.now", () =>{
        expect(isDate(Date.now)).to.equal(false)
    })
    it("test with string", () =>{
        expect(isDate("23.12.2020")).to.equal(false)
    })
    it("test with UTC date", () =>{
        expect(isDate(new Date(Date.UTC(20, 12, 12, 0, 0, 0)))).to.equal(true)
    })
    it("test with new Date with date string", () =>{
        expect(isDate(new Date('12 24 2020'))).to.equal(true)
    })
    it("test with with date string", () =>{
        expect(isDate('12 24 2020')).to.equal(false)
    })
    it("test with null", () =>{
        expect(isDate(null)).to.equal(false)
    })
    it("test with undefined", () =>{
        expect(isDate(undefined)).to.equal(false)
    })
    it("test with empty parameters", () =>{
        expect(isDate()).to.equal(false)
    })
    it("test with date string", () =>{
        expect(isDate('Tue December 08 2020')).to.equal(false)
    })
})