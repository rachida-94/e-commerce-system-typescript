"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const apiService_1 = require("./services/apiService");
const discoutCalculator_1 = require("./utils/discoutCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
const errorHandler_1 = require("./utils/errorHandler");
const productProperties = [
    "title",
    "price",
    "discountPercentage",
    "rating",
    "description",
    "category",
    "image"
];
function filterProductData(productData) {
    const filtered = {};
    for (const key of productProperties) {
        if (productData[key] !== null && productData[key] !== undefined) {
            filtered[key] = productData[key];
        }
    }
    return filtered;
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, apiService_1.fetchData)("https://dummyjson.com/products");
            if (!response.products || response.products.length === 0) {
                console.log("No products available.");
                return;
            }
            const products = response.products;
            const updatedProducts = products.map((productData) => {
                const filteredData = filterProductData(productData);
                const product = new Product_1.Product(filteredData.title, filteredData.price, filteredData.discountPercentage, filteredData.rating, filteredData.description, filteredData.category, filteredData.image);
                const productTax = (0, taxCalculator_1.calculateTax)(product);
                return {
                    product,
                    productTax
                };
            });
            updatedProducts.forEach(({ product, productTax }) => {
                const discountString = (0, discoutCalculator_1.calculateDiscount)(product);
                const discount = parseFloat(discountString.replace(/[^0-9.]/g, ""));
                const priceAfterDiscount = product.price - discount;
                console.log(`\nProduct: ${product.title}, Category: ${product.category}`);
                console.log(`Price: $${product.price.toFixed(2)}`);
                console.log(`Discount: $${discount.toFixed(2)}`);
                console.log(`Price after discount: $${priceAfterDiscount.toFixed(2)}`);
                console.log(`Tax: $${productTax.toFixed(2)}`);
            });
        }
        catch (error) {
            const errorMsg = (0, errorHandler_1.handleError)(error);
            console.log(errorMsg);
        }
    });
}
main();
