// src/components/Contact.js
import React from "react";

const Contact = () => (
  <section id="contact" style={styles.section}>
    <h2>Contact</h2>
    <p>Email: patelkrutipravin@gmail.com</p>
    <p>LinkedIn: <a href="https://linkedin.com/in/nickruti">Profile</a></p>
    <p>GitHub: <a href="https://github.com/patel-kruti">Profile</a></p>
  </section>
);

const styles = {
  section: {
    padding: "2rem",
    background: "#e9ecef",
    textAlign: "center",
  },
};

export default Contact;
