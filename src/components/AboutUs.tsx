const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-800 text-white py-12 w-full">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold uppercase">About Us</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
            Discover more about our mission, vision, and values.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="px-4 lg:px-20 py-6 w-full md:w-1/3">
            <div className="text-center mb-6">
              <img
                src="path-to-your-image.jpg"
                alt="Image"
                className="mx-auto w-20 h-20 mb-3 rounded-full shadow-lg"
              />
              <h5 className="text-xl font-semibold">Our Mission</h5>
              <p className="mt-2 mb-4 text-gray-500">
                Brief description of your mission.
              </p>
            </div>
          </div>

          <div className="px-4 lg:px-20 py-6 w-full md:w-1/3">
            <div className="text-center mb-6">
              <img
                src="path-to-another-image.jpg"
                alt="Image"
                className="mx-auto w-20 h-20 mb-3 rounded-full shadow-lg"
              />
              <h5 className="text-xl font-semibold">Our Vision</h5>
              <p className="mt-2 mb-4 text-gray-500">
                A short explanation of your vision.
              </p>
            </div>
          </div>

          <div className="px-4 lg:px-20 py-6 w-full md:w-1/3">
            <div className="text-center mb-6">
              <img
                src="path-to-a-third-image.jpg"
                alt="Image"
                className="mx-auto w-20 h-20 mb-3 rounded-full shadow-lg"
              />
              <h5 className="text-xl font-semibold">Our Values</h5>
              <p className="mt-2 mb-4 text-gray-500">
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
