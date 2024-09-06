import React from "react";

import Landing from "./Home_Components/Landing";
import AboutUs from "./Home_Components/AboutUs";

const Home: React.FC = () => {
  return (
    <div className="w-screen max-w-none bg-gray">
      <Landing />
      <AboutUs />
    </div>
  );
};

export default Home;
