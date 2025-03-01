import React from "react";
import ReactDOM from "react-dom";
import Cart from "./Cart";

const Work = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and high-performance websites.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description: "Creating user-friendly interfaces.",
      icon: "🎨",
    },
    {
      title: "Performance Optimization",
      description: "Optimizing web applications for speed and scalability.",
      icon: "⚡",
    },
    {
      title: "Backend Integration",
      description: "Integrating robust backend solutions.",
      icon: "🔗",
    },
  ];

  const openCartWindow = () => {
    const newWindow = window.open(
      "",
      "_blank",
      "width=800,height=600,left=200,top=200"
    );

    if (newWindow) {
      newWindow.document.title = "Cart";
      const root = document.createElement("div");
      newWindow.document.body.appendChild(root);

      // Render the Cart component into the new window
      ReactDOM.createRoot(root).render(<Cart />);
    } else {
      alert("Please allow popups for this website.");
    }
  };

  return (
    <section id="what-i-do" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What I Do</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                onClick={openCartWindow}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Services
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
