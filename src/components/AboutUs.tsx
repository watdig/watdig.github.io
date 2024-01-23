const AboutUs = () => {
  return (
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
              <h5 className="text-xl font-semibold text-black">Our Mission</h5>
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
              <h5 className="text-xl font-semibold text-black">Our Vision</h5>
              <p className="mt-2 mb-4">
                Our vision is to be the leading force in the field of autonomous
                navigation, transcending the limitations of GPS. We aim to set
                new benchmarks in navigation technology, making it possible for
                autonomous systems to navigate with precision in any
                environment, from the depths of oceans to the complexities of
                urban landscapes and beyond.
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
              <h5 className="text-xl font-semibold text-black">Our Values</h5>
              <p className="mt-2 mb-4">
                <span className="font-bold">
                  Innovation. Resiliance. Collaboration. Excellence.
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                These are the pillars of our organization. We value and foster
                creativity and out-of-the-box thinking, constant learning and
                adaptation, believing in diverse perspectives and pushing for
                excellence in our endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
