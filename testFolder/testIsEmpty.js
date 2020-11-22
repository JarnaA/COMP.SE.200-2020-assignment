import chai from "chai"
import isEmpty from "../src/isEmpty.js"

const expect = chai.expect

// let's prepared a buffer and typed array for tests
let buffer = new ArrayBuffer(16);
let int32View = new Int32Array(buffer);
let emptyInt16View = new Int16Array();

// let's set up a function for test
function addOneToOne() {
    return 1 + 1
}

//let's create an empty Set for tests
let testSet = new Set();
// let's create another Set with values
let testSet2 = new Set();
testSet2.add("one");
testSet2.add(2);

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
    it("test with buffer", () =>{
        expect(isEmpty(buffer)).to.equal(true)
    })
    it("test with arguments", () =>{
        expect(isEmpty(buffer, int32View, emptyInt16View)).to.equal(true)
    })
    it("test with function", () =>{
        expect(isEmpty(addOneToOne)).to.equal(true)
    })
    it("test with empty Set", () =>{
        expect(isEmpty(testSet)).to.equal(true)
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
    it("test with Set with values", () =>{
        expect(isEmpty(testSet2)).to.equal(false)
    })
})