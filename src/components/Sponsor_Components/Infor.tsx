import React from "react";

const Info: React.FC = () => {
  return (
    <div className="bg-zinc-800 p-10 text-center">
      <div className="text-center text-white space-y-12">
        <div>
          <p className="text-lg leading-relaxed">
            WatDig is a University of Waterloo student design team competing in
            the Not-A-Boring Competition (NaBC) hosted by The Boring Company. In
            our preliminary year of competition, we're developing an autonomous
            robot capable of navigating a rugged, off-road obstacle course for
            the NaBC Navigation Challenge. Our team is driven, passionate and
            extremely hard-working. From humble beginnings in fall of 2023,
            we've seen staggering progress across all our teams as we prepare
            for competition week in March 2024, held in Austin, Texas.
          </p>
        </div>
        {/* Mission Section */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold uppercase tracking-wide">
            Sponsor Us Today
          </h2>
          <div className="border-b-2 border-white my-6"></div>
          <p className="text-lg leading-relaxed mb-10">
            WatDig is a University of Waterloo student design team competing in
            the Not-A-Boring Competition (NaBC) hosted by The Boring Company. In
            our preliminary year of competition, we're developing an autonomous
            robot capable of navigating a rugged, off-road obstacle course for
            the NaBC Navigation Challenge. Our team is driven, passionate and
            extremely hard-working. From humble beginnings in fall of 2023,
            we've seen staggering progress across all our teams as we prepare
            for competition week in March 2024, held in Austin, Texas.
          </p>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <a
          onClick={openPdfWindow}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Sponsorship Package
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdkptvps-J3JbFfeM7OXsQ-lRmOiDNIsEi0jtye4Wi0ilp2WQ/viewform?usp=sf_link"
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-12 rounded-full"
        >
          Pledge Form
        </a>
      </div>
      <div className="mt-20">
        <div className="border-b-2 border-white my-6"></div>
        <h2 className="text-4xl lg:text-5xl font-extrabold uppercase tracking-wide">
          Our Sponsors
        </h2>
        <p className="text-lg leading-relaxed mt-10 mb-10">
          WatDig is a University of Waterloo student design team competing in
          the Not-A-Boring Competition (NaBC) hosted by The Boring Company. In
          our preliminary year of competition, we're developing an autonomous
          robot capable of navigating a rugged, off-road obstacle course for the
          NaBC Navigation Challenge. Our team is driven, passionate and
          extremely hard-working. From humble beginnings in fall of 2023, we've
          seen staggering progress across all our teams as we prepare for
          competition week in March 2024, held in Austin, Texas.
        </p>
      </div>
    </div>
  );
};

export default Info;

// Function to open a PDF in a subwindow
function openPdfWindow() {
  window.open("./src/assets/WatDigSponsorshipPackage.pdf", "_blank");
}
