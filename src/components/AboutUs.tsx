import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-zinc-800 p-10 text-center min-h-screen overflow-auto relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 blur-sm -z-10"></div>

      <div className="text-center text-white space-y-20 max-w-6xl mx-auto relative z-10">
        <div className="pt-16">
          <h2
            className="text-6xl text-white font-bold uppercase"
            style={{
              color: "#A154D6",
              textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 15px #A154D6`, // Adjust glow intensity
            }}
          >
            Our Story
          </h2>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-8 mb-8 w-full">
            <div className="flex-shrink-0 flex gap-6">
              <img
                src="WatDig-Group-Picture.png"
                alt="WatDig Group Pic"
                className="w-64 h-64 md:w-76 md:h-76 object-cover"
              />
            </div>
            <div className="text-left">
              <h3
                className="text-3xl text-white font-bold uppercase mb-6"
                style={{
                  color: "#A154D6",
                  textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`,
                }}
              >
                Who We Are
              </h3>
              <p className="text-gray-100 mb-6">
                WatDig is a University of Waterloo student team in the Sedra
                Student Design Centre, guided by Prof. Peter Teertstra. We are
                entering our second year in the Not-A-Boring Competition (NaBC),
                hosted by The Boring Company. With expertise in Mechatronics,
                Electrical, Mechanical, and other engineering fields, we are
                dedicated and highly qualified.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-8 w-full">
            <div className="flex-shrink-0 flex gap-6">
              <img
                src="Boring-Machine.png"
                alt="Boring Machine Pic"
                className="w-64 h-64 md:w-76 md:h-76 object-cover"
              />
            </div>
            <div className="text-left">
              <h3
                className="text-3xl text-white font-bold uppercase mb-6"
                style={{
                  color: "#A154D6",
                  textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`,
                }}
              >
                What We Do
              </h3>
              <p className="text-gray-100 mb-6">
                This year, we are developing a fully functional tunnel-boring
                machine (TBM) for NaBC 2025, which challenges teams to design a
                TBM that can excavate, line a tunnel, and steer with high
                precision. The event includes multiple design briefings and
                culminates in a week-long competition at The Boring Company’s
                facility in Bastrop, Texas.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 mb-8 w-full">
            <div className="flex-shrink-0 flex gap-6">
              <img
                src="NABC-Bot.png"
                alt="NABC Bot Pic"
                className="w-64 h-64 md:w-76 md:h-76 object-cover"
              />
            </div>
            <div className="text-left">
              <h3
                className="text-3xl text-white font-bold uppercase mb-6"
                style={{
                  color: "#A154D6",
                  textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`,
                }}
              >
                Our Success
              </h3>
              <p className="text-gray-100 mb-6">
                Last year, we competed in the NaBC 2024 Navigation Challenge,
                developing an autonomous vehicle capable of navigating a rugged
                off-road obstacle course without GPS or front-facing visual
                sensors. Our team’s prototype, Hermes 1 (H1), won 1st place and
                the Navigation Award.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
