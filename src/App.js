import React, { useState} from "react";
import { Dropdown } from "./components/Dropdown";
import Hero from "./components/Hero";
import infoSection from "./components/infoSection";
import NavBar from "./components/NavBar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => { 
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <infoSection></infoSection>
    </>
  );
}

export default App;
