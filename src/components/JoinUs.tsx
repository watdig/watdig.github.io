import React from "react";


const Join: React.FC = () => {
  const sectionStyle1 = {
    backgroundImage: `url('AboutUs_Tunnel_Background.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
  };

  const sectionStyle2 = {
    backgroundImage: `url('landing_background.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "auto", 
    minHeight: "42vh", 
  };

  return (
    <>
      <section
        id="about"
        style={sectionStyle1}
        className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800 py-4 w-full flex items-center h-screen"
      >
        <div className="py-8 px-6 w-full max-w-3xl ml-20">
          <p
            className="text-white font-bold mb-10 text-left max-w-lg"
            style={{
              fontSize: "35.6px",
              color: "#ffffff",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Join our team today! We’re looking for talented individuals to join
            all departments of our team.
          </p>
          <p className="text-lg text-white mb-8">
            Ready to dive into the future of technology? Ready to work on a
            badass project? Join us and be at the forefront of innovation! We’re
            on the lookout for dynamic UWaterloo students in engineering and
            business who are eager to make a difference. Click the button below
            to apply and start your adventure with us today!
          </p>
          <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdglCD8TnkNnL3NcTHF32kcej5Q-ovUytJJDGZ4J0huC5tTVw/viewform"
              className="text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-300 mt-8"
              style={{ backgroundColor: "#383479" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#312f6e")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#383479")
              }
            >
              Join Us
            </a>
        </div>
      </section>
      <div className="w-full flex justify-between px-0">
        <img
          src="Grp_Pic_Rocks.png"
          alt="Description of Image 1"
          className="w-1/3 object-cover"
          style={{ height: "300px" }} // Adjust height as needed
        />
        <img
          src="Grp_Boring_Pic.png"
          alt="Description of Image 2"
          className="w-1/3 object-cover"
          style={{ height: "300px" }} // Adjust height as needed
        />
        <img
          src="Grp_Shoveling_Pic.png"
          alt="Description of Image 3"
          className="w-1/3 object-cover"
          style={{ height: "300px" }} // Adjust height as needed
        />
        <img
          src="Grp_Cleaning_Pic.png"
          alt="Description of Image 3"
          className="w-1/3 object-cover"
          style={{ height: "300px" }} // Adjust height as needed
        />
      </div>
      <section
        id="about"
        style={sectionStyle2}
        className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800 py-4 w-full flex justify-center items-start h-screen"
      >
        <div className="mt-10 text-center max-w-4xl mx-auto">
          <p
            className="text-white font-bold"
            style={{
              fontSize: "35.6px",
              color: "#ffffff",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            While you’re at it, why not stay up to date with our newest
            recruitment cycles and new events!
          </p>
          <div className="flex justify-center space-x-4 mt-10">
            <a href="https://www.instagram.com/watdig/">
              <img src="instagram-svgrepo-com.svg" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/watdig/">
              <img src="linkedin-svgrepo-com.svg" alt="LinkedIn" />
            </a>
            <a href="mailto:watdig.team@gmail.com">
              <img src="email-1572-svgrepo-com.svg" alt="Email" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
