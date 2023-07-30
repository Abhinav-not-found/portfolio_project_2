import React, { useState } from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Intro from './Components/Intro-Animation/Intro'; // Assuming this is the path to your Intro component
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Google/Home';
import Project from './Components/Projects/Project';
import Amazon from './Components/Links/Amazon/Amazon';
import Chatgpt from './Components/Links/Chatgpt/Chatgpt';
import Spotify from './Components/Links/Spotify/Spotify';
import Whatsapp from './Components/Links/Whatsapp/Whatsapp';
import Youtube from './Components/Links/Youtube/Youtube';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleOkClick = () => {
    setShowIntro(false);
  };

  return (
    <div>
     
        {showIntro ? (
          <Intro onOkClick={handleOkClick} />
        ) : (
          <div>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Project />} />
            </Routes>
            <Routes>
              <Route path="/amazon" element={<Amazon />} />
              <Route path="/chatgpt" element={<Chatgpt />} />
              <Route path="/spotify" element={<Spotify />} />
              <Route path="/whatsapp" element={<Whatsapp />} />
              <Route path="/youtube" element={<Youtube />} />
            </Routes>
          </div>
        )}
      
    </div>
  );
}
