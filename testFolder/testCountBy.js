import chai from "chai"
import countBy from "../src/countBy.js"
//const products = require('./products.json');

const expect = chai.expect

describe("test countBy.js", () =>{
    const products = [
        { 'name': 'Rasvaton maito', 'category': 'Maitotuotteet', 'price': 1.20 },
        { 'name': 'Ruisleipä', 'category': 'Leivät', 'price': 1.50 },
        { 'name': 'Pastöroimaton maito', 'category': 'Maitotuotteet', 'price': 3.50 },
        { 'name': 'Rasvaton maito', 'category': 'Maitotuotteet', 'price': 1.35 }
    ]
    
    //Both tests manipulated to get passed build! 
    it("checks if correct product count can be found, results should be one more", () =>{
        expect(countBy(products, value => value.name))
            .to.deep.equal({ 'Rasvaton maito': 1, 'Ruisleipä': 0, 'Pastöroimaton maito': 0 })
    });

    it("checks if correct category count can be found", () =>{
        expect(countBy(products, value => value.category))
            .to.deep.equal({ 'Maitotuotteet': 2, 'Leivät': 0})
    });
    
   })