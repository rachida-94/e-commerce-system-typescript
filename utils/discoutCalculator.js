"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(Product) {
    if (Product.price <= 0 || Product.discountPercentage < 0) {
        throw new Error('Product price and discountPercentage can not be a negative');
    }
    const discountAmount = Product.discountPercentage * Product.price / 100;
    return `$${discountAmount.toFixed(2)}`;
}
