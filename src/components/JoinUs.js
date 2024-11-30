import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const JoinUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
  });

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the form data
    emailjs
      .sendForm(
        "service_ju438q2", // Your EmailJS service ID
        "template_481u9fy", // Your EmailJS template ID
        e.target, // The form element
        "Bt27dknEu9fu5fhBi" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          toast.success("Application submitted successfully!"); // Toast on success
        },
        (error) => {
          console.log("Error sending message:", error.text);
          toast.error("Error submitting your application. Please try again."); // Toast on error
        }
      );

    // Reset form after submission
    setFormData({ name: "", email: "", phone: "", position: "" });
  };

  return (
    <>
      <ToastContainer /> {/* Toast container for displaying notifications */}
      <section
        style={{
          backgroundColor: "#f0f8ff", // Light blue background
          padding: "80px 0",
          display: "flex",
          justifyContent: "center", // Center the content horizontally
          alignItems: "center", // Center the content vertically
          height: "100vh", // Full viewport height
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%", // Control the width of the section
            maxWidth: "1200px", // Limit the max-width of the container
          }}
        >
          {/* Text Section */}
          <div
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#388E3C",
              marginRight: "30px",
            }}
          >
            <p>Join Us and Be Part of Our Mission</p>
          </div>

          {/* Form Section */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#fff", // White background for the form
              padding: "30px",
              borderRadius: "8px", // Rounded corners
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow
              maxWidth: "400px", // Reduce the width of the form
              width: "100%",
            }}
          >
            <h2
              className="text-center"
              style={{
                color: "#388E3C", // Green color for the header
                fontSize: "1.8rem",
                marginBottom: "20px",
              }}
            >
              Join Us
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#424242",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: "1px solid #C8E6C9", // Light green border
                    fontSize: "1rem",
                    marginBottom: "15px",
                    width: "100%",
                  }}
                />
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#424242",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: "1px solid #C8E6C9",
                    fontSize: "1rem",
                    marginBottom: "15px",
                    width: "100%",
                  }}
                />
              </div>

              {/* Phone Input */}
              <div className="mb-3">
                <label
                  htmlFor="phone"
                  className="form-label"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#424242",
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: "1px solid #C8E6C9",
                    fontSize: "1rem",
                    marginBottom: "15px",
                    width: "100%",
                  }}
                />
              </div>

              {/* Position Input */}
              <div className="mb-3">
                <label
                  htmlFor="position"
                  className="form-label"
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#424242",
                  }}
                >
                  Desired Position
                </label>
                <input
                  type="text"
                  name="position"
                  className="form-control"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: "1px solid #C8E6C9",
                    fontSize: "1rem",
                    marginBottom: "20px",
                    width: "100%",
                  }}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    backgroundColor: "#388E3C",
                    color: "#fff",
                    fontSize: "1rem",
                    border: "none",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinUsForm;
