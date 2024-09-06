import React from "react";

const Sponsor: React.FC = () => {
  const sectionStyle = {
    backgroundImage: `url('WatDig_Tunnel_GP.png')`,
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
        className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800 py-4 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col justify-end h-screen">
          <div className="grid grid-cols-1 gap-4 mt-10">
            {/* Bottom-aligned content */}
            <div className="flex justify-center">
              <p
                className="text-white font-bold mb-10 text-center max-w-lg"
                style={{
                  fontSize: "35.6px",
                  color: "#ffffff",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                In order to succeed at what we do, we need your help.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        style={sectionStyle2}
        className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800 py-16 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center h-screen">
          <div className="lg:grid-cols-2">
            {/* Left side content */}
            <div className="mb-10">
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
                  Partner with us to gain exclusive benefits from WatDig, UW’s
                  very first TBM design team.
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  WatDig, University of Waterloo’s newest design team aims to be
                  the first Canadian team to compete in NaBC 2025. Partner with
                  us to connect with top engineering talent and build a lasting
                  relationship with Canada’s leading engineering school.
                  Sponsorship offers significant marketing and tax benefits,
                  enhancing your brand visibility through logo placement, media
                  exposure, and association with innovative projects.
                </p>
              </div>
            </div>
            <a
              className="text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-300 mb-8 mr-5"
              style={{
                backgroundColor: "#383479",
                cursor: "pointer", // Add this line to show the pointer cursor
              }}
              onClick={openPdfWindow}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#312f6e")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#383479")
              }
            >
              Become a Sponsor
            </a>

            <a
              href="https://imodules.uwaterloo.ca/s/1802/21/form.aspx?sid=1802&gid=2&pgid=1266&cid=3030"
              className="text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-300 mb-8"
              style={{ backgroundColor: "#383479" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#312f6e")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#383479")
              }
            >
              Become a Donor
            </a>
          </div>
        </div>
      </section>
      <section
        id="about"
        style={sectionStyle2}
        className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800 py-16 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center h-screen">
          <div className="sgrid-cols-1 lg:grid-cols-2 gap-4 mt-10">
            {/* Left side content */}
            <div>
              <p
                className="text-white text-left font-bold"
                style={{
                  fontSize: "44px",
                  color: "#ffffff",
                  fontFamily: "'Poppins', sans-serif",
                  paddingBottom: "10px",
                }}
              >
                A big thank you to WatDig’s generous sponsors!
              </p>
              <p
                className="text-white text-left font-bold"
                style={{
                  fontSize: "30px",
                  color: "#ffffff",
                  fontFamily: "'Poppins', sans-serif",
                  paddingBottom: "30px",
                }}
              >
                Our Partner
              </p>
              <div className="w-full flex items-start px-0">
                <img
                  src="Dynamek Group Pic.webp"
                  alt="Description of Image 1"
                  className="object-contain max-w-[20%] mr-4"
                />
                <div className="flex flex-col">
                  <p className="text-lg text-white leading-relaxed text-justify">
                    <b>
                      A special thanks to DynaMEK group Ltd., WatDig’s very own
                      partner!
                    </b>
                    <br />
                    DynaMEK Group Ltd. is a dynamic mechanical engineering firm
                    that offers over a century of combined Tunnel Boring Machine
                    (TBM) and underground infrastructure experience across
                    various aspects including: design, analysis, manufacturing,
                    validation, testing, troubleshooting, and operation. DynaMEK
                    Group Ltd. is a licensed engineering firm with the
                    regulatory body, Professional Engineers Ontario. Established
                    in 2017, DynaMEK supports the Tunnelling and Underground
                    industries by providing professional services and custom
                    engineered solutions, including: cuttingheads for TBMs,
                    refurbishment of TBM components, custom designed replacement
                    main bearings, spare parts, and support for various
                    troubleshooting and feasibility studies on new and existing
                    tunnelling projects.
                  </p>

                  <div className="flex space-x-4 mt-4">
                    <a href="https://www.linkedin.com/company/dynamek-group-ltd./people/">
                      <img
                        src="linkedin-svgrepo-com.svg"
                        alt="LinkedIn"
                        className="w-10 h-auto"
                      />
                    </a>
                    <a href="http://dynamekgroup.com/">
                      <img
                        src="Dynamek_Logo.png"
                        alt="Dynamek Logo"
                        className="w-36 h-auto"
                      />
                    </a>
                  </div>
                </div>
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
          <div className="sgrid-cols-1 lg:grid-cols-2 gap-4 mt-10">
            {/* Left side content */}
            <div>
              <p
                className="text-white text-left font-bold"
                style={{
                  fontSize: "30px",
                  color: "#ffffff",
                  fontFamily: "'Poppins', sans-serif",
                  paddingBottom: "10px",
                }}
              >
                Diamond
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
              </div>
            </div>
            <div>
              <p
                className="text-white text-left font-bold"
                style={{
                  fontSize: "30px",
                  color: "#ffffff",
                  fontFamily: "'Poppins', sans-serif",
                  paddingBottom: "10px",
                }}
              >
                Gold and Silver
              </p>
              <div className="w-full flex justify-between px-0">
                <img
                  src="Masterbuilders logo.png"
                  alt="Description of Image 1"
                  className="flex-1 object-contain max-w-[20%] mx-2"
                />
                <img
                  src="Mg Chemicals Logo.png"
                  alt="Description of Image 2"
                  className="flex-1 object-contain max-w-[20%] mx-2"
                />
                <img
                  src="Mg Chemicals Logo.png"
                  alt="Description of Image 2"
                  className="flex-1 object-contain max-w-[20%] mx-2"
                />
                <img
                  src="EngSoc Logo.png"
                  alt="Description of Image 2"
                  className="flex-1 object-contain max-w-[10%] mx-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsor;

function openPdfWindow() {
  window.open("Watdig Sponsorship Package (1).pdf", "_blank");
}
