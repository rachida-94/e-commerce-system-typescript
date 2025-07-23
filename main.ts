import { Product } from "./models/Product"
import { fetchData } from "./services/apiService"
import { calculateDiscount } from "./utils/discoutCalculator"
import { calculateTax } from "./utils/taxCalculator"
import { handleError } from "./utils/errorHandler"



const productProperties = [
  "title",
  "price",
  "discountPercentage",
  "rating",
  "description",
  "category",
  "image"
]


function filterProductData(productData: any): Partial<Product> {
  const filtered: Partial<Product> = {};
  for (const key of productProperties) {
    if (productData[key] !== null && productData[key] !== undefined) {
      filtered[key as keyof Product] = productData[key]

    }
  }
  return filtered;
}

async function main() {
  try {
    const response = await fetchData("https://dummyjson.com/products");

    if (!response.products || response.products.length === 0) {
      console.log("No products available.");
      return;
    }

    const products: any[] = response.products;

    const updatedProducts = products.map((productData) => {
      const filteredData = filterProductData(productData)
      const product = new Product(
        filteredData.title as string,
        filteredData.price as number,
        filteredData.discountPercentage as number,
        filteredData.rating as number,
        filteredData.description as string,
        filteredData.category as string,
        filteredData.image as string
      );

      const productTax = calculateTax(product);

      return {
        product,
        productTax
      };
    });

    updatedProducts.forEach(({ product, productTax }) => {
      const discountString = calculateDiscount(product);
      const discount = parseFloat(discountString.replace(/[^0-9.]/g, ""))
      const priceAfterDiscount = product.price - discount;

      console.log(`\nProduct: ${product.title}, Category: ${product.category}`)
      console.log(`Price: $${product.price.toFixed(2)}`);
      console.log(`Discount: $${discount.toFixed(2)}`);
      console.log(`Price after discount: $${priceAfterDiscount.toFixed(2)}`);
      console.log(`Tax: $${productTax.toFixed(2)}`);
    });

  } catch (error) {
    const errorMsg = handleError(error);
    console.log(errorMsg);
  }
}

main();