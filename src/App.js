// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JoinUs from "./pages/JoinUs";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Contact from "./pages/ContactUs";
import About from "./pages/AboutUs";
import Mission1 from "./pages/Mission";
import Services1 from "./pages/Services";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services1 />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/mission" element={<Mission1 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
