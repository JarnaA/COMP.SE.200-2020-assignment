import chai from "chai"
import isEmpty from "../src/isEmpty.js"

const expect = chai.expect

// let's prepared a buffer and typed array for tests
let buffer = new ArrayBuffer(16);
let int32View = new Int32Array(buffer);
let emptyInt16View = new Int16Array();

describe("Test isEmpty.js with expected true values", () =>{
    it("test with null", () =>{
        expect(isEmpty(null)).to.equal(true)
    })
    var testArray = [];
    it("test with empty array", () =>{
        expect(isEmpty(testArray)).to.equal(true)
    })
    it("test with typed array", () =>{
        expect(isEmpty(emptyInt16View)).to.equal(true)
    })
})

describe("Test isEmpty.js with expected false values", () =>{
    var testArray2 = ["cat"];
    it("test with array with one value", () =>{
        expect(isEmpty(testArray2)).to.equal(false)
    })
    testArray2 = ["cat", 1];
    it("test array with two values", () =>{
        expect(isEmpty(testArray2)).to.equal(false)
    })
    it("test with string", () =>{
        expect(isEmpty("some random string")).to.equal(false)
    })
    it("test with typed array", () =>{
        expect(isEmpty(int32View)).to.equal(false)
    })
    //const testCollection = 
})