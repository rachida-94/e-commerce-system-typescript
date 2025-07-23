"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(title, price, discountPercentage, rating, description, category, image) {
        this.title = title;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
        this.image = image;
        this.description = description;
        this.rating = rating;
    }
    displayDetails() {
        return `${this.title}, ${this.category},${this.image},${this.description},${this.rating} , $${this.price.toFixed(2)}`;
    }
    getPriceWithDiscount() {
        const discount = this.price * this.discountPercentage / 100;
        return Number((this.price - discount).toFixed(2));
    }
}
exports.Product = Product;
