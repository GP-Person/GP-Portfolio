import './App.css';
//import React from 'react';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NavTabs from '../components/NavTabs';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <h1>Garrett Pearson</h1>
        {/* NavTabs handles navigation */}
        <NavTabs />
      </header>
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer style={footerStyle}>
        <div> <a href="https://www.linkedin.com/in/garrett-pearson-909854225/">LinkedIn</a> | (719) 480-3206 | <a href="mailto:garrettapearson@gmail.com" style={{ color: '#FF9900', textDecoration: 'none' }}>garrettapearson@gmail.com</a></div>
      </footer>
    </div>
  );
}

// Inline styling for the footer
const footerStyle = {
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#333',
  color: '#FFF',
  marginTop: '2rem',
};

export default App;
