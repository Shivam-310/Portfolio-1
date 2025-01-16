import React from "react";
import image from './image.png'

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Hey I'm SHIVAM | Frontend Developer
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          I help businesses and individuals create user-friendly and scalable web applications!
        </p>

        
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
          
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <img
                src={image}
                alt="Developer"
                className="rounded-full w-48 h-48 shadow-lg border-4 border-blue-600"
              />
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-30 blur-lg"></div>
            </div>
          </div>

          
          <div className="md:w-2/3 text-left space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Hi, I'm SHIVAM! Over the years, I’ve developed a passion for creating responsive
              web applications and simplifying complex problems. My goal is to empower people to
              bring their ideas to life through technology.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you’re a business or an individual, I can help you design and develop
              scalable solutions that meet your goals. Let’s work together to make your vision
              a reality!
            </p>
            <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300">
              Subscribe Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
