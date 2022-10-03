import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';

import './App.css';
import Header from "./Pages/Shared/Header/Header";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import TeamPage from "./Pages/Team/TeamPage";
import TeamMemberPage from "./Pages/Team/TeamMemberPage";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/memberDetails/:id" element={<TeamMemberPage/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
