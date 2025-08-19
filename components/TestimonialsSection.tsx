import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
    id: number;
    name: string;
    photo: string;
    text: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sophia Johnson',
        photo: '/images/sophia.jpg',
        text: 'GlamCS has completely transformed my makeup routine! Their products are luxurious and long-lasting.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Emily Davis',
        photo: '/images/emily.jpg',
        text: 'I absolutely love GlamCS! The quality of their cosmetics is unmatched, and the colors are vibrant.',
        rating: 4,
    },
    {
        id: 3,
        name: 'Olivia Brown',
        photo: '/images/olivia.jpg',
        text: 'The GlamCS highlighter is my new favorite! It gives a stunning glow that lasts all day.',
        rating: 5,
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-12 bg-white">
            <h2 className="text-center text-3xl font-bold text-orange-600 mb-8">What Our Customers Say</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <motion.div
                        key={testimonial.id}
                        className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={testimonial.photo} alt={testimonial.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-orange-600">{testimonial.name}</h3>
                        <p className="text-gray-700 my-2">{testimonial.text}</p>
                        <div className="flex justify-center">
                            {[...Array(testimonial.rating)].map((_, index) => (
                                <svg key={index} className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.121-6.535L0 6.545l6.818-.992L10 0l3.182 5.553L20 6.545l-5.243 4.005 1.121 6.535z" />
                                </svg>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;