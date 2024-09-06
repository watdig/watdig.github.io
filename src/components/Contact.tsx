import React from "react";

const Contact: React.FC = () => {
  const sectionStyle1 = {
    backgroundImage: `url('aboutus_pic_2.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
  };

  return (
    <>
      <section
        id="about"
        style={sectionStyle1}
        className="text-gray-800 bg-gradient-to-b from-zinc-900 to-zinc-800 py-4 w-full flex items-center h-screen"
      >
        <div className="py-8 px-6 w-full max-w-3xl ml-20">
          <p
            className="text-white font-bold mb-5 text-left max-w-lg"
            style={{
              fontSize: "36px",
              color: "#ffffff",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            HAVE MORE QUESTIONS? SHOOT US A MESSAGE!
          </p>
          <div className="space-y-6 mt-5">
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/watdig/"
                className="flex items-center"
              >
                <img
                  src="instagram-svgrepo-com.svg"
                  alt="Instagram"
                  className="w-14 h-14"
                />
                <span className="text-white ml-6 text-xl">@watdig</span>
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/company/watdig/"
                className="flex items-center"
              >
                <img
                  src="linkedin-svgrepo-com.svg"
                  alt="LinkedIn"
                  className="w-14 h-14"
                />
                <span className="text-white ml-6 text-xl">
                  linkedin.com/company/watdig
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="mailto:watdig.team@gmail.com"
                className="flex items-center"
              >
                <img
                  src="email-1572-svgrepo-com.svg"
                  alt="Email"
                  className="w-14 h-14"
                />
                <span className="text-white ml-6 text-xl">
                  watdig.team@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-between px-0">
        <img
          src="Grp_Machining_Pic.png"
          alt="Description of Image 1"
          className="w-1/3 object-cover"
          style={{ height: "300px" }} // Adjust height as needed
        />
        <img
          src="Grp_Shoveling_Pic.png"
          alt="Description of Image 2"
          className="w-1/3 object-cover"
          style={{ height: "300px" }} // Adjust height as needed
        />
        <img
          src="Grp_Cleaning_Pic.png"
          alt="Description of Image 3"
          className="w-1/3 object-cover"
          style={{ height: "300px" }} // Adjust height as needed
        />
        <img
          src="Grp_Boring_Company_Pic.png"
          alt="Description of Image 3"
          className="w-1/3 object-cover"
          style={{ height: "300px" }} // Adjust height as needed
        />
      </div>
    </>
  );
};

export default Contact;
