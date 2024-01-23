const JoinUs = () => {
  return (
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
              Fill out our form! If your application seems like a good fit, we
              will reach out.
            </p>
          </div>

          {/* Application Form */}
          <div className="md:w-2/3 bg-white text-gray-800 rounded-lg p-8 shadow-lg">
            <form action="#" method="POST">
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700 font-medium">Full Name</span>
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
  );
};

export default JoinUs;
