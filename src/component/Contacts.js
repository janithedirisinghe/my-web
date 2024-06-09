import React from 'react';

function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-8">Contacts</h2>
        <p className="text-lg mb-12">Reach out to us if you dare...</p>
        <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-100"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900 to-transparent opacity-25 animate-pulse rotate-180"></div>
    </section>
  );
}

export default Contacts;
