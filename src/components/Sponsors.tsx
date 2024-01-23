const Sponsors = () => {
  return (
    <section id="sponsors" className="bg-gray-200 text-black py-12 w-full">
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
        <a
          href="#contact"
          className="inline-block bg-darkyellow text-black font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-opacity-90 transition duration-300 ease-in-out"
        >
          Sponsor Us
        </a>

        {/* Additional information or call-to-action */}
        <p className="mt-6 text-gray-400">
          Your brand can be part of our story. Get in touch to discuss
          sponsorship opportunities.
        </p>
      </div>
    </section>
  );
};

export default Sponsors;
