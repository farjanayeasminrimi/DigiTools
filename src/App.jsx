import { Camera } from "lucide-react";
import "./App.css";
import NavBar from "./components/HomePage/NavBar";
import HeroSection from "./components/HomePage/HeroSection";
import StatSection from "./components/MainPage/StatSection/StatSection";
import DigitalTools from "./components/MainPage/DigitalTools/DigitalTools";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <StatSection></StatSection>
      <DigitalTools></DigitalTools>
    </>
  );
}

export default App;
