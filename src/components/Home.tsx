import React from "react";

import Landing from "./Home_Components/Landing";
import AboutUs from "./Home_Components/AboutUs";
import JoinUs from "./Home_Components/Join";
import Sponsors from "./Home_Components/Sponsors";

const Home: React.FC = () => {
  return (
    <div className="w-screen max-w-none bg-gray">
      <Landing />
      <AboutUs />
      <JoinUs />
      <Sponsors />
    </div>
  );
};

export default Home;
