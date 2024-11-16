import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const ContactForm = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const phoneRegex = /^[\d\s()-]+$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Please provide more details about your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsOpen(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          businessName: '',
          description: ''
        });
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900/90 rounded-xl max-w-md w-full relative transform transition-all glass-card p-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center">
              <Check className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Thank You!</h3>
            <p className="text-white/80">
              Your message has been received. I'll get back to you within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900/90 rounded-xl max-w-md w-full relative transform transition-all glass-card">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-white/70 hover:text-white"
          disabled={isSubmitting}
        >
          <X className="w-5 h-5" />
        </button>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <h3 className="text-xl font-bold mb-6 text-white">Let's Build Something Amazing</h3>

          <div className="space-y-4">
            {[
              { label: 'Name', type: 'text', key: 'name' },
              { label: 'Phone', type: 'tel', key: 'phone' },
              { label: 'Email', type: 'email', key: 'email' },
              { label: 'Business Name', type: 'text', key: 'businessName' }
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium mb-1 text-white/90">
                  {field.label}
                  <span className="text-purple-400 ml-1">*</span>
                </label>
                <input
                  type={field.type}
                  name={field.key}
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 rounded-lg bg-gray-800/50 border focus:ring-1 outline-none transition-all text-white
                    ${errors[field.key]
                      ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                      : 'border-white/10 focus:border-purple-500/50 focus:ring-purple-500/50'
                    }`}
                  value={formData[field.key]}
                  onChange={handleChange}
                />
                {errors[field.key] && (
                  <p className="text-red-400 text-xs mt-1">{errors[field.key]}</p>
                )}
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium mb-1 text-white/90">
                Project Description
                <span className="text-purple-400 ml-1">*</span>
              </label>
              <textarea
                name="description"
                required
                disabled={isSubmitting}
                rows={4}
                className={`w-full px-4 py-2 rounded-lg bg-gray-800/50 border focus:ring-1 outline-none transition-all text-white
                  ${errors.description
                    ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                    : 'border-white/10 focus:border-purple-500/50 focus:ring-purple-500/50'
                  }`}
                value={formData.description}
                onChange={handleChange}
              />
              {errors.description && (
                <p className="text-red-400 text-xs mt-1">{errors.description}</p>
              )}
            </div>
          </div>

          {errors.submit && (
            <p className="text-red-400 text-sm text-center">{errors.submit}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-purple-600/80 hover:bg-purple-700/80 transition-colors rounded-lg text-white font-medium mt-6 glass-button disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;