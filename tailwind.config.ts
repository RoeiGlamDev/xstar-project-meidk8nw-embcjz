import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FFB74D',
          DEFAULT: '#FF9800',
          dark: '#F57C00',
        },
        white: '#FFFFFF',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});

// GlamCS Types and Interfaces
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface GlamCSBrand {
  brandName: string;
  tagline: string;
  colorScheme: {
    primary: string;
    secondary: string;
  };
}

// Business Logic
const glamCSBrand: GlamCSBrand = {
  brandName: 'GlamCS',
  tagline: 'Unleash Your Inner Glamour',
  colorScheme: {
    primary: '#FF9800', // Orange
    secondary: '#FFFFFF', // White
  },
};

export const getProducts = (): Product[] => {
  return [
    {
      id: 1,
      name: 'Luxurious Lipstick',
      description: 'A long-lasting, high-pigment lipstick that glides on smoothly.',
      price: 29.99,
      imageUrl: '/images/lipstick.jpg',
    },
    {
      id: 2,
      name: 'Radiant Foundation',
      description: 'Achieve a flawless finish with our lightweight foundation.',
      price: 39.99,
      imageUrl: '/images/foundation.jpg',
    },
    // More products can be added here
  ];
};