import React from "react";

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="bg-zinc-900 text-black py-12 w-full">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2
          className="text-6xl text-white font-bold uppercase mb-6 mt-20"
          style={{
            color: "#A154D6",
            textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`, // Reduced glow intensity
          }}
        >
          Our Sponsors
        </h2>
        <p className="text-gray-300 mb-6">
          We are proudly supported by these amazing brands:
        </p>

        {/* Sponsor logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          <img
            src="Clearpath.jpeg"
            alt="Clearpath Robotics"
            className="h-24 md:h-32"
          />
          <img
            src="qqlf.jpeg"
            alt="QQLF Consultants"
            className="h-24 md:h-32"
          />
        </div>

        {/* Sponsor Us button */}
        <a
          // onClick={openPdfWindow}
          className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 mr-4"
        >
          Sponsorship Package
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdkptvps-J3JbFfeM7OXsQ-lRmOiDNIsEi0jtye4Wi0ilp2WQ/viewform?usp=sf_link"
          className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Pledge Form
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

// function openPdfWindow() {
//   window.open("WatDigSponsorshipPackage.pdf", "_blank");
// }
