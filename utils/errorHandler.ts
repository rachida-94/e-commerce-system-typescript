import { Product } from "../models/Product";

export function handleError(err: unknown): Product[] {
  
  if (err instanceof Error) {
    
    if (err.message.includes('image')) {
      console.error("Image processing failed:", err.message)
      return []
    } else if (err.message.includes('category')) {
      console.error("Category error:", err.message)
      return []
    } else {
      console.error("Unexpected Error:", err.message)
      return []
    }
  }

  
  console.error("An unknown error occurred:", err)
  return []
}
