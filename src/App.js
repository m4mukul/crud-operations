import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import Create from './crud-components/create.js';
import Read from './crud-components/read.js';
import Update from './crud-components/update.js';
import Home from './Home.js';
import About from './About';
import Contact from './Contact';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    
     
        <div>
          
          <Router>
          <Header />
            <Routes>
              <Route exact="true" path="/" element={<Home  />} />
              <Route exact="true" path="about" element={<About  />} />
              <Route exact="true" path="create" element={<Create  />} />
              <Route exact="true" path="read" element={<Read  />} />
              <Route exact="true" path="update" element={<Update  />} />
              <Route exact="true" path="contact" element={<Contact  />} />
            </Routes>
            
            <Footer />
          </Router>
          
        </div>
      
    
  );
}

export default App;
