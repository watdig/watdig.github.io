import React from "react";
import Landing from "./Sponsor_Components/Landing";
import Info from "./Sponsor_Components/Infor";
import Logos from "./Sponsor_Components/Logos";

const SponsorPage: React.FC = () => {
  return (
    <div>
      <Landing />
      <Info />
      <Logos />
    </div>
  );
};

export default SponsorPage;
