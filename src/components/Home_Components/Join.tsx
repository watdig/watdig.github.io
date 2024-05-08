import React from "react";

type ImageCardProps = {
  imageSrc: string;
  caption: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, caption }) => (
  <div className="w-full lg:w-1/2 p-4">
    <img
      src={imageSrc}
      alt={caption}
      className="w-full h-auto rounded-lg shadow-md mt-40"
    />
    <p className="mt-2 text-center text-sm text-gray-300">{caption}</p>
  </div>
);

const Join: React.FC = () => {
  return (
    <section id="join">
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 p-8 flex flex-col lg:flex-row items-center ">
        <div className="flex-1 text-white text-center p-8">
          <h1
            className="text-6xl font-bold mb-4"
            style={{
              color: "#A154D6",
              textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`, // Reduced glow intensity
            }}
          >
            JOIN OUR MISSION
          </h1>
          <p className="mb-6">
            If you’re interested in this type of technology and want to be a
            part of the team feel free to click the button below to apply. We’re
            looking for skilled UWaterloo students in all areas of engineering
            and business.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdglCD8TnkNnL3NcTHF32kcej5Q-ovUytJJDGZ4J0huC5tTVw/viewform?usp=sf_link"
            className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 mb-10
            "
          >
            Join us
          </a>
          <div>
            <p className="text-lg mb-2 mt-10">Check out our socials</p>
            <div className="flex justify-center space-x-4">
              <a
                href="#" //add instagram
              >
                <img src="instagram-svgrepo-com.svg" alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/watdig/">
                <img src="linkedin-svgrepo-com.svg" alt="LinkedIn" />
              </a>
              <a href="mailto:watdig.team@gmail.com">
                <img src="email-1572-svgrepo-com.svg" alt="Email" />
              </a>
            </div>
          </div>
        </div>
        <ImageCard imageSrc="IMG_3337.JPG" caption="2024 NaBC Competition" />
      </div>
    </section>
  );
};

export default Join;
