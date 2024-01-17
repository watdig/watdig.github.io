import React from 'react';

function Navbar() {
  return (
    <header className="bg-blue-500 text-white text-center p-6">
      <h1 className="text-3xl font-bold">WatDig</h1>
      <nav>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="#about-us" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#sponsor-us" className="hover:text-gray-300">Sponsor Us</a></li>
          <li><a href="#contact-join" className="hover:text-gray-300">Contact/Join</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

