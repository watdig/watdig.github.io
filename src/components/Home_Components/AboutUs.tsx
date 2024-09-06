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

  const sectionStyle3 = {
    backgroundImage: `url('AboutUs_Tunnel_Background.png')`,
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
        style={sectionStyle3}
        className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800 py-16 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
            {/* Left side content */}
            <div>
              <p
                className="text-white text-left font-bold"
                style={{
                  fontSize: "42.2px",
                  color: "#ffffff",
                  fontFamily: "'Poppins', sans-serif",
                  paddingBottom: "10px",
                }}
              >
                WatDig is supported by these amazing companies
              </p>
              <p
                className="text-white text-left font-bold"
                style={{
                  fontSize: "26.4px",
                  color: "#ffffff",
                  fontFamily: "'Poppins', sans-serif",
                  paddingBottom: "30px",
                }}
              >
                Our Partner
              </p>
              <img src="Dynamek_Logo.png" alt="Partner Logo" />
              <p
                className="text-white text-left font-bold"
                style={{
                  paddingTop: "30px",
                  fontSize: "26.4px",
                  color: "#ffffff",
                  fontFamily: "'Poppins', sans-serif",
                  paddingBottom: "10px",
                }}
              >
                Our Sponsors
              </p>
              <div className="w-full flex justify-between px-0">
                <img
                  src="Onshape logo.png"
                  alt="Description of Image 1"
                  className="flex-1 object-contain max-w-[65%] mx-2"
                />
                <img
                  src="WEEF Logo.png"
                  alt="Description of Image 2"
                  className="flex-1 object-contain max-w-[65%] mx-2"
                />
                <img
                  src="Masterbuilders logo.png"
                  alt="Description of Image 3"
                  className="flex-1 object-contain max-w-[65%] mx-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
