import React from "react";

const Cart = () => {
  const sampleProjects = [
    {
      name: "E-Commerce Website",
      description: "A fully responsive e-commerce platform.",
      price: "$500",
    },
    {
      name: "Portfolio Website",
      description: "A modern and interactive personal portfolio.",
      price: "$300",
    },
    {
      name: "Blog Platform",
      description: "A scalable blog platform with CMS features.",
      price: "$400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-center mb-6">Cart</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProjects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-green-600 font-bold">{project.price}</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
