import './App.css';
import React from 'react';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home'
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
    </div>
  );
}

export default App;
