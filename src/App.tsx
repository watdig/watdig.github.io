import Landing from "./components/landing";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Sponsors from "./components/Sponsors";
import JoinUs from "./components/JoinUs";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Landing />
      <Navbar />
      <AboutUs />
      <Sponsors />
      <JoinUs />
      <Contact />
    </div>
  );
};

export default App;
