import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#E8F5E9", // Soft Green background for eco-friendliness
        padding: "70px 0",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* About Us Title */}
        <div className="text-center">
          <h2
            style={{
              color: "#388E3C", // Dark Green for the title
              fontWeight: "bold",
              fontSize: "2.5rem", // Larger headline font
              marginBottom: "40px",
            }}
          >
            About Us
          </h2>
        </div>

        {/* Content Section (Side-by-Side Layout) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between", // Space between text and image
            alignItems: "center", // Align text and image vertically
            flexWrap: "wrap", // Wrap content on smaller screens
            gap: "20px", // Add space between items
          }}
        >
          {/* Text Section */}
          <div
            style={{
              flex: "1", // Allow text to take up 50% of space
              maxWidth: "600px", // Limit text width
            }}
          >
            <p
              style={{
                color: "#616161", // Neutral gray text
                fontSize: "1.2rem",
                lineHeight: "1.8",
              }}
            >
              At{" "}
              <strong style={{ color: "#4CAF50" }}>EnviroEarth Services</strong>
              , we are committed to creating a cleaner and greener planet by
              providing comprehensive waste management solutions. Our mission is
              to minimize environmental impact through efficient, innovative,
              and sustainable practices. We serve communities and businesses by
              managing waste responsibly, promoting recycling, and offering
              eco-friendly services to keep our surroundings clean and healthy.
            </p>
          </div>

          {/* Image Section */}
          <div
            style={{
              flex: "1", // Allow image to take up 50% of space
              textAlign: "center", // Center the image horizontally
            }}
          >
            <img
              src="/images/about-us.jpg"
              alt="About EnviroEarth Services"
              style={{
                maxWidth: "100%", // Ensure image scales properly
                borderRadius: "10px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
