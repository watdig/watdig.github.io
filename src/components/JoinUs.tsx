const JoinUs = () => {
  return (
    <section id="join" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          {/* Side note */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Interested in joining our team?
            </h2>
            <p className="text-gray-400">
              We're looking for talented individuals who share our passion for
              excellence and innovation.
            </p>
          </div>

          {/* Application Form */}
          <div className="md:w-2/3 bg-white text-gray-800 rounded-lg p-8 shadow-lg">
            <form action="#" method="POST">
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700">Full Name</span>
                  <input
                    type="text"
                    name="fullname"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="John Doe"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Email Address</span>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="john@example.com"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Resume (PDF)</span>
                  <input
                    type="file"
                    name="resume"
                    className="mt-1 block w-full"
                    accept="application/pdf"
                    required
                  />
                </label>
                <div className="block">
                  <span className="text-gray-700">Cover Letter</span>
                  <textarea
                    name="coverletter"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Introduce yourself..."
                  ></textarea>
                </div>
                <div className="block text-right">
                  <button
                    type="submit"
                    className="py-2 px-4 bg-darkyellow text-gray-800 rounded hover:bg-yellow-600 transition duration-300"
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
