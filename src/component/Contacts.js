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

  const onSubmit = (e) => {
    e.preventDefault();
    send('service_7e8iidm', 'template_u6u59ft', toSend, 'Sg_0MxCcRplg6x6qG')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message sent successfully!');
        setToSend({
          first_name: '',
          last_name: '',
          reply_to: '',
          message: '',
        });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        toast.error('Failed to send message. Please try again.');
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.id]: e.target.value });
  };

  return (
    <section id="contacts" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-8 text-red-700 drop-shadow-lg">Contacts</h2>
        <p className="text-lg mb-12 text-red-200">Reach out to us if you dare...</p>
        <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={onSubmit}>
          <div className="mb-6">
            <label htmlFor="first_name" className="block text-left text-red-100 mb-2">First Name</label>
            <input
              type="text"
              id="first_name"
              value={toSend.first_name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 placeholder-gray-500"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="last_name" className="block text-left text-red-100 mb-2">Last Name</label>
            <input
              type="text"
              id="last_name"
              value={toSend.last_name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 placeholder-gray-500"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="reply_to" className="block text-left text-red-100 mb-2">Email</label>
            <input
              type="email"
              id="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 placeholder-gray-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-left text-red-100 mb-2">Message</label>
            <textarea
              id="message"
              value={toSend.message}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-700 placeholder-gray-500"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg transition duration-200 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900 to-transparent opacity-25 animate-pulse rotate-180"></div>
    </section>
  );
}

export default Contacts;
