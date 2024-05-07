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
            <h1
              className="text-6xl leading-tight font-bold mb-1"
              style={{
                color: "#A154D6",
                textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`, // Reduced glow intensity
              }}
            >
              Welcome to
            </h1>
            <h1 className="text-9xl font-bold mb-4">WatDig</h1>
            <p className="text-xl text-gray-300 mt-6 mb-8">
              We're competing in the 2024 Not-A-Boring Company by The Boring
              Company. Click below to learn more.
            </p>
            <a
              href="#about"
              className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 mr-4"
            >
              Learn More
            </a>
            <a
              href="#sponsors"
              className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Become a Sponsor
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
