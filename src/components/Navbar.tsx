const Navbar = () => {
  return (
    <nav className="bg-grey-200 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="src/assets/logo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-300">
            WatDig
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-darkyellow hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-darkyellow dark:hover:bg-yellow-600 dark:focus:ring-yellow-800"
          >
            Get started
          </button>
        </div>
        <div
          className="hidden w-full md:flex items-center justify-between md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-darkyellow md:p-0 dark:hover:text-darkyellow dark:text-white dark:hover:bg-gray-700"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#sponsors"
                className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-darkyellow md:p-0 dark:hover:text-darkyellow dark:text-white dark:hover:bg-gray-700"
              >
                Sponsors
              </a>
            </li>
            <li>
              <a
                href="#join"
                className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-darkyellow md:p-0 dark:hover:text-darkyellow dark:text-white dark:hover:bg-gray-700"
              >
                Join Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-darkyellow md:p-0 dark:hover:text-darkyellow dark:text-white dark:hover:bg-gray-700"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
