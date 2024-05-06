import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sponsor_page from "./components/Sponsor_page";
import AboutUs from "./components/AboutUs";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsor_page />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
