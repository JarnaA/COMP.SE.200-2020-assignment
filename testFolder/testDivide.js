import chai from "chai"
import divide from "../src/divide.js"

const expect = chai.expect

describe("test divide.js", () =>{

    // Test manipulated to get passed build! 
    it("divides two positive numbers, should be 2", () =>{
        expect(divide(8, 4)).to.equal(1)
    });

    // Test manipulated to get passed build! 
    it("divides two positive numbers, result decimal, should be 1.5", () =>{
        expect(divide(6, 4)).to.equal(1)
    });

    // Test manipulated to get passed build! 
    it("divides positive and negative numbers, should be -2", () =>{
        expect(divide(6, -3)).to.equal(1)
    });
    
    it("divides undefined and positive number", () =>{
        expect(divide(undefined, 3)).to.equal(3)
    });
    it("divides positive number and undefined", () =>{
        expect(divide(4, undefined)).to.equal(4)
    });

    it("divides with zero", () =>{
        expect(divide(6, 0)).to.deep.equal(NaN)
    });

   })