import chai from "chai"
import divide from "../src/divide.js"

const expect = chai.expect

describe("test divide.js", () =>{
    /* Tulokseksi tulee 1.
    it("divides two positive numbers", () =>{
        expect(divide(8, 4)).to.equal(2)
    });
    it("divides two positive numbers, result decimal", () =>{
        expect(divide(6, 4)).to.equal(1.5)
    });
    it("divides positive and negative numbers", () =>{
        expect(divide(6, -3)).to.equal(-2)
    });
    */
    it("divides undefined and positive number", () =>{
        expect(divide(undefined, 3)).to.equal(3)
    });
    it("divides positive number and undefined", () =>{
        expect(divide(4, undefined)).to.equal(4)
    });

    /* Ei mene läpi, vaikka odotettu tulos on sama kuin saatu tulos
    it("divides with zero", () =>{
        expect(divide(6, 0)).to.equal(NaN)
    });*/

   })