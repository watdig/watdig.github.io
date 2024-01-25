import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="mt-14 bg-amber-50 text-gray-900 py-20 w-full">
        {" "}
        <div className="mx-auto px-8 flex items-center justify-between space-x-12">
          {" "}
          <div className="w-1/2 space-y-6">
            {" "}
            <h1 className="text-6xl font-bold uppercase mb-6 leading-tight">
              {" "}
              Efficient, Accurate, Autonomous Navigation
            </h1>
            <p className="text-xl mb-12">
              {" "}
              Innovating navigation systems for next-gen tunnel boring machines
            </p>
            <div className="mt-8">
              <a href="#about">
                <button className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors">
                  Learn More
                </button>
              </a>
            </div>
          </div>
          <div className="w-1/2">
            {" "}
            <img
              src="./src/assets/logo.png"
              alt="WatDig"
              className="max-w-full h-auto mb-20"
            />
          </div>
        </div>
      </div>
      <div>
        <section
          id="about"
          className="bg-gradient-to-b from-amber-50 to-blue-100 text-gray-800 py-12 w-full relative pt-24"
        >
          <div className="max-w-screen-xl mx-auto px-4 lg:px-0 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-extrabold uppercase text-black">
                This is WatDig
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4">
                Discover more about our mission, vision, and values.
              </p>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="px-4 lg:px-20 py-6 w-full md:w-1/3">
                <div className="text-center mb-6">
                  <img
                    src="src/assets/rocket.png"
                    alt="Image"
                    className="mx-auto w-20 h-20 mb-3  shadow-lg"
                  />
                  <h5 className="text-xl font-semibold text-black">
                    Our Mission
                  </h5>
                  <p className="mt-2 mb-4">
                    Our mission is to revolutionize the realm of autonomous
                    navigation by developing cutting-edge, reliable, and
                    GPS-independent navigation solutions through harnessing
                    innovative techniques like advanced sensor fusion, machine
                    learning and environmental awareness.
                  </p>
                </div>
              </div>

              <div className="px-4 lg:px-20 py-6 w-full md:w-1/3">
                <div className="text-center mb-6">
                  <img
                    src="src/assets/glasses.png"
                    alt="Image"
                    className="mx-auto w-20 h-20 mb-3 shadow-lg"
                  />
                  <h5 className="text-xl font-semibold text-black">
                    Our Vision
                  </h5>
                  <p className="mt-2 mb-4">
                    Our vision is to be the leading force in the field of
                    autonomous navigation, transcending the limitations of GPS.
                    We aim to set new benchmarks in navigation technology,
                    making it possible for autonomous systems to navigate with
                    precision in any environment, from the depths of oceans to
                    the complexities of urban landscapes and beyond.
                  </p>
                </div>
              </div>

              <div className="px-4 lg:px-20 py-6 w-full md:w-1/3">
                <div className="text-center mb-6">
                  <img
                    src="src/assets/values.png"
                    alt="Image"
                    className="mx-auto w-20 h-20 mb-3  shadow-lg"
                  />
                  <h5 className="text-xl font-semibold text-black">
                    Our Values
                  </h5>
                  <p className="mt-2 mb-4">
                    <span className="font-bold">
                      Innovation. Resiliance. Collaboration. Excellence.
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    These are the pillars of our organization. We value and
                    foster creativity and out-of-the-box thinking, constant
                    learning and adaptation, believing in diverse perspectives
                    and pushing for excellence in our endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section
          id="sponsors"
          className="bg-gradient-to-b from-blue-100 to-sky-50 text-black py-12 w-full"
        >
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold uppercase mb-6">Our Sponsors</h2>
            <p className="mb-6">
              We are proudly supported by these amazing brands:
            </p>

            {/* Sponsor logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
              <img
                src="./src/assets/Clearpath:Rockwell.jpeg"
                alt="Clearpath Robotics"
                className="h-24 md:h-32"
              />
              <img
                src="./src/assets/qqlf.jpeg"
                alt="QQLF Consultants"
                className="h-24 md:h-32"
              />
            </div>
            {/* Sponsor Us button */}
            <Link
              to="/Sponsor_page"
              className="text-xl inline-block bg-darkyellow text-black font-bold py-5 px-12 rounded-lg uppercase tracking-wider hover:bg-opacity-90 transition duration-300 ease-in-out"
            >
              Sponsor Us
            </Link>

            {/* Additional information or call-to-action */}
            <p className="mt-6 text-gray-400">
              Your brand can be part of our story. Get in touch to discuss
              sponsorship opportunities.
            </p>
          </div>
        </section>
      </div>
      <div>
        <section
          id="join"
          className="h-full bg-gradient-to-b from-sky-50 to-amber-50 text-gray-900 py-12"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              {/* Side note */}
              <div className="md:w-1/3 mb-6 md:mb-0">
                <h2 className="text-4xl font-bold mb-4">
                  Interested in Joining Our Team?
                </h2>
                <p className="text-xl text-gray-600">
                  Fill out our form! If your application seems like a good fit,
                  we will reach out.
                </p>
              </div>

              {/* Application Form */}
              <div className="md:w-2/3 bg-white text-gray-800 rounded-lg p-8 shadow-lg">
                <form action="#" method="POST">
                  <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                      <span className="text-gray-700 font-medium">
                        Full Name
                      </span>
                      <input
                        type="text"
                        name="fullname"
                        className="mt-1 bg-gray-200 block w-full rounded-md border-black shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="John Doe"
                        required
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700 font-medium">
                        Email Address
                      </span>
                      <input
                        type="email"
                        name="email"
                        className="mt-1 bg-gray-200 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="john@example.com"
                        required
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700 font-medium">
                        Resume (PDF)
                      </span>
                      <input
                        type="file"
                        name="resume"
                        className="mt-1 block w-full"
                        accept="application/pdf"
                        required
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700 font-medium">
                        Why Do You Want to Join WatDig?
                      </span>
                      <textarea
                        name="coverletter"
                        className="mt-1 bg-gray-200 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="Introduce yourself..."
                      ></textarea>
                    </label>
                    <div className="block text-right">
                      <button
                        type="submit"
                        className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
