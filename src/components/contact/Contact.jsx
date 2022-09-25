import React from "react";
import './contact.css'
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Let's Connect</h1>
      <div className="contact-text">
        <p>
          Please feel free to reach out if you would like to collaborate on
          projects, chat code or anything really. You can also send me an email
          at ryan.caruth2@gmail.com. Looking forward to hearing from you. All
          fields are required.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
