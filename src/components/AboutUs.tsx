const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-gray-200 text-gray-800 py-12 w-full relative pt-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="path-to-background-image.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 lg:px-0 relative z-10">
        <div className="text-center mb-12">
          {/* Bigger and Bolder Title */}
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
                src="src/components/watdig.png"
                alt="Image"
                className="mx-auto w-20 h-20 mb-3 rounded-full shadow-lg"
              />
              <h5 className="text-xl font-semibold text-black">Our Mission</h5>
              <p className="mt-2 mb-4">Brief description of your mission.</p>
            </div>
          </div>

          <div className="px-4 lg:px-20 py-6 w-full md:w-1/3">
            <div className="text-center mb-6">
              <img
                src="path-to-another-image.jpg"
                alt="Image"
                className="mx-auto w-20 h-20 mb-3 rounded-full shadow-lg"
              />
              <h5 className="text-xl font-semibold text-black">Our Vision</h5>
              <p className="mt-2 mb-4">A short explanation of your vision.</p>
            </div>
          </div>

          <div className="px-4 lg:px-20 py-6 w-full md:w-1/3">
            <div className="text-center mb-6">
              <img
                src="path-to-a-third-image.jpg"
                alt="Image"
                className="mx-auto w-20 h-20 mb-3 rounded-full shadow-lg"
              />
              <h5 className="text-xl font-semibold text-black">Our Values</h5>
              <p className="mt-2 mb-4">
                Key values that your organization upholds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
