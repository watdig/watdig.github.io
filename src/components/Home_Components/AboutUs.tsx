import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800 py-16 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center text-white space-y-12">
          <div>
            <p className="text-lg leading-relaxed">
              WatDig is a University of Waterloo student design team competing
              in the Not-A-Boring Competition (NaBC) hosted by The Boring
              Company. In our preliminary year of competition, we developed an
              autonomous robot capable of navigating a rugged, off-road obstacle
              course and placed first in the Navigation Challenge in Austin,
              Texas.
            </p>
          </div>
          {/* Mission Section */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold uppercase tracking-wide">
              Our Mission
            </h2>
            <div className="border-b-2 border-white my-6"></div>
            <p className="text-lg leading-relaxed">
              Our team's mission is to develop a fully function, large-scale
              tunnel boring machine by March 2025 to compete in the 2025
              Not-a-Boring Competion. We aim to create a winning platform
              through the application of our key strengths: Bias towards
              decisive action, a first principles approach and a strong passion
              for learning.
            </p>
          </div>

          {/* Vision Section */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold uppercase tracking-wide">
              Our Vision
            </h2>
            <div className="border-b-2 border-white my-6"></div>
            <p className="text-lg leading-relaxed">
              Our vision is to demonstrate the capability and utility of
              tunnel-based transportation in the modern world. With systemic
              problems of traffic, road-safety and poor infrastructure in the
              majority of cities in North America, we hope to innovate on
              tunnel-boring technology and revolutionize transportation as we
              know it.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full mt-16">
          <a href="/aboutus">
            <button className="bg-purple-600 text-white py-2 px-12 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
              Join Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
