import './App.css';
// import React from 'react';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NavTabs from '../components/NavTabs';
import { Route, Routes } from 'react-router-dom';
import Logo from './assets/logo.png';

function App() {
  return (
    <div>
      <header style={headerStyle}>
        <img src={Logo} alt="Logo" style={logoStyle} /> {/* Updated logo style */}
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
        <div>
          <a href="https://www.linkedin.com/in/garrett-pearson-909854225/" style={linkStyle}>LinkedIn</a> | (719) 480-3206 | 
          <a href="mailto:garrettapearson@gmail.com" style={{ color: '#FF9900', textDecoration: 'none' }}> garrettapearson@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

// Inline styling
const headerStyle = {
  backgroundColor: '#333',
  color: '#FF9900',
  padding: '1rem',
  textAlign: 'center' as const,
};

const footerStyle = {
  padding: '1rem',
  backgroundColor: '#333',
  color: '#FFF',
  marginTop: '2rem',
};

const logoStyle: React.CSSProperties = {
  height: '60px',
  width: '60px',
  borderRadius: '50%',
  marginBottom: '0.5rem',
  objectFit: 'cover' as 'cover', 
};

const linkStyle = {
  color: '#FF9900',
  textDecoration: 'none',
};

export default App;
