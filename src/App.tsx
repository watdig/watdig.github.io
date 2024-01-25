import { BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Contact />
        <Routes></Routes>
      </div>
    </Router>
  );
};

export default App;
