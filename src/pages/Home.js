// src/pages/Home.jsx
import React from "react";
import Slider from "../components/Slider";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import Mission from "../components/Mission"
const Home = () => {
  return (
    <>
      <Slider />
          <AboutUs />
          <Mission />
      <Services />
      <ContactUs />
    </>
  );
};

export default Home;
