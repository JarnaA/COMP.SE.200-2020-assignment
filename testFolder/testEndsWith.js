import chai from "chai"
import endsWith from "../src/endsWith.js"

const expect = chai.expect

describe("tests endsWith.js with ending substring", () =>{
    it("test with matching single char at the end", () =>{
        expect(endsWith("market", "t")).to.equal(true)
    })
    it("test with not matching single char at the end", () =>{
        expect(endsWith("market", "a")).to.equal(false)
    })
    it("test with matching two char at the end", () =>{
        expect(endsWith("market", "et")).to.equal(true)
    })
    it("test with not matching two char at the end", () =>{
        expect(endsWith("market", "ea")).to.not.equal(true)
    })
})

describe("tests endsWith.js with complete substring", () =>{
    it("test with matching string", () =>{
        expect(endsWith("market", "market")).to.equal(true)
    })
    it("test with not matching string", () =>{
        expect(endsWith("market", "marke")).to.not.equal(true)
    })
})

describe("tests endsWith.js with substring at certain position", () =>{
    it("test with matching substring at the beginning", () =>{
        expect(endsWith("market", "m", 1)).to.equal(true)
    })
    it("test with not matching string", () =>{
        expect(endsWith("market", "e", 1)).to.not.equal(true)
    })
    it("test with not matching substring at the end", () =>{
        expect(endsWith("market", "t", 6)).to.equal(true)
    })
})

describe("tests endsWith.js with negative position", () =>{
    it("test with matching substring", () =>{
        expect(endsWith("market", "m", -1)).to.equal(false)
    })
    it("test with not matching string", () =>{
        expect(endsWith("market", "e", -4)).to.not.equal(true)
    })
})

describe("tests endsWith.js with position bigger than length", () =>{
    it("test with not matching substring", () =>{
        expect(endsWith("market", "m", 7)).to.equal(false)
    })
    it("test with matching substring", () =>{
        expect(endsWith("market", "t", 7)).to.equal(true)
    })
})