import chai from "chai"
import reduce from "../src/reduce.js"

const expect = chai.expect

describe("test reduce.js", () =>{

    it("reduce with sum function", () =>{
        expect(reduce([2, 4, 6], (sum, n) => sum + n, 0)).to.equal(12)
    });

    it("reduce with decimals", () =>{
        expect(reduce([2.5, 4, 6], (sum, n) => sum + n, 0)).to.equal(12.5)
    });

    it("reduce with empty array", () =>{
        expect(reduce([], (sum, n) => sum + n, 0)).to.equal(0)
    });
   })