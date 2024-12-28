// src/components/Home.js
import React from "react";

const Home = () => (
  <section id="home" style={styles.section}>
    <div style={styles.overlay}>
      <h2 style={styles.heading}>Hi, I'm Kruti Patel</h2>
      <p style={styles.text}>Software Engineer | Passionate about building impactful applications.</p>
    </div>
  </section>
);

const styles = {
  section: {
    height: "100vh",
    backgroundImage: "url('../myProfile.jpg')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a semi-transparent overlay
    padding: "2rem",
    borderRadius: "10px",
    textAlign: "center",
  },
  heading: {
    fontSize: "3rem",
    margin: 0,
  },
  text: {
    fontSize: "1.5rem",
  },
};

export default Home;
