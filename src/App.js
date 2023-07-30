import React, { useState } from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Intro from './Components/Intro-Animation/Intro';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Google/Home';
import Project from './Components/Projects/Project';
import Amazon from './Components/Links/Amazon/Amazon';
import Chatgpt from './Components/Links/Chatgpt/Chatgpt';
import Spotify from './Components/Links/Spotify/Spotify';
import Whatsapp from './Components/Links/Whatsapp/Whatsapp';
import Youtube from './Components/Links/Youtube/Youtube';
import  Form  from './Components/Form/Form';
export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleOkClick = () => {
    setShowIntro(false);
  };

  // Function to hide the navbar when a link is clicked
  const handleLinkClick = () => {
    setShowNavbar(false);
  };

  return (
    <div>
      {showIntro ? (
        <Intro onOkClick={handleOkClick} />
      ) : (
        <div>
          {showNavbar && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
          <Routes>
            <Route
              path="/amazon"
              element={<Amazon />}
              onClick={handleLinkClick}
            />
            <Route
              path="/chatgpt"
              element={<Chatgpt />}
              onClick={handleLinkClick}
            />
            <Route
              path="/spotify"
              element={<Spotify />}
              onClick={handleLinkClick}
            />
            <Route
              path="/whatsapp"
              element={<Whatsapp />}
              onClick={handleLinkClick}
            />
            <Route
              path="/youtube"
              element={<Youtube />}
              onClick={handleLinkClick}
            />
          </Routes>
          <Routes>
            <Route path='/form' element={<Form/>} />
          </Routes>
        </div>
      )}
    </div>
  );
}
