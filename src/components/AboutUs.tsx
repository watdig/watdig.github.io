import React from "react";

const About: React.FC = () => {
  const sectionStyle = {
    backgroundImage: `url('AboutUs_Tunnel_Lining_Pic.png')`,
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
    height: "100vh",
  };
  
  return (
    <>
      {/* Content Section */}
      <section
        id="about"
        style={sectionStyle}
        className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800 py-4 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
            {/* Left side content */}
            <div>
              <p
                className="text-white text-left font-bold"
                style={{
                  fontSize: "35.6px",
                  color: "#ffffff",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                We might be boring, but we’re here to WIN.
              </p>
              <p className="text-lg mb-8 text-white leading-relaxed">
                WatDig is a University of Waterloo student team in the Sedra
                Student Design Centre, guided by Prof. Peter Teertstra. We are
                entering our second year in the Not-A-Boring Competition (NaBC),
                hosted by The Boring Company. With expertise in Mechatronics,
                Electrical, Mechanical, and other engineering fields, we are
                dedicated and highly qualified.˝
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdglCD8TnkNnL3NcTHF32kcej5Q-ovUytJJDGZ4J0huC5tTVw/viewform"
                className="text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-300 mb-8"
                style={{ backgroundColor: "#383479" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#312f6e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#383479")
                }
              >
                Join Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Images Section (moved outside the section) */}
      <div className="w-full flex justify-between px-0">
        <img
          src="Swissloop_pic.png"
          alt="Description of Image 1"
          className="w-1/3 object-cover"
          style={{ height: "400px" }} // Adjust height as needed
        />
        <img
          src="Team_Meeting_Pic.png"
          alt="Description of Image 2"
          className="w-1/3 object-cover"
          style={{ height: "400px" }} // Adjust height as needed
        />
        <img
          src="Working_On_H1.png"
          alt="Description of Image 3"
          className="w-1/3 object-cover"
          style={{ height: "400px" }} // Adjust height as needed
        />
      </div>
      <section
        id="about"
        style={sectionStyle2}
        className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800 py-16 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-top h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
            {/* Left side content */}
            <div className="space-y-12">
              <div>
                <h2
                  className="text-4xl lg:text-5xl text-white font-bold uppercase tracking-wide"
                  style={{
                    fontSize: "48.6px",
                    color: "#ffffff",
                    fontFamily: "'Poppins', sans-serif",
                    paddingBottom: "10px",
                  }}
                >
                  What is WatDig’s plan to win the Not-A-Boring-Competition
                  2025?
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  WatDig is a University of Waterloo student team in the Sedra
                  Student Design Centre, guided by Prof. Peter Teertstra. We are
                  entering our second year in the Not-A-Boring Competition
                  (NaBC), hosted by The Boring Company. With expertise in
                  Mechatronics, Electrical, Mechanical, and other engineering
                  fields, we are dedicated and highly qualified.
                </p>
              </div>
            </div>
            {/* Right side content */}
            <div className="space-y-12 lg:text-right mt-60">
              <div>
                <h2
                  className="text-4xl lg:text-5xl text-white font-bold uppercase tracking-wide"
                  style={{
                    fontSize: "48.6px",
                    color: "#ffffff",
                    fontFamily: "'Poppins', sans-serif",
                    paddingBottom: "10px",
                  }}
                >
                  We won the 2024 Navigation challenge, and we’re bringing it
                  back, bigger and better.
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  Last year, we competed in the NaBC 2024 Navigation Challenge,
                  developing an autonomous vehicle capable of navigating a
                  rugged off-road obstacle course without GPS or front-facing
                  visual sensors. Our team’s prototype, Hermes 1 (H1), won 1st
                  place and the Navigation Award.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
