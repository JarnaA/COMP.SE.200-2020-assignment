import chai from "chai"
import toNumber from "../src/toNumber.js"

const expect = chai.expect

describe("Test toNumber.js with supposed numbers", () =>{
    it("positive integer", () =>{
        expect(toNumber(1)).to.equal(1)
    })
    it("negative integer", () =>{
        expect(toNumber(-2)).to.equal(-2)
    })
    it("positive double", () =>{
        expect(toNumber(2.3)).to.be.finite
    })
    it("positive double with wrong decimal separator", () =>{
        expect(toNumber(2,3)).to.equal(2,3)
    })
    it("positive double with wrong decimal separator is typeof Number", () =>{
        expect(toNumber(2,3)).to.be.a("number")
    })
    it("test with zero", () =>{
        expect(toNumber(0)).to.equal(0)
    })
})

describe("test toNumber.js with strings", () =>{
    it("positive integer as string", () =>{
        expect(toNumber("2")).to.equal(2)
    })    
    it("positive integer as string is type Number", () =>{
        expect(toNumber("2")).to.be.a("number")
    })
    it("negative integer as string", () =>{
        expect(toNumber("-2")).to.equal(-2)
    })
    it("positive double as string", () =>{
        expect(toNumber("9.99")).to.equal(9.99)
    })
    it("negative double as string", () =>{
        expect(toNumber("-6.99")).to.equal(-6.99)
    })
})

describe("test toNumber.js with arguments expected to not be numbers or fail otherways", () =>{
    it("string with chars", () =>{
        expect(toNumber("#%")).to.be.NaN
    })
    const mySymbol = Symbol()
    it("symbol as parameter", () =>{
        expect(toNumber(mySymbol)).to.be.NaN
    })
    it("has additional marks", () => {
        expect(toNumber("3.5 €")).to.be.NaN
    })
    it("has wrong decimal separator", () =>{
        expect(toNumber("3,5")).to.be.NaN
    })
    function addOneToOne() {
        return 1 + 1
    }
    it("function as parameter", () =>{
        expect(toNumber(addOneToOne)).to.be.NaN
    })
    it("array as parameter", () =>{
        expect(toNumber([1, 4, 7])).to.be.NaN
    })
    it("boolean as parameter", () =>{
        expect(toNumber(true)).to.not.be.NaN
    })
    it("empty parameter", () => {
        expect(toNumber()).to.be.NaN
    })
    it("null as parameter", () =>{
        expect(toNumber(null)).to.not.be.NaN
    })
})

describe("test toNumber.js with arguments with redundant whitespaces", () => {
    it("number string contains extra whitespaces at the beginning", () => {
        expect(toNumber(" 3.5")).to.equal(3.5)
    })
    it("number string contains extra whitespaces at the end", () => {
        expect(toNumber("3.5  ")).to.equal(3.5)
    })
    it("number string contains extra whitespaces in the middle", () => {
        expect(toNumber("3 .5")).to.be.NaN
    })
})

describe("test toNumber.js with binary, octal and hexadecimal ", () => {
    it("binary to number", () => {
        expect(toNumber('0b101')).to.equal(5)
    })
    it("octal to number", () => {
        expect(toNumber('0o5')).to.equal(5)
    })
    it("hexadecimal to number", () => {
        expect(toNumber('0x5')).to.equal(5)
    })
    it("test with bad hexadecimal", () =>{
        expect(toNumber('+0x5')).to.be.NaN
    })
})