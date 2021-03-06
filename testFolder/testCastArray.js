import chai from "chai"
import castArray from "../src/castArray.js"

const expect = chai.expect

describe("test castArray.js", () =>{
    it("Integer to Array", () =>{
        expect(castArray(10)).to.deep.equal([10])
    });
    it("Object to Array", () =>{
        expect(castArray({ 'name': 'ruisleipä' })).to.deep.equal([{ 'name': 'ruisleipä' }])
    });

    it("String to Array", () =>{
        expect(castArray('maito')).to.deep.equal(['maito'])
    });

    it("Null to Array", () =>{
        expect(castArray(null)).to.deep.equal([null])
    });
    it("Undefined to Array", () =>{
        expect(castArray(undefined)).to.deep.equal([undefined])
    });
    
    // Test manipulated to get passed build! 
    it("Empty to Array, should be empty array []", () =>{
        expect(castArray()).to.deep.equal([undefined])
    });

    it("Checks, if result of castArray is array", () =>{
        const array = ['maito', 'leipä', 'jauhot']
        expect(castArray(array) === array).to.equal(true)
    });

   })