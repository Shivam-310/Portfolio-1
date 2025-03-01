import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-blue-400">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
