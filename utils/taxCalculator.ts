 import { Product } from '../models/Product'



   export function getTaxPercentage(product:Product): number {
        if (product.category.toLowerCase() === "groceries") {
            return 3;
        } else {
            return 4.75;
        }
    }

export function calculateTax(product:Product): number {
    return (product.price * getTaxPercentage(product) / 100)
}
const product=new Product(
   "Essence Mascara Lash Princess" , 
    100, 
    10,  
    4.94, 
    "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "beauty",  
    "image"
    
)

console.log(`The tax on this product is: $${calculateTax(product).toFixed(2)}`)