import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect

describe("test add.js", () =>{
    it("adds positive number to positive number", () =>{
        expect(add(3,6)).to.equal(9)
    });
    it("adds negative number to positive number", () =>{
        expect(add(3,-6)).to.equal(-3)
    });
    it("adds negative number to negative number", () =>{
        expect(add(-100,-6)).to.equal(-106)
    });
    it("adds positive decimal number to positive number", () =>{
        expect(add(12.5,6)).to.equal(18.5)
    });
    it("adds two zeros", () =>{
        expect(add(0,0)).to.equal(0)
    });
   })