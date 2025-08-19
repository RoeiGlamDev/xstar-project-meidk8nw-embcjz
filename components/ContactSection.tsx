import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const businessInfo = {
    address: '123 Glam Avenue, Beauty City, CA 90210',
    phone: '(123) 456-7890',
    email: 'contact@glamcs.com',
    hours: 'Mon-Fri: 9 AM - 5 PM',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.reason) newErrors.reason = 'Please select a reason.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      // Here you would typically handle form submission to your backend
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-orange-500 mb-4">Contact GlamCS</h2>
      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 font-semibold"
        >
          Thank you for reaching out! We will get back to you soon.
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-orange-500">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={mt-1 block w-full border border-gray-300 rounded-md p-2 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }}
              required
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-orange-500">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={mt-1 block w-full border border-gray-300 rounded-md p-2 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }}
              required
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-orange-500">Reason for Contact</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className={mt-1 block w-full border border-gray-300 rounded-md p-2 ${
                errors.reason ? 'border-red-500' : 'border-gray-300'
              }}
              required
            >
              <option value="">Select...</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Order Status">Order Status</option>
              <option value="Feedback">Feedback</option>
              <option value="Collaboration">Collaboration</option>
            </select>
            {errors.reason && <p className="text-red-500 text-xs">{errors.reason}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-orange-500">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={mt-1 block w-full border border-gray-300 rounded-md p-2 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }}
              rows={4}
              required
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold rounded-md p-2 hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      )}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-orange-500">GlamCS Business Information</h3>
        <p className="text-gray-700">Address: {businessInfo.address}</p>
        <p className="text-gray-700">Phone: {businessInfo.phone}</p>
        <p className="text-gray-700">Email: <a href={mailto:${businessInfo.email}} className="text-orange-500">{businessInfo.email}</a></p>
        <p className="text-gray-700">Business Hours: {businessInfo.hours}</p>
      </div>
    </section>
  );
};

export default ContactSection;