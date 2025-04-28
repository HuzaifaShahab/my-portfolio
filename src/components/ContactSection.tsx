import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    
    try {
      // Replace these with your actual EmailJS credentials from dashboard
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      
      if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration is incomplete. Please check your .env file.');
      }
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'swehuzaifa.dev@gmail.com',
        subject: formData.subject,
        message: formData.message
      };
      
      console.log('Attempting to send email with EmailJS...', { serviceId, templateId });
      
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );
      
      console.log('EmailJS SUCCESS!', response);
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error: any) {
      console.error('EmailJS ERROR:', error);
      if (error.text) {
        setSubmitError(`EmailJS Error: ${error.text}`);
      } else if (error.message) {
        setSubmitError(error.message);
      } else {
        setSubmitError('Failed to send your message. Please check the console for details.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#191919]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#1e1e1e] rounded-lg flex items-center justify-center text-green-500 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                <a href="mailto:contact@huzaifashahab.com" className="text-gray-400 hover:text-green-500 transition-colors">
                  swehuzaifa.dev@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#1e1e1e] rounded-lg flex items-center justify-center text-green-500 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-green-500 transition-colors">
                  +92 370-0305195
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#1e1e1e] rounded-lg flex items-center justify-center text-green-500 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                <p className="text-gray-400">
                  Islamabad, Pakistan
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Message sent successfully! Thank you for contacting us.</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1e1e1e] border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1e1e1e] border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1e1e1e] border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>
              
              <div>
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows={5} 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1e1e1e] border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:border-green-500 resize-none"
                ></textarea>
              </div>
              
              <div>
                {submitError && (
                  <p className="text-red-500 mb-4">{submitError}</p>
                )}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`px-8 py-4 ${isSubmitting ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'} text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center w-full md:w-auto`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
