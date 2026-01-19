import axios from 'axios';

// API Base Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle common errors
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized
          console.error('Unauthorized access');
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Server error');
          break;
        default:
          console.error('An error occurred');
      }
    }
    return Promise.reject(error);
  }
);

// API Endpoints (Prepared for backend integration)

/**
 * Submit contact form
 * @param {Object} formData - Form data to submit
 * @returns {Promise} - API response
 */
export const submitContactForm = async (formData) => {
  // TODO: Replace with actual API endpoint when backend is ready
  // return api.post('/contact', formData);
  
  // Temporary: Log form data and simulate success
  console.log('Contact Form Submitted:', formData);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: 'Thank you for contacting us! We will get back to you soon.',
  };
};

/**
 * Submit repair quote request
 * @param {Object} formData - Quote request data
 * @returns {Promise} - API response
 */
export const submitRepairQuote = async (formData) => {
  // TODO: Replace with actual API endpoint
  // return api.post('/quotes/repair', formData);
  
  console.log('Repair Quote Requested:', formData);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: 'Quote request received! Our team will contact you shortly.',
  };
};

/**
 * Submit project inquiry
 * @param {Object} formData - Project inquiry data
 * @returns {Promise} - API response
 */
export const submitProjectInquiry = async (formData) => {
  // TODO: Replace with actual API endpoint
  // return api.post('/inquiries/project', formData);
  
  console.log('Project Inquiry Submitted:', formData);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: 'Thank you for your interest! We will schedule a consultation soon.',
  };
};

/**
 * Subscribe to newsletter
 * @param {string} email - Email address
 * @returns {Promise} - API response
 */
export const subscribeNewsletter = async (email) => {
  // TODO: Replace with actual API endpoint
  // return api.post('/newsletter/subscribe', { email });
  
  console.log('Newsletter Subscription:', email);
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    success: true,
    message: 'Successfully subscribed to our newsletter!',
  };
};

export default api;
