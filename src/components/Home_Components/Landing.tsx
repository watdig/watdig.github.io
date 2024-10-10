const Landing = () => {
  const sectionStyle = {
    backgroundImage: `url('landing_background.png')`,
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
              className="text-4xl leading-tight font-bold mb-1"
              style={{
                color: "#ffffff", // Set text color to white
                fontFamily: "'Poppins', sans-serif", // Use Poppins font
              }}
            >
              Hello! We are
            </h1>
            <img
              src="1. WATDIG.png"
              alt="WatDig Logo"
              className="w-[800px] h-[150px]"
            />
            <p
              className="text-xl text-gray-300 mt-6 mb-8 w-[700px]"
              style={{
                color: "#ffffff", // Set text color to white
                fontFamily: "'Poppins', sans-serif", // Use Poppins font
              }}
            >
              We’re a UW design team competing in the 2025 Not-A-Boring
              Competition hosted by The Boring Company. Learn more below!
            </p>
            <a
              href="/about"
              className="text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-300 mb-8 mr-5"
              style={{ backgroundColor: "#383479" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#312f6e")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#383479")
              }
            >
              About Us
            </a>
            <a
              href="/sponsor"
              className="text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-300 mb-8 mr-[5rem]"
              style={{ backgroundColor: "#383479" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#312f6e")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#383479")
              }
            >
              Become a Sponsor
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="boring_machine.png"
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
