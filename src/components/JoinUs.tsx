import React from "react";

const Join: React.FC = () => {
  return (
    <div className="py-8 px-6 pl-[10%] w-full max-w-3xl">
      <h2
        className="text-3xl text-white font-bold uppercase mb-4"
        style={{
          color: "#A154D6",
          textShadow: `0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 0px #A154D6, 0 0 10px #A154D6`,
        }}
      >
        JOIN OUR TEAM TODAY👋
      </h2>
      <p className="text-lg text-white mb-4">
        Ready to dive into the future of technology? Join us and be at the
        forefront of innovation! We’re on the lookout for dynamic UWaterloo
        students in engineering and business who are eager to make a difference.
        Click the button below to apply and start your adventure with us today!
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdglCD8TnkNnL3NcTHF32kcej5Q-ovUytJJDGZ4J0huC5tTVw/viewform"
        className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 mb-8"
      >
        Join Today
      </a>
      <p className="text-lg text-white mt-16 mb-4">
        Stay up to date with our newest recruitment cycles and events!
      </p>
      <div>
        <p className="text-lg mb-2 mt-8 text-center">Check out our socials</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/watdig/">
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
  );
};

export default Join;
