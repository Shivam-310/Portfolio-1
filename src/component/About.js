import React from "react";
import image from './image.png'

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          I'm Shivam Chaudhary, a web developer with a strong passion for crafting seamless digital experiences. With experience in 
          modern web technologies like React, JavaScript, and Tailwind CSS, I aim to deliver high-quality, responsive designs and
          functionality. I enjoy solving challenges and learning new tools to enhance my skills.
        </p>
        <img src={image} alt="Your Photo" className="rounded-full w-40 h-40 mx-auto shadow-md" />
      </div>
    </section>
  );
};

export default About;
