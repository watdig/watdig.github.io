import React from "react";

const Landing: React.FC = () => {
  const sectionStyle = {
    backgroundImage: `url('./src/assets/sponsor_bg.jpeg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh", // Make the section fill the full viewport height
  };
  return (
    <section id="home" style={sectionStyle} className="text-white py-16">
      <div className="mt-64 container mx-auto text-center">
        <h1 className="text-8xl font-semibold mt-4 mb-4">Sponsors</h1>
        <p className="text-4xl mb-8">
          Invest in the next generation of engineers.
        </p>
        <a
          href="#about"
          className="bg-yellow-400 border-2 border-white text-black py-2 px-12 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Landing;
