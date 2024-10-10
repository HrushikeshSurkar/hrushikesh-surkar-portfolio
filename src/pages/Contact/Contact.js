import React, { useState } from "react";
import CommonHeader from "../../components/ui/CommonHeader/CommonHeader";
import "./Contact.css";
import { Form } from "react-bootstrap";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Construct the mailto link
    const mailtoLink = `mailto:hrushikeshsurkar@example.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0D%0AFrom: ${encodeURIComponent(
      email
    )}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-section">
      <CommonHeader
        title={"Contact"}
        bgColorForHeader={"--main-bg-color"}
        colorForHeader={"--main-color"}
      />
      <div className="container contact-container mt-5">
        <div className="row">
          <div className="contact-form col-lg-6 col-md-12 mb-4 px-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupMessage">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <button
                  className="contact-button"
                  variant="success"
                  type="submit"
                >
                  Send Message
                </button>
              </Form.Group>
            </Form>
          </div>
          <div className="contact-info col-6">
            <div className="contact-item">
              <MdAlternateEmail className="contact-icon" />
              <span>hrushikeshsurkar@example.com</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91-7263069877</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>New Manish Nagar, Nagpur, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
