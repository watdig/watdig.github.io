import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and copyright */}
        <div className="flex flex-col items-start justify-between">
          <div>{/*<p className="text-sm">&copy; 2024 by WatDig</p>*/}</div>
          <div className="mt-4 flex space-x-4">
            {/* Replace with actual paths to your social media profiles */}
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              {/* Insert SVG or <img> tag for the Facebook icon here */}
            </a>
            <a
              href="https://www.linkedin.com/company/watdig/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-darkyellow transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/watdig"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-darkyellow transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <a
            href="mailto:watdig.team@gmail.com"
            className="text-white hover:text-darkyellow transition-colors duration-300"
          >
            watdig.team@gmail.com
          </a>
          <p className="text-sm">Located at 200 University,</p>
          <p className="text-sm">University of Waterloo, ON</p>
        </div>

        {/* Sponsorship Section */}
        <div>
          <h2 className="text-lg font-bold mb-2">Sponsorship</h2>
          <a
            // href="/Sponsor_page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-darkyellow transition-colors duration-300"
          >
            Opportunities
          </a>
          <p>
            <a
              // href="/Sponsor_page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-darkyellow transition-colors duration-300"
            >
              Current Sponsors
            </a>
          </p>
        </div>

        {/* Join the Team Section */}
        <div>
          <h2 className="text-lg font-bold mb-2">Join the Team</h2>
          <p className="text-sm mb-1">Roles</p>
          <p className="text-sm">Application</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
