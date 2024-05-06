const Landing = () => {
  const sectionStyle = {
    backgroundImage: `url('./src/assets/header_logo.pn')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
  };

  return (
    <section
      id="home"
      style={sectionStyle}
      className="flex justify-center items-center bg-zinc-900"
    >
      <div className="container flex mx-auto ">
        <div className="flex-1 flex items-center">
          <div className="max-w-md">
            {" "}
            {/* Adjust max-width as needed */}
            <h1 className="text-6xl text-white leading-tight mb-1">
              Welcome to
            </h1>
            <h1 className="text-8xl text-bold text-white leading-tight mb-4">
              WATDIG
            </h1>
            <p className="text-xl text-gray-300 mt-6 mb-8">
              We're competing in the 2024 Not-A-Boring Company by The Boring
              Company. Click below to learn more.
            </p>
            <a
              href="#about"
              className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-1">
          {/* Add your image here */}
          <img
            src="./src/assets/boring_machine.png"
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
