import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Heropage } from "./components/HeroPage/Heropage";
import { Hazard } from "./components/HazardPerception/Hazard";
import { AboutTest } from "./components/AboutTest/AboutTest";
import { Benefits } from "./components/Benefits/Benefits";
import { Contact } from "./components/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Heropage />
      <Benefits />
      <AboutTest />
      <Hazard />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
