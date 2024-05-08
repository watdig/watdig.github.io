import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800 py-16 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
          <div className="flex flex-col justify-center items-center space-y-4 mr-10">
            <img src="IMG_1683.JPG" alt="Our Robot" className="w-full h-auto" />
            <p className="text-lg text-white text-center">
              HERMES I (H1) was our first competition machine built for the NaBC
              2024 Navigation Challenge. H1 was able to autonomously navigate an
              optimized route using PRM path-planning and adaptive localization
              techniques without GPS{" "}
            </p>
          </div>
          <div className="space-y-12">
            {/* Mission Section */}
            <div>
              <h2
                className="text-4xl lg:text-5xl text-white font-extrabold uppercase tracking-wide"
                style={{
                  color: "#A154D6",
                  textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`, // Reduced glow intensity
                }}
              >
                Our Mission
              </h2>
              <div className="border-b-2 border-white my-6"></div>
              <p className="text-lg text-white leading-relaxed">
                Our team's mission is to develop a fully functional, large-scale
                tunnel boring machine by March 2025 to compete in the 2025
                Not-a-Boring Competition. We aim to create a winning platform
                through the application of our key strengths: Bias towards
                decisive action, a first principles approach, and a strong
                passion for learning.
              </p>
            </div>

            {/* Vision Section */}
            <div>
              <h2
                className="text-4xl lg:text-5xl text-white font-extrabold uppercase tracking-wide"
                style={{
                  color: "#A154D6",
                  textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`, // Reduced glow intensity
                }}
              >
                Our Vision
              </h2>
              <div className="border-b-2 border-white my-6"></div>
              <p className="text-lg text-white leading-relaxed">
                Our vision is to demonstrate the capability and utility of
                tunnel-based transportation in the modern world. With systemic
                problems of traffic, road safety, and poor infrastructure in the
                majority of cities in North America, we hope to innovate on
                tunnel-boring technology and revolutionize transportation as we
                know it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
