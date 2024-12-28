// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Paper from '@mui/material/Paper';


const App = () => (
  <div>
    <Navbar />
    <Home />
    <Paper>
      <About />
    </Paper>
    <Paper>
      <Projects />
    </Paper>
    <Paper>
      <Skills />
    </Paper>
    <Paper>
      <Contact />
    </Paper>
  </div>
);

export default App;
