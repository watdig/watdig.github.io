import React from "react";

const AboutUs: React.FC = () => {
  const sectionStyle = {
    backgroundImage: `url('aboutus_pic_2.png')`,
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

  const sectionStyle4 = {
    backgroundImage: `url('AboutUs_Tunnel_Background.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "155vh",
  };

  return (
    <>
      {/* Content Section */}
      <section
        id="about"
        style={sectionStyle}
        className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800 py-16 w-full"
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
                University of Waterloo’s first and only Tunnel Boring Machine
                design team
              </p>
            </div>

            {/* Right side content */}
            <div className="space-y-12">
              <div>
                <h2
                  className="text-4xl lg:text-5xl text-white font-bold uppercase tracking-wide"
                  style={{
                    fontSize: "23.6px",
                    color: "#ffffff",
                    fontFamily: "'Poppins', sans-serif",
                    paddingBottom: "10px",
                  }}
                >
                  Our Mission
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  Our team's mission is to develop a fully functional,
                  large-scale tunnel boring machine by March 2025 to compete in
                  the 2025 Not-a-Boring Competition.
                </p>
              </div>

              <div>
                <h2
                  className="text-4xl lg:text-5xl text-white font-bold uppercase tracking-wide"
                  style={{
                    fontSize: "23.6px",
                    color: "#ffffff",
                    fontFamily: "'Poppins', sans-serif",
                    paddingBottom: "10px",
                  }}
                >
                  Our Vision
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  Our vision is to demonstrate the capability and utility of
                  tunnel-based transportation in the modern world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Images Section (moved outside the section) */}
      <div className="w-full flex justify-between px-0">
        <img
          src="AboutUs_Pic_1.png"
          alt="Description of Image 1"
          className="w-1/3 object-cover"
          style={{ height: "400px" }} // Adjust height as needed
        />
        <img
          src="AboutUs_Pic_3.png"
          alt="Description of Image 2"
          className="w-1/3 object-cover"
          style={{ height: "400px" }} // Adjust height as needed
        />
        <img
          src="AboutUs_Pic_4.png"
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
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 h-full">
            {/* Left side content */}
            <div className="flex items-center justify-center">
              <img src="H1_Bot.JPG" alt="H1 Bot" />
            </div>

            {/* Right side content */}
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <h2
                  className="text-4xl lg:text-5xl text-white font-bold uppercase tracking-wide"
                  style={{
                    fontSize: "32.1px",
                    color: "#ffffff",
                    fontFamily: "'Poppins', sans-serif",
                    paddingBottom: "10px",
                  }}
                >
                  WatDig = 1st in 2024 Navigation Challenge
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  HERMES I (H1) was our first competition machine built for the
                  NaBC 2024 Navigation Challenge. H1 was able to autonomously
                  navigate an optimized route using PRM path-planning and
                  adaptive localization techniques without GPS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        style={sectionStyle4}
        className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800  w-full overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex  h-full flex-col space-y-[100px]">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[120px] items-center">
              {/* Left side content */}
              <div>
                <p
                  style={{
                    fontSize: "42.2px",
                    color: "#ffffff",
                    fontFamily: "'Poppins', sans-serif",
                    paddingBottom: "10px",
                  }}
                >
                  <span className="text-white text-left font-bold ">
                    Our Partner
                  </span>
                </p>
                <div>
                  <p
                    className="text-white text-left "
                    style={{
                      fontSize: "23px",
                      color: "#ffffff",
                      fontFamily: "'Poppins', sans-serif",
                      paddingBottom: "30px",
                      maxHeight: "150px",
                      width: "75%",
                    }}
                  >
                    A big thank you to the DynaMEK group for sponsoring WatDig
                    with several essential components for our tunnel boring
                    machine and providing valuable mentorship to our team!
                  </p>
                </div>
              </div>
              <div>
                <img src="Dynamek_Logo.png" alt="Partner Logo" />
              </div>
            </div>
          </div>
          <div className="space-y-[30px]">
            {" "}
            {/*this div contains the sponsors and sponsor button so the spacing can be 50px instead of parent div y-spacing which is 100px */}
            <div className="">
              <div className=" items-center col-span-2">
                <p
                  className="relative flex items-center w-full my-[10px] mb-[20px]"
                  style={{
                    fontSize: "42.2px",
                    color: "#ffffff",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <div className="flex-grow border-t border-white"></div>
                  <span className="px-[10px]  text-white font-bold">
                    Some of our generous sponsors
                  </span>
                  <div className="flex-grow border-t border-white"></div>
                </p>
              </div>
              <div className="w-full flex justify-between px-0 max-h-[300px]">
                <img
                  src="D - ONSHAPE.png"
                  alt="Description of Image 1"
                  className="flex-1 object-cover mx-2 max-w-[400px]"
                />
                <img
                  src="WEEF Logo.png"
                  alt="Description of Image 2"
                  className="flex-1 object-contain max-w-[30%] mx-2"
                />
                <img
                  src="D - LEDCOR.png"
                  alt="Description of Image 3"
                  className="flex-1 object-contain max-w-[30%] mx-2"
                />
              </div>
              <div className="w-full flex justify-evenly px-0 max-h-[250px] ">
                <img
                  src="C-AGILE.png"
                  alt="Description of Image 4"
                  className="flex-1 object-cover mx-2 max-w-[250px]"
                />
                <img
                  src="Masterbuilders logo.png"
                  alt="Description of Image 5"
                  className="flex-1 object-contain mx-2 max-w-[250px]"
                />
                <img
                  src="C - DEMTOOL.png"
                  alt="Description of Image 6"
                  className="flex-1 object-contain mx-2 max-w-[250px]"
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center">
              <a
                className="text-white font-bold py-3 px-8 rounded-full text-4xl focus:outline-none focus:ring-4 focus:ring-purple-300 mb-8 mr-5 max-w-[800px]  w-auto"
                style={{
                  backgroundColor: "#383479",
                  cursor: "pointer", // Add this line to show the pointer cursor
                  fontStretch: "semi-expanded",
                }}
                onClick={openPdfWindow}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#312f6e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#383479")
                }
              >
                Sponsorship Package
              </a>
              <p
                className="text-white font-"
                style={{
                  fontFamily: "'Poppins'",
                }}
              >
                Your brand can be part of our story. Get in touch to discuss
                sponsorship opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

function openPdfWindow() {
  window.open("Watdig Sponsorship Package (1).pdf", "_blank");
}
