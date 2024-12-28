// src/components/Projects.js
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Array of project data
const projects = [
  {
    title: "React-based Todo App",
    description: "A simple and elegant to-do list application built with React.",
    link: "#",
  },
  {
    title: "Stock Prediction Model",
    description: "A machine learning model for predicting stock prices using historical data.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "This portfolio website showcasing projects and skills.",
    link: "#",
  },
];

const Projects = () => (
  <section id="projects" style={styles.section}>
    <h2>Projects</h2>
    <Box sx={styles.box}>
      {projects.map((project, index) => (
        <Card key={index} variant="outlined" sx={styles.card}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Project {index + 1}
            </Typography>
            <Typography variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Description
            </Typography>
            <Typography variant="body2">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={project.link} target="_blank">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  </section>
);

const styles = {
  section: {
    padding: "2rem",
    background: "#fff",
    textAlign: "center",
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  },
  card: {
    minWidth: 275,
    maxWidth: 300,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default Projects;
