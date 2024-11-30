import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

// Placeholder for service icons
const icons = [
  "/images/bin.png", // Icon for "Door to Door Garbage Collection"
  "/images/broom.png", // Icon for "Road Sweeping"
  "/images/treatment.png", // Icon for "Waste Processing Facilities"
  "/images/restoration.png", // Icon for "Material Recovery Facilities"
  "/images/cleaning-cart.png", // Icon for "Supply of Tools/Equipment/Material"
  "/images/compostable.png", // Icon for "Waste to Compost Facilities"
  "/images/trash.png", // Icon for "Drain Cleaning Services"
  "/images/recycling-point.png", // Icon for "GVP Removal Services"
];

const services = [
  "Door to Door Garbage Collection",
  "Road Sweeping",
  "Waste Processing Facilities",
  "Material Recovery Facilities",
  "Supply of Tools/Equipment/Material for Waste Management",
  "Waste to Compost Facilities",
  "Drain Cleaning Services",
  "GVP Removal Services",
];

const Services = () => {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "#C8E6C9", // Soft Green background for the section
        padding: "70px 0",
      }}
    >
      <div className="container">
        {/* Title Section */}
        <h2
          className="text-center"
          style={{
            color: "#388E3C", // Dark Green for the title
            fontSize: "2.5rem",
            marginBottom: "50px",
          }}
        >
          Our Services
        </h2>
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#FFFFFF", // White card background
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                width: "250px",
                textAlign: "center",
                padding: "20px",
              }}
            >
              {/* Wrap each card in a react-scroll Link */}
              <Link
                to="contact" // Targeting the element with id="contact"
                smooth={true} // Enabling smooth scrolling
                duration={500} // Duration of the scroll (in ms)
                style={{
                  textDecoration: "none",
                  color: "inherit", // Prevent link text from being blue
                  cursor: "pointer", // Change cursor on hover
                }}
              >
                {/* Icon Section */}
                <div
                  style={{
                    backgroundColor: "#81C784", // Light Green circle for icons
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px auto",
                  }}
                >
                  <img
                    src={icons[index]} // Use corresponding icon
                    alt={`${service} icon`}
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </div>
                {/* Service Title */}
                <h5
                  style={{
                    color: "#4CAF50", // Green for service title
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  {service}
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
