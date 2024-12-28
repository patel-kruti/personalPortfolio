// src/components/About.js
import React from "react";

const About = () => (
  <section id="about" style={styles.section}>
    <h2>About Me</h2>
    <p>
      I'm a software engineer with expertise in building web applications,
      focusing on performance, scalability, and user experience.
    </p>
  </section>
);

const styles = {
  section: {
    padding: "2rem",
    background: "#e9ecef",
    textAlign: "center",
  },
};

export default About;
