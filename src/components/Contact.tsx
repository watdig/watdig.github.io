const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8">
      <div className="flex justify-center items-center flex-col">
        <p className="text-2xl font-bold mb-2">Contact Us</p>
        <div className="flex space-x-4 mb-4">
          {/* Email */}
          <a
            href="mailto:email@example.com"
            className="hover:text-darkyellow transition-colors duration-300"
          >
            email@example.com
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-darkyellow transition-colors duration-300"
          >
            LinkedIn
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-darkyellow transition-colors duration-300"
          >
            GitHub
          </a>
          {/* Join Us */}
          <a
            href="#join"
            className="hover:text-darkyellow transition-colors duration-300"
          >
            Join Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
