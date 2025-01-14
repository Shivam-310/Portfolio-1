import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-6">I'm always open to discussing new projects or opportunities!</p>
        <form className="max-w-lg mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
