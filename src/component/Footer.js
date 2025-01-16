import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Courses</h3>
          <ul className="space-y-2">
            <li>How the Stock Market Works Online?</li>
            <li>How to become an Angel Investor?</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Offering</h3>
          <ul className="space-y-2">
            <li>IPO Advisory</li>
            <li>Pre-IPO Advisory</li>
            <li>Mutual Fund Advisory</li>
            <li>Startup Investment Advisory</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
          <ul className="space-y-2">
            <li>Research Advisory</li>
            <li>Startup Consulting</li>
            <li>Business Analysis</li>
            <li>Personal Counselling</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Our Mantra</h3>
          <ul className="space-y-2">
            <li>Empathy</li>
            <li>Flexibility</li>
            <li>Quality</li>
            <li>Cost Consciousness</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Web Policy</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Disclaimer</li>
            <li>Refund Policy</li>
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
