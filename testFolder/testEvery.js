import chai from "chai"
import every from "../src/every.js"

const expect = chai.expect

describe("Test every.js", () =>{
    it("test with all valid String values", () =>{
        expect(every(["one", "two", "three"], String)).to.equal(true)
    })
    it("test with one unvalid value", () =>{
        expect(every(["one", 2, "three"], String)).to.equal(true)
    })
    /*it("test with all valid boolean values", () =>{
        expect(every([true, false], Boolean)).to.equal(true)
    })
    it("test with all valid boolean values in different order", () =>{
        expect(every([false, true], Boolean)).to.equal(true)
    })
    it("test with unvalid boolean values", () =>{
        expect(every([true, "cat"], Boolean)).to.equal(false)
    })
    it("test with unvalid boolean values in different order", () =>{
        expect(every(["cat", true], Boolean)).to.equal(false)
    })*/
    it("test with null boolean values in different order", () =>{
        expect(every(["cat", null, true], Boolean)).to.equal(false)
    })
    it("test with all valid numeric values", () =>{
        expect(every([1, 2, 3, 4], Number)).to.equal(true)
    })
    it("test with one unvalid value in numeric array", () =>{
        expect(every([1, 2, 3, "cat"], Number)).to.equal(false)
    })
    it("test with null in string array", () =>{
        expect(every(["one", "cat", null, "laptop"], String)).to.equal(true)
    })
    it("test with boolean in string array", () =>{
        expect(every(["one", "cat", false, "laptop"], String)).to.equal(true)
    })
})