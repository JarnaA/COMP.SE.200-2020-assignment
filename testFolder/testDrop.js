import chai from "chai"
import drop from "../src/drop.js"

const expect = chai.expect

describe("test drop.js", () =>{
    it("drops first element", () =>{
        expect(drop([2, 6, 10])).to.deep.equal([6, 10])
    });
    it("drops two elements", () =>{
        expect(drop([2, 6, 10], 2)).to.deep.equal([10])
    });

    it("drops more than there is elements", () =>{
        expect(drop([2, 6, 10], 6)).to.deep.equal([])
    });

    it("drops zero elements", () =>{
        expect(drop([2, 6, 10], 0)).to.deep.equal([2, 6, 10])
    });

   })