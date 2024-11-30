// src/components/Slider.jsx
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Carousel } from "bootstrap"; // Import Bootstrap Carousel JS

const Slider = () => {
  useEffect(() => {
    // Initialize the carousel
    const myCarousel = document.querySelector("#heroSlider");
    const carousel = new Carousel(myCarousel);
    carousel.cycle(); // Start the carousel automatically
  }, []);

  return (
    <div id="heroSlider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/slider1.png"
            className="d-block w-100"
            alt="Clean Environment"
          />
          <div className="carousel-caption">
            <h2>Efficient Waste Management</h2>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/slider2.png"
            className="d-block w-100"
            alt="Clean Roads"
          />
          <div className="carousel-caption">
            <h2>Clean Roads, Better Living</h2>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/slider3.png"
            className="d-block w-100"
            alt="Eco Solutions"
          />
          <div className="carousel-caption">
            <h2>Environmentally Friendly Solutions</h2>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
