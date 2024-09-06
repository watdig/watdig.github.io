import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-20 top-0 left-0 border-b dark:border-gray-600 bg-transparent">
      <div
        className="w-full flex flex-wrap items-center justify-between mx-auto p-4"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Optional: Set background color with opacity if needed
          backgroundColor: "rgba(0, 0, 0, 0.0)", // Adjust opacity here
        }}
      >
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="transparentlogo.png" className="h-12" alt="Logo" />{" "}
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
            WatDig
          </span>
        </a>
        <div
          className="hidden w-full md:flex items-center justify-between md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:p-0">
            <li>
              <Link
                to="/"
                className="text-xl block py-2 px-5 text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-center hover:text-purple-500"
                style={{ backgroundColor: "transparent" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-xl block py-2 px-5 text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-center hover:text-purple-500"
                style={{ backgroundColor: "transparent" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/sponsor"
                className="text-xl block py-2 px-5 text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-center hover:text-purple-500"
                style={{ backgroundColor: "transparent" }}
              >
                Sponsor
              </Link>
            </li>
            <li>
              <Link
                to="/join"
                className="text-xl block py-2 px-5 text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-center hover:text-purple-500"
                style={{ backgroundColor: "transparent" }}
              >
                Join
              </Link>
            </li>
            <Link
                to="/contact"
                className="text-xl block py-2 px-5 text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-center hover:text-purple-500"
                style={{ backgroundColor: "transparent" }}
              >
                Contact
              </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
