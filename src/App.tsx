import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Sponsor_page from "./components/Sponsor_page";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="./Sponsor_page" element={<Sponsor_page />} />
        </Routes>
        <Contact />
      </div>
    </Router>
  );
};

export default App;
