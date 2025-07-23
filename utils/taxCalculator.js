"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaxPercentage = getTaxPercentage;
exports.calculateTax = calculateTax;
const Product_1 = require("../models/Product");
function getTaxPercentage(product) {
    if (product.category.toLowerCase() === "groceries") {
        return 3;
    }
    else {
        return 4.75;
    }
}
function calculateTax(product) {
    return (product.price * getTaxPercentage(product) / 100);
}
const product = new Product_1.Product("Essence Mascara Lash Princess", 100, 10, 4.94, "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.", "beauty", "image");
console.log(`The tax on this product is: $${calculateTax(product).toFixed(2)}`);
