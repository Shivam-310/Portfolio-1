import React from "react";

const Work = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and high-performance websites using modern technologies like React and Tailwind CSS.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description: "Creating user-friendly interfaces and ensuring a seamless user experience.",
      icon: "🎨",
    },
    {
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, scalability, and efficiency.",
      icon: "⚡",
    },
    {
      title: "Backend Integration",
      description: "Integrating robust backend solutions using Node.js, Express, and MongoDB.",
      icon: "🔗",
    },
  ];

  return (
    <section id="what-i-do" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What I Do</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          As a developer, I specialize in creating modern, efficient, and visually appealing web applications. Here’s how I can help you:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
