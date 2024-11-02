import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="mainContainer"
    style={{
      backgroundImage: `url('/ho.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    >
      <section className="aboutSection">
        <h1>Get to Know Hydro Alert</h1>
        <p>
        Hydro Alert is focused on keeping communities safe by providing reliable flood monitoring and alert systems. Our goal is to give people and local authorities timely and accurate information to help them prepare for and respond quickly to floods. With Hydro Alert, individuals and emergency teams can stay informed, make smart decisions, and reduce the risks that come with flooding. We’re here to help protect lives and property by making flood safety simple and accessible for everyone.
        </p>
      </section>
      
      <section className="contactSection">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
