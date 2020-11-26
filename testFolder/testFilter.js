import chai from "chai"
import filter from "../src/filter.js"

const expect = chai.expect

const users = [{ 'user': 'barney', 'active': true },
               { 'user': 'fred',   'active': false }
              ]

describe("test filter.js", () =>{
    const products = [
        { 'name': 'Rasvaton maito', 'category': 'Maitotuotteet', 'price': 1.20 },
        { 'name': 'Ruisleipä', 'category': 'Leivät', 'price': 1.50 },
        { 'name': 'Pastöroimaton maito', 'category': 'Maitotuotteet', 'price': 3.50 },
        { 'name': 'Rasvaton maito', 'category': 'Maitotuotteet', 'price': 1.35 }
    ]

    it("Gets products with specific name", () =>{
        expect(filter(products, ({ name }) => name === 'Ruisleipä')).to.deep.equal([{ 'name': 'Ruisleipä', 'category': 'Leivät', 'price': 1.50 }])
    });
    it("Gets products that costs less that 2 euros", () =>{
        expect(filter(products, ({ price }) => price < 2.00)).to.deep.equal([   { 'name': 'Rasvaton maito', 'category': 'Maitotuotteet', 'price': 1.20 },
                                                                                { 'name': 'Ruisleipä', 'category': 'Leivät', 'price': 1.50 },
                                                                                { 'name': 'Rasvaton maito', 'category': 'Maitotuotteet', 'price': 1.35 }])
    });
    
    it("Search from an empty array", () =>{
        expect(filter(null, ({ name }) => name === 'Ruisleipä')).to.deep.equal([ []])
    });
   })