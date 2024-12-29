// src/components/Home.js
import React from "react";
import myProfile from '../myProfile.jpg';

const Home = () => (
  <section id="home" style={styles.section}>
    <div style={styles.textContainer}>
      <h2 style={styles.heading}>Hi, I'm Kruti Patel</h2>
      <p style={styles.text}>Software Engineer | Passionate about building impactful applications.</p>
    </div>
    <div style={styles.imageContainer}>
      <img src={myProfile} alt="Profile" style={styles.image} />
    </div>
  </section>
);

const styles = {
  section: {
    height: "65vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f4f4f4", // Faint background color for the entire section
    padding: "0 5%", // Add padding to create space around the edges
  },
  textContainer: {
    flex: 1,
    marginRight: "2rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Faint white background for text
    padding: "1rem 2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for a neat effect
  },
  heading: {
    fontSize: "3rem",
    margin: 0,
    color: "#333",
  },
  text: {
    fontSize: "1.5rem",
    color: "#555",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%", // Compress the image slightly
    maxWidth: "400px", // Set a max width to ensure it doesn't get too large
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
  },
};

export default Home;
