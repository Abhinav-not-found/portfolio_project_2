import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import Ninedots_icon from './Images/nine-dots.svg';
import Profile_pic from './Images/Profilepic.jpg';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [pro, setPro] = useState(false);
  const [dot, setDot] = useState(false);

  const dotRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dot-info if clicked outside
      if (dotRef.current && !dotRef.current.contains(event.target)) {
        setDot(false);
      }

      // Close profile-info if clicked outside
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setPro(false);
      }
    };

    // Attach the event listener
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setPro(!pro); 
  };

  const handleDotClick = () => {
    setDot(!dot); 
  };

  return (
    <div>
      <nav id="nav">
        <ul id="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li>Images</li>
          <li onClick={handleDotClick} ref={dotRef}>
            <img id="nine_dots" src={Ninedots_icon} alt="nine dots" />
          </li>
          <li id="profile" onClick={handleProfileClick} ref={profileRef}>
            <img alt="avatar" src={Profile_pic} />
          </li>
        </ul>
      </nav>
      <div className={`dot-info ${dot ? 'dot' : ''}`}>
        hello there
      </div>
      <div className={`profile-info ${pro ? 'pro' : ''}`}>
        hello
      </div>
    </div>
  );
}
