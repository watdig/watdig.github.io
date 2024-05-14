import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b dark:border-gray-600">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4 bg-zinc-900">
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
          <ul className="flex flex-col p-4 mt-4 md:space-x-8 md:flex-row md:mt-0 md:bg-zinc-900 md:border-0 md:p-0">
            <li>
              <a
                href="/"
                className="text-xl block py-2 px-5 text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-center"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-xl block py-2 px-5 text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-center"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#sponsors"
                className="text-xl block py-2 px-5 text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-center"
              >
                Sponsor
              </a>
            </li>
            <li>
              <a
                href="#join"
                className="text-xl block py-2 px-5 text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-center"
              >
                Join
              </a>
            </li>
            <li>
              <a
                href="#join"
                className="text-xl block py-2 px-5 text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-center"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
