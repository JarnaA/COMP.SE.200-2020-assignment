import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect

describe("test add.js", () =>{
    it("adds positive number to positive number", () =>{
        expect(add(3,6)).to.equal(9)
    });
   })