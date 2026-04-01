import { Camera } from "lucide-react";
import "./App.css";
import NavBar from "./components/HomePage/NavBar";
import HeroSection from "./components/HomePage/HeroSection";
import StatSection from "./components/MainPage/StatSection/StatSection";
import DigitalTools from "./components/MainPage/DigitalTools/DigitalTools";
import { useState } from "react";

function App() {
  const [selectedCart, setSelectedCart] = useState([]);
  return (
    <>
      <NavBar selectedCart={selectedCart}></NavBar>
      <HeroSection></HeroSection>
      <StatSection></StatSection>
      <DigitalTools selectedCart={selectedCart} setSelectedCart={setSelectedCart}></DigitalTools>
    </>
  );
}

export default App;
