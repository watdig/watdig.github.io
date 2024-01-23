const Landing = () => {
  return (
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
  );
};

export default Landing;
