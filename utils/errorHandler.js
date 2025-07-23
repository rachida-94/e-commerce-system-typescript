"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = handleError;
function handleError(err) {
    if (err instanceof Error) {
        if (err.message.includes('image')) {
            console.error("Image processing failed:", err.message);
            return [];
        }
        else if (err.message.includes('category')) {
            console.error("Category error:", err.message);
            return [];
        }
        else {
            console.error("Unexpected Error:", err.message);
            return [];
        }
    }
    console.error("An unknown error occurred:", err);
    return [];
}
