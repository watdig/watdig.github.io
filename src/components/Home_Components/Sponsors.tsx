import React from "react";

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="bg-zinc-900 text-black py-12 w-full">
      <div className="max-w-screen-2xl mx-auto px-4 text-center">
        <h2
          className="text-6xl text-white font-bold uppercase mb-6 mt-20"
          style={{
            color: "#A154D6",
            textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`, // Reduced glow intensity
          }}
        >
          Our Sponsors
        </h2>
        <p className="text-gray-100 mb-6">
          We are proudly supported by these amazing brands:
        </p>

        {/* Sponsor logos */}
        <div className="flex flex-col items-center gap-8 mb-8">
          <div className="flex items-center gap-8 mb-8 max-w-2xl">
            <div className="flex-shrink-0 flex gap-6">
              <img
                src="Dynamek Group Pic.webp"
                alt="Dynamek Group Pic"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
              />
              <img
                src="WEEF logo.webp"
                alt="WEEF logo"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-100 mb-6">
              We extend our sincere gratitude to the DynaMek Group and WEEF for
              their generous sponsorship to WatDig. DynaMek's provision of
              critical parts for our tunnel boring machine and comprehensive
              review of all our designs have been invaluable.
            </p>
          </div>
          <div className="flex items-center gap-8 mb-8 max-w-2xl">
            <div className="flex-shrink-0 flex gap-6">
              <img
                src="Onshape-Logo.png"
                alt="Onshape Logo"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
              />
            </div>
            <p className="text-gray-100 mb-6">
              And a heartfelt thank you to our diamond sponsors for their
              generous donation of CAD services to our WatDig team.
            </p>
          </div>
        </div>

        {/* Sponsor Us button */}
        <a
          onClick={openPdfWindow}
          className="bg-purple-600 text-white font-bold py-3 px-12 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 mr-4"
        >
          Sponsorship Package
        </a>

        {/* Additional information or call-to-action */}
        <p className="mt-6 text-gray-400">
          Your brand can be part of our story. Get in touch to discuss
          sponsorship opportunities.
        </p>
      </div>
    </section>

    // Function to open a PDF in a subwindow
  );
};

export default Sponsors;

function openPdfWindow() {
  window.open("Watdig Sponsorship Package (1).pdf", "_blank");
}
