import { Product, User, Order } from './models';

/
 * Represents a cosmetics product in the GlamCS catalog.
 */
export interface GlamCSProduct extends Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Description of the product
    price: number; // Price of the product
    category: GlamCSCategory; // Category of the product
    stock: number; // Available stock for the product
    imageUrl: string; // URL for the product image
    isFeatured: boolean; // Whether the product is featured
}

/
 * Represents the categories of products available at GlamCS.
 */
export enum GlamCSCategory {
    SKINCARE = 'Skincare',
    MAKEUP = 'Makeup',
    FRAGRANCE = 'Fragrance',
    HAIRCARE = 'Haircare',
}

/
 * Represents a user profile in the GlamCS cosmetics application.
 */
export interface GlamCSUser extends User {
    id: string; // Unique identifier for the user
    username: string; // Username of the user
    email: string; // Email address of the user
    passwordHash: string; // Hashed password for secure authentication
    favoriteProducts: GlamCSProduct[]; // List of favorite products
}

/
 * Represents an order placed by a user at GlamCS.
 */
export interface GlamCSOrder extends Order {
    id: string; // Unique identifier for the order
    userId: string; // Unique identifier for the user who placed the order
    productList: GlamCSProduct[]; // List of products in the order
    totalAmount: number; // Total amount for the order
    orderDate: Date; // Date when the order was placed
    status: GlamCSOrderStatus; // Current status of the order
}

/
 * Represents the possible statuses of an order at GlamCS.
 */
export enum GlamCSOrderStatus {
    PENDING = 'Pending',
    SHIPPED = 'Shipped',
    DELIVERED = 'Delivered',
    CANCELLED = 'Cancelled',
}

/
 * Exporting all GlamCS-specific types and interfaces.
 */
export {
    GlamCSProduct,
    GlamCSUser,
    GlamCSOrder,
    GlamCSCategory,
    GlamCSOrderStatus,
};