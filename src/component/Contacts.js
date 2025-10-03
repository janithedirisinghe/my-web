import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contacts() {
  const [toSend, setToSend] = useState({
    first_name: '',
    last_name: '',
    reply_to: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!toSend.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    }
    if (!toSend.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
    }
    if (!toSend.reply_to.trim()) {
      newErrors.reply_to = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(toSend.reply_to)) {
      newErrors.reply_to = 'Invalid email format';
    }
    if (!toSend.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }
    
    setIsLoading(true);
    send('service_7e8iidm', 'template_u6u59ft', toSend, 'Sg_0MxCcRplg6x6qG')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message sent successfully! 🎉');
        setToSend({
          first_name: '',
          last_name: '',
          reply_to: '',
          message: '',
        });
        setErrors({});
      })
      .catch((error) => {
        console.log('FAILED...', error);
        toast.error('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setToSend({ ...toSend, [id]: value });
    // Clear error for this field when user starts typing
    if (errors[id]) {
      setErrors({ ...errors, [id]: '' });
    }
  };

  return (
    <section id="contacts" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10 px-4">
        <h2 className="text-5xl font-extrabold mb-4 text-red-700 drop-shadow-lg">Contacts</h2>
        <p className="text-xl mb-12 text-red-200">Let&apos;s connect and create something amazing together!</p>
        <form className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-700" onSubmit={onSubmit}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="first_name" className="block text-left text-red-100 mb-2 font-semibold">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first_name"
                value={toSend.first_name}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-gray-100 rounded-lg focus:outline-none focus:ring-2 ${
                  errors.first_name ? 'ring-2 ring-red-500 bg-red-900/20' : 'focus:ring-orange-500 bg-gray-700'
                } placeholder-gray-500 transition-all duration-300`}
                placeholder="John"
              />
              {errors.first_name && (
                <p className="text-red-400 text-sm mt-1">{errors.first_name}</p>
              )}
            </div>
            <div>
              <label htmlFor="last_name" className="block text-left text-red-100 mb-2 font-semibold">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="last_name"
                value={toSend.last_name}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-gray-100 rounded-lg focus:outline-none focus:ring-2 ${
                  errors.last_name ? 'ring-2 ring-red-500 bg-red-900/20' : 'focus:ring-orange-500 bg-gray-700'
                } placeholder-gray-500 transition-all duration-300`}
                placeholder="Doe"
              />
              {errors.last_name && (
                <p className="text-red-400 text-sm mt-1">{errors.last_name}</p>
              )}
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="reply_to" className="block text-left text-red-100 mb-2 font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-gray-100 rounded-lg focus:outline-none focus:ring-2 ${
                errors.reply_to ? 'ring-2 ring-red-500 bg-red-900/20' : 'focus:ring-orange-500 bg-gray-700'
              } placeholder-gray-500 transition-all duration-300`}
              placeholder="john.doe@example.com"
            />
            {errors.reply_to && (
              <p className="text-red-400 text-sm mt-1">{errors.reply_to}</p>
            )}
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-left text-red-100 mb-2 font-semibold">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              value={toSend.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-gray-100 rounded-lg focus:outline-none focus:ring-2 ${
                errors.message ? 'ring-2 ring-red-500 bg-red-900/20' : 'focus:ring-orange-500 bg-gray-700'
              } placeholder-gray-500 transition-all duration-300 resize-none`}
              rows="5"
              placeholder="Your message here..."
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900 to-transparent opacity-25 animate-pulse rotate-180"></div>
    </section>
  );
}

export default Contacts;
