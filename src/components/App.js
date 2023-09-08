import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
    <Router>
      
      <Routes>
        <Route exact path="/projects" component={Projects} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;

