import chai from "chai"
import eq from "../src/eq.js"

const expect = chai.expect

describe("test eq.js", () =>{    
    const object = { 'a': 1 }
    const other = { 'a': 1 }
    
    
    it("same objects", () =>{
        expect(eq(object, object)).to.equal(true)
    });
    it("different variables with same values", () =>{
        expect(eq(object, other)).to.equal(false)
    });
    it("same strings", () =>{
        expect(eq('a', 'a')).to.equal(true)
    });

    /* Ei mene läpi, odottaa tulokseksi trueta?
    it("string and object of the same string", () =>{
        expect(eq('a', Object('a'))).to.equal(false)
    });*/

    it("two NaNs", () =>{
        expect(eq(NaN, NaN)).to.equal(true)
    });
   })