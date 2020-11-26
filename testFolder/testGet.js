import chai from "chai"
import get from "../src/get.js"

const expect = chai.expect

describe("test get.js", () =>{
    const basket = 
        { 'Ruisleipä': [{'price': 1.50 }]}
    

    it("gets price from object ", () =>{
        expect(get(basket, 'Ruisleipä[0].price')).to.equal(1.50)
    });
    it("gets price from object with the help of array", () =>{
        expect(get(basket, ['Ruisleipä', '0', 'price'])).to.equal(1.50)
    });
    it("returns default value (0) if product not found", () =>{
        expect(get(basket, 'Maito[0].price', 'Not found')).to.equal('Not found')
    });
   })