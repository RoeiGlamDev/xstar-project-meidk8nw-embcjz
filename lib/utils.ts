import { cn } from './classnames'; // Assuming cn is a utility function for class names

// GlamCS specific types and interfaces
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    favorites: Product[];
}

/
 * Utility functions for GlamCS application
 * These functions are designed to streamline the formatting and handling of data 
 * within the GlamCS cosmetics website, ensuring consistency and elegance in presentation.
 */

/
 * Formats a price to a string with a currency symbol.
 * @param price - The price to format.
 * @returns A formatted price string with currency symbol.
 */
export function formatPrice(price: number): string {
    return $${price.toFixed(2)};
}

/
 * Formats the product description by truncating to a max length and adding ellipsis.
 * @param description - The full product description.
 * @param maxLength - The maximum length of the description.
 * @returns A formatted description string.
 */
export function formatDescription(description: string, maxLength: number = 100): string {
    return description.length > maxLength ? ${description.substring(0, maxLength)}... : description;
}

/
 * Generates a class name string based on provided conditions.
 * @param base - The base class name.
 * @param conditions - An object containing conditional class names.
 * @returns A combined class name string.
 */
export function cn(base: string, conditions: { [key: string]: boolean }): string {
    return Object.entries(conditions)
        .filter(([_, condition]) => condition)
        .map(([className]) => className)
        .reduce((acc, className) => ${acc} ${className}, base)
        .trim();
}

/
 * Gets the styling for GlamCS buttons.
 * @returns CSS class name for GlamCS styled buttons.
 */
export function glamCSButtonStyles(): string {
    return cn('glamcs-button', {
        'glamcs-button--primary': true, // Primary button style
        'glamcs-button--large': true // Large button size
    });
} 

/
 * Gets the styling for GlamCS product cards.
 * @returns CSS class name for GlamCS styled product cards.
 */
export function glamCSProductCardStyles(): string {
    return cn('glamcs-product-card', {
        'glamcs-product-card--3d': true, // 3D effect for luxury feel
        'glamcs-product-card--hover': true // Hover effect
    });
} 

// Exporting utility functions for GlamCS application
export default {
    formatPrice,
    formatDescription,
    cn,
    glamCSButtonStyles,
    glamCSProductCardStyles,
};