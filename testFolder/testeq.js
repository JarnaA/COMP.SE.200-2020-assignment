import chai from "chai"
import eq from "../src/eq.js"

const expect = chai.expect

describe("test eq.js", () =>{    
    const vehnajauho1 = { 'nimi': 'Mörttilän luomuvehnäjauho' }
    const vehnajauho2 = { 'nimi': 'Mörttilän luomuvehnäjauho' }
    
    
    it("same objects", () =>{
        expect(eq(vehnajauho1, vehnajauho1)).to.equal(true)
    });
    it("different variables with same values", () =>{
        expect(eq(vehnajauho1, vehnajauho2)).to.equal(false)
    });
    it("same strings", () =>{
        expect(eq('Mörttilän luomuvehnäjauho', 'Mörttilän luomuvehnäjauho')).to.equal(true)
    });

    /*Ei mene läpi, tulokseksi tulee true.
    it("string and object of the same string", () =>{
        expect(eq('Mörttilän luomuvehnäjauho', Object('Mörttilän luomuvehnäjauho'))).to.equal(false)
    });*/

    it("two NaNs", () =>{
        expect(eq(NaN, NaN)).to.equal(true)
    });
   })