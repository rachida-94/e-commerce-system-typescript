
import { Product } from "../models/Product"

const url='https://dummyjson.com/products'
 interface ApiResponse {
  products: Product[];
  
}

export async function fetchData(url: string): Promise<ApiResponse> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('API Response', data);

    if (!data || !Array.isArray(data.products)) {
      throw new Error('Invalid data format: products data not found or not an array');
    }

    return data as ApiResponse
    ;
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'There was an error, try again later..';
    console.error(errorMsg);
    return { products: [] }; 
  }
}
