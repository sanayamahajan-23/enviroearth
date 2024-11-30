import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the EmailJS service
    emailjs
      .sendForm(
        "service_ju438q2", // Replace with your EmailJS service ID
        "template_hlg25yk", // Replace with your EmailJS template ID
        e.target, // The form element
        "Bt27dknEu9fu5fhBi" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log("Error sending message:", error.text);
          toast.error("Error sending your message. Please try again.");
        }
      );

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <ToastContainer />
      <section
        id="contact"
        className="py-5"
        style={{ backgroundColor: "#E8F5E9" }} // Light Green for Environment Theme
      >
        <div className="container">
          {/* Heading Section */}
          <div className="text-center mb-4">
            <h2
              style={{
                color: "#01579B", // Blue Header
                marginBottom: "10px",
              }}
            >
              Contact Us
            </h2>
            <p
              style={{
                color: "#4CAF50", // Green Subheading
                fontSize: "1rem",
                marginBottom: "30px",
              }}
            >
              Get in touch with us today for sustainable and eco-friendly
              solutions!
            </p>
          </div>

          <div className="row">
            {/* Contact Info Section */}
            <div className="col-md-6">
              <div className="row">
                <div className="col-12 mb-3">
                  <div
                    className="card text-center"
                    style={{
                      border: "none",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      padding: "20px",
                    }}
                  >
                    <div
                      className="icon-circle"
                      style={{ marginBottom: "15px" }}
                    >
                      <i
                        className="fas fa-map-marker-alt"
                        style={{
                          fontSize: "24px",
                          color: "#FFD54F", // Yellow Icon
                        }}
                      ></i>
                    </div>
                    <h5 style={{ color: "#01579B" }}>Address</h5>
                    <p style={{ color: "#616161" }}>
                      2nd Floor, Above Winni Cake House, Lower Roop Nagar,
                      180013
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="card text-center"
                    style={{
                      border: "none",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      padding: "20px",
                    }}
                  >
                    <div
                      className="icon-circle"
                      style={{ marginBottom: "15px" }}
                    >
                      <i
                        className="fas fa-phone-alt"
                        style={{
                          fontSize: "24px",
                          color: "#FFD54F", // Yellow Icon
                        }}
                      ></i>
                    </div>
                    <h5 style={{ color: "#01579B" }}>Call Us</h5>
                    <p style={{ color: "#616161" }}>+91 5589 55488 55</p>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="card text-center"
                    style={{
                      border: "none",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      padding: "20px",
                    }}
                  >
                    <div
                      className="icon-circle"
                      style={{ marginBottom: "15px" }}
                    >
                      <i
                        className="fas fa-envelope"
                        style={{
                          fontSize: "24px",
                          color: "#FFD54F", // Yellow Icon
                        }}
                      ></i>
                    </div>
                    <h5 style={{ color: "#01579B" }}>Email Us</h5>
                    <p style={{ color: "#616161" }}>info@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      border: "1px solid #C8E6C9",
                      borderRadius: "8px",
                      padding: "10px",
                      marginBottom: "15px",
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      border: "1px solid #C8E6C9",
                      borderRadius: "8px",
                      padding: "10px",
                      marginBottom: "15px",
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      border: "1px solid #C8E6C9",
                      borderRadius: "8px",
                      padding: "10px",
                      marginBottom: "15px",
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    style={{
                      border: "1px solid #C8E6C9",
                      borderRadius: "8px",
                      padding: "10px",
                    }}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-block"
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "#FFFFFF",
                    padding: "10px 20px",
                    borderRadius: "8px",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
