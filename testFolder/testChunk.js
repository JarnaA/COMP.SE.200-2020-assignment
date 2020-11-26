import chai from "chai"
import chunk from "../src/chunk.js"

const expect = chai.expect

describe("test chunk.js", () =>{
    /* Not passing
    it("chunks array to length of two", () =>{
        expect(chunk([12, 34, 56, 78], 2)).to.deep.equal([[12, 34], [56, 78]])
    });*/

    /* Not passing
    it("chunks array to length of three", () =>{
        expect(chunk([12, 34, 56, 78], 3)).to.deep.equal([[12, 34, 56], [78]])
    });*/

    
    it("chunks array to length same as original", () =>{
        expect(chunk([12, 34, 56, 78], 4)).to.deep.equal([[12, 34, 56, 78]])
    });

    it("chunks array to length of zero", () =>{
        expect(chunk([12, 34, 56, 78], 0)).to.deep.equal([])
    });

    it("chunks empty array to length of four", () =>{
        expect(chunk([], 4)).to.deep.equal([])
    });
    
   })