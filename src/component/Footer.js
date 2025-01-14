import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 SHIVAM. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="www.linkedin.com/in/shivam-chaudhary310" className="hover:text-blue-400">
            LinkedIn
          </a>
          <a href="https://github.com/Shivam-310" className="hover:text-blue-400">
            GitHub
          </a>
          <a href="https://www.instagram.com/_chaudhary_31_/" className="hover:text-blue-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
