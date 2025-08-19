export const BRAND_NAME = "GlamCS";

export const COLORS = {
    primary: "#FFA500", // orange
    secondary: "#FFFFFF", // white
};

export const CONFIG = {
    siteTitle: ${BRAND_NAME} - Elevate Your Beauty,
    description: "Discover luxurious cosmetics that enhance your natural beauty with GlamCS. Explore our range of high-quality products designed for the modern individual.",
    keywords: "cosmetics, beauty, GlamCS, luxury, modern, makeup, skincare",
    contactEmail: "support@glamcs.com",
};

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    inStock: boolean;
}

export interface User {
    id: string;
    name: string;
    email: string;
    address: string;
    purchaseHistory: Product[];
}

/
 * GlamCS Cosmetics Business Logic
 * This module handles the core functionalities and data structures
 * for managing products and user information in the GlamCS application.
 */

const products: Product[] = [
    {
        id: "1",
        name: "Luxurious Lipstick",
        description: "A rich, creamy lipstick that glides on smoothly and provides long-lasting color.",
        price: 29.99,
        category: "Lip Care",
        imageUrl: "/images/luxurious-lipstick.jpg",
        inStock: true,
    },
    {
        id: "2",
        name: "Silk Foundation",
        description: "A lightweight foundation that provides a flawless finish and feels like silk on your skin.",
        price: 39.99,
        category: "Face Makeup",
        imageUrl: "/images/silk-foundation.jpg",
        inStock: true,
    },
    // Add more products as needed
];

export const getProducts = (): Product[] => {
    return products;
}; 

export const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
}; 

export const addUserPurchase = (user: User, product: Product): User => {
    user.purchaseHistory.push(product);
    return user;
}; 

export default {
    BRAND_NAME,
    COLORS,
    CONFIG,
    getProducts,
    getProductById,
    addUserPurchase,
};