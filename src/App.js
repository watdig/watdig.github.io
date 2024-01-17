import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import SponsorUs from "./components/SponsorUs/SponsorUs";
import ContactJoin from "./components/ContactJoin/ContactJoin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="sponsor-us">
        <SponsorUs />
      </div>
      <div id="contact-join">
        <ContactJoin />
      </div>
    </div>
  );
}

export default App;
