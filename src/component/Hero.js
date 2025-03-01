import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="bg-blue-600 text-white py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Shivam Chaudhary</h1>
        <p className="text-xl mb-6">A passionate Web Developer specializing in building amazing web products experiences.</p>
        <div className="space-x-4">
          <a href="#projects" className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-200">
            View My Work
          </a>
          <a href="#contact" className="bg-blue-800 py-2 px-4 rounded-md hover:bg-blue-700">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
