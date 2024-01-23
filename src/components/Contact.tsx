const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8">
      <div className="flex justify-center items-center flex-col">
        <p className="text-2xl font-bold mb-2">Contact Us</p>
        <div className="flex text-white space-x-4 mb-4">
          {/* Email */}
          <a
            href="mailto:watdig.team@gmail.com"
            className="text-white hover:text-darkyellow transition-colors duration-300"
          >
            watdig.team@gmail.com
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/watdig/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-darkyellow transition-colors duration-300"
          >
            LinkedIn
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/watdig"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-darkyellow transition-colors duration-300"
          >
            GitHub
          </a>
          {/* Join Us */}
          <a
            href="#join"
            className="text-white hover:text-darkyellow transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
