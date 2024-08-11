import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sponsor_page from "./components/Sponsor_page";
import About from "./components/AboutUs";
import Sponsor from "./components/Sponsor";
import Join from "./components/JoinUs";

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsor_page />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
