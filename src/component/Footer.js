import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Courses</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">How the Stock Market Works Online?</a></li>
            <li><a href="#" className="hover:text-gray-400">How to become an Angel Investor?</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Offering</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">IPO Advisory</a></li>
            <li><a href="#" className="hover:text-gray-400">Pre-IPO Advisory</a></li>
            <li><a href="#" className="hover:text-gray-400">Mutual Fund Advisory</a></li>
            <li><a href="#" className="hover:text-gray-400">Startup Investment Advisory</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Research Advisory</a></li>
            <li><a href="#" className="hover:text-gray-400">Startup Consulting</a></li>
            <li><a href="#" className="hover:text-gray-400">Business Analysis</a></li>
            <li><a href="#" className="hover:text-gray-400">Personal Counselling</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Our Mantra</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Empathy</a></li>
            <li><a href="#" className="hover:text-gray-400">Flexibility</a></li>
            <li><a href="#" className="hover:text-gray-400">Quality</a></li>
            <li><a href="#" className="hover:text-gray-400">Cost Consciousness</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Web Policy</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms of Use</a></li>
            <li><a href="#" className="hover:text-gray-400">Disclaimer</a></li>
            <li><a href="#" className="hover:text-gray-400">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
      </div>
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
