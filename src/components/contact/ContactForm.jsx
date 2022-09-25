import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  return (
    <form>
      <label htmlFor="firstName">First Name: </label>
      <input
        type="string"
        id="firstName"
        autoComplete="off"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.event)}
      />
      <label htmlFor="lastName">Last Name: </label>
      <input
        type="string"
              id="lastName"
        autoComplete="off"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.event)}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        autoComplete="off"
        required
        value={email}
        onChange={(e) => setEmail(e.target.event)}
      />
      <label htmlFor="subject">Subject: </label>
      <input
        type="string"
        id="subject"
        autoComplete="off"
        required
        value={subject}
        onChange={(e) => setSubject(e.target.event)}
      />
      <label htmlFor="message">Message: </label>
      <textarea
        type="textBox"
              id="message"
              rows='20'
              cols='80'
        required
        value={message}
        onChange={(e) => setMessage(e.target.event)}
      />
    </form>
  );
};

export default ContactForm;
