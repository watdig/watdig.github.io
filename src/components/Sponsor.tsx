import React from "react";

const Sponsor: React.FC = () => {
  return (
    <div>
      {/* Container for the background image */}
      <div className="relative w-full h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('Tunnel-Group-Pic.png')` }}
        ></div>
      </div>

      {/* Section below the picture */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl text-white font-bold uppercase mb-3"
            style={{
              color: "#A154D6",
              textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`,
            }}
          >
            Partner with us
          </h2>
          <p className="text-lg text-white mb-5">
            WatDig is a new leading design team at the University of Waterloo, a
            school with a history of prestige and excellence in student design
            competitions. Developing a tunnle-boring machine for NaBC 2025 would
            make us the first Canadian team to compete in the competition.
          </p>
          <p className="text-lg text-white mb-5">
            Partner with our team to gain access to some of the top-talent in
            the Engineering field looking for internship opportunities
            year-round. Supporting WatDig means building a long lasting
            relationship with the top Engineering school in Canada.
          </p>
          <p className="text-lg text-white mb-5">
            Sponsoring us offers numerous benefits, including significant
            marketing advantages and potential tax benefits. By supporting us,
            your company is able to enhance their brand visibility and
            reputation within the University of Waterloo. This sponsorship
            provides opportunities for logo placement on team material, media
            exposure, and association with innovative and cutting-edge projects,
            which can attract new customers and clients.
          </p>
          <div className="w-full flex justify-start">
            <div className="w-full max-w-2xl px-4 py-8">
              <h2
                className="text-3xl text-white font-bold uppercase mb-3"
                style={{
                  color: "#A154D6",
                  textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`,
                }}
              >
                Become a Sponsor
              </h2>
              <p className="text-lg text-white mb-5">
                Every contribution, whether monetary or in-kind, is vital to
                TBM's design and development. We thank our sponsors for
                believing in WatDig and supporting our mission. Your generosity
                fuels our passion and success. Together, we advance the future
                of tunnel boring technology.
              </p>
              <div className="flex justify-center">
                <a
                  onClick={openPdfWindow}
                  className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 mb-10"
                >
                  Become a Sponsor
                </a>
              </div>
            </div>
            <div className="w-full max-w-2xl px-4 py-8">
              <h2
                className="text-3xl text-white font-bold uppercase mb-3"
                style={{
                  color: "#A154D6",
                  textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`,
                }}
              >
                Become a Donor
              </h2>
              <p className="text-lg text-white mb-5">
                Your donations enable us to acquire essential items and
                materials for each vehicle. As a registered charity in Canada
                and the US, WatDig offers tax receipts for donations, which are
                processed through the University of Waterloo Student Design
                Centre.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://imodules.uwaterloo.ca/s/1802/21/form.aspx?sid=1802&gid=2&pgid=1266&cid=3030"
                  className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 mb-10"
                >
                  Become a Donor
                </a>
              </div>
            </div>
          </div>
          {/* Centered section */}
          <div className="w-full flex flex-col items-center mb-12">
            <h2
              className="text-4xl text-white font-bold uppercase mb-12"
              style={{
                color: "#A154D6",
                textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`,
              }}
            >
              A Big Thank You To WatDig's Generous Sponsors
            </h2>
            <div className="flex flex-col md:flex-row items-center text-left">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 bg-[#d9d5df] rounded-lg p-4">
                <img
                  src="Dynamek Logo2.png"
                  alt="Dynamek Logo"
                  className="w-64 h-64 md:w-76 md:h-76 object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-white mb-6 md:mb-0 text-center md:text-left">
                  DynaMEK Group Ltd. is a dynamic mechanical engineering firm
                  that offers over a century of combined Tunnel Boring Machine
                  (TBM) and underground infrastructure experience across various
                  aspects including: design, analysis, manufacturing,
                  validation, testing, troubleshooting and operation. DynaMEK
                  Group Ltd. is a licensed engineering firm with the regulatory
                  body, Professional Engineers Ontario. Established in 2017 ,
                  DynaMEK supports the Tunnelling and Underground industries by
                  providing professional services and custom engineered
                  solutions, including: cuttingheads for TBMs, refurbishment of
                  TBM components, custom designed replacement main bearings,
                  spare parts and support for various troubleshooting and
                  feasibility studies on new and existing tunnelling projects
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="flex-shrink-0 mb-3 md:mb-0 md:mr-5 bg-[#d9d5df] rounded-lg p-3">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-0">
                  <img
                    src="EngSoc Logo.png"
                    alt="EngSoc Logo"
                    className="w-full h-32 md:h-40 object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <img
                    src="WEEF Logo.png"
                    alt="WEEF Logo"
                    className="w-full h-32 md:h-40 object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <img
                    src="Onshape logo.png"
                    alt="Onshape Logo"
                    className="w-full h-32 md:h-40 object-contain rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="flex-1 min-w-0">
                  <img
                    src="Mg Chemicals Logo.png"
                    alt="Mg Chemicals Logo"
                    className="w-full h-28 md:h-36 object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <img
                    src="Rockwell Clearpath Logo.png"
                    alt="Rockwell Clearpath Logo"
                    className="w-full h-28 md:h-36 object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <img
                    src="QQLF logo2.png"
                    alt="QQLF Logo"
                    className="w-full h-28 md:h-36 object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsor;

function openPdfWindow() {
  window.open("Watdig Sponsorship Package (1).pdf", "_blank");
}
