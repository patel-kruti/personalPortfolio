// src/components/Navbar.js
import React from "react";

const Navbar = () => (
  <nav style={styles.nav}>
    <h1 style={styles.title}>Your Name</h1>
    <ul style={styles.navList}>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#282c34",
    color: "#fff",
  },
  title: { fontSize: "1.5rem" },
  navList: {
    display: "flex",
    listStyleType: "none",
    gap: "1rem",
  },
};

export default Navbar;
