// src/components/Navbar.js
import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaCode, FaEnvelope } from "react-icons/fa"; // Example icons

const Navbar = () => (
  <nav style={styles.nav}>
    <ul style={styles.navList}>
      <li style={styles.navItem}>
        <a href="#home" style={styles.navLink}>
          <FaHome style={styles.icon} />
        </a>
      </li>
      <li style={styles.navItem}>
        <a href="#about" style={styles.navLink}>
          <FaUser style={styles.icon} />
        </a>
      </li>
      <li style={styles.navItem}>
        <a href="#projects" style={styles.navLink}>
          <FaProjectDiagram style={styles.icon} />
        </a>
      </li>
      <li style={styles.navItem}>
        <a href="#skills" style={styles.navLink}>
          <FaCode style={styles.icon} />
        </a>
      </li>
      <li style={styles.navItem}>
        <a href="#contact" style={styles.navLink}>
          <FaEnvelope style={styles.icon} />
        </a>
      </li>
    </ul>
  </nav>
);

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "80px", // Adjust width as needed
    background: "#282c34",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000, // Ensures the navbar stays on top
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column", // Makes the list vertical
    alignItems: "center",
    gap: "2rem", // Space between icons
  },
  navItem: {
    textAlign: "center",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.5rem", // Adjust icon size
    transition: "color 0.3s",
  },
  icon: {
    cursor: "pointer",
  },
  navLinkHover: {
    color: "#61dafb", // Color on hover (optional)
  },
};

export default Navbar;
