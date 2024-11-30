import React from "react";

const Mission = () => {
  return (
    <section
      id="mission"
      style={{
        backgroundColor: "#F1F8E9", // Very light green background for a fresh eco-feel
        padding: "80px 0", // Adequate padding for a spacious layout
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Mission Title */}
        <div className="text-center">
          <h2
            style={{
              color: "#2C6B2F", // Earthy green color for the title
              fontWeight: "bold",
              fontSize: "2.5rem", // Larger headline font for emphasis
              marginBottom: "40px", // Space below the title
            }}
          >
            Our Mission
          </h2>
        </div>

        {/* Mission Content */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "30px", // Space between sections
          }}
        >
          <p
            style={{
              color: "#424242", // Darker gray text for better contrast
              fontSize: "1.2rem",
              lineHeight: "1.8",
              textAlign: "center",
              maxWidth: "800px", // Limit the paragraph width for better readability
              marginBottom: "30px",
            }}
          >
            At{" "}
            <strong style={{ color: "#8BC34A" }}>EnviroEarth Services</strong>,
            our mission is to foster sustainable waste management practices that
            minimize environmental impact. We strive to promote a cleaner,
            greener planet by offering innovative solutions for waste disposal,
            recycling, and composting. Our goal is to create a future where
            waste is minimized and resources are reclaimed for the benefit of
            the environment and future generations.
          </p>

          <div
            style={{
              backgroundColor: "#FFFFFF", // White background for mission detail box
              borderRadius: "10px", // Rounded corners for the box
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
              padding: "40px",
              maxWidth: "1000px", // Limit the box width
              textAlign: "center", // Center the text in the box
            }}
          >
            <h4
              style={{
                color: "#388E3C", // Lively green for heading
                fontSize: "1.6rem",
                marginBottom: "20px",
              }}
            >
              Our Commitment to the Environment
            </h4>
            <p
              style={{
                color: "#424242", // Neutral gray for the text
                fontSize: "1.1rem",
                lineHeight: "1.7",
              }}
            >
              We are committed to providing sustainable waste management
              solutions that contribute to the preservation of our environment.
              By embracing recycling, composting, and responsible disposal
              methods, we aim to reduce our ecological footprint and help
              communities live more sustainably. Our innovative services and
              practices are designed to ensure that future generations inherit a
              cleaner, healthier planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
