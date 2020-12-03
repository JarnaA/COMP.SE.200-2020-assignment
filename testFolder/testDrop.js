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

    it("array is empty", () =>{
        expect(drop([], 3)).to.deep.equal([])
    });

    it("array is empty", () =>{
        expect(drop([], 3)).to.deep.equal([])
    });

    it("drops less than zero elements", () =>{
        expect(drop([2, 6, 10], -3)).to.deep.equal([2, 6, 10])
    });

    it("Empty array as parameter", () =>{
        expect(drop([], 4)).to.deep.equal([])
    });

    it("Null as parameter", () =>{
        expect(drop(null, 4)).to.deep.equal([])
    });

   })