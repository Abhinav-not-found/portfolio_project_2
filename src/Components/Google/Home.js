import React, { useState, useRef, useEffect } from 'react'
import "./Home.css"
import google_img from './images/google.png'
import search from './images/search-icon.png'
import mic from './images/google_mic_icon.png'
import amazon_icon from "./images/amazon_icon.png"
import youtube_icon from "./images/youtube_icon.png"
import whatsapp_icon from "./images/whatsapp_icon.png"
import spotify_icon from "./images/spotify_icon.png"
import more_icon from "./images/more_icon.png"
import chatgpt_icon from "./images/chatgpt_icon.png"
import { Link } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import clock_icon from './images/clock_icon.png'


export default function Home() {

  const [showSug,setShowSug]= useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        !event.target.classList.contains('sugg-element-1') // Exclude sugg-element-1 from the event
      ) {
        setShowSug(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const handleInputFocus = () => {
    setShowSug(true);
  };
  
  return (
    <div>
      <Navbar></Navbar>
      <div id='wrapper'>

          <img id='google' src={google_img}/>
          <div id='search'>
            <img id='search-icon' src={search}/>
            <input id='input' ref={inputRef} placeholder='Search Google or type a URL' type='search' onFocus={handleInputFocus}></input>
            <img id='mic-icon' src={mic}/>
          </div>
          <div className={`suggestions ${showSug?"showsug":""}`}>

            <Link to='/page'>
              <div className='sugg-element-1'>
                <img id='clock-icon' src={clock_icon} alt="" />
                <p className='op'>What are your skills?</p>
              </div>
            </Link>
       
            

            <a href="#">
              <div className='sugg-element'>
                <img id='clock-icon' src={clock_icon} alt="" />
                <p className='op'>Question2</p>
              </div>
            </a>
            <a href="#">
              <div className='sugg-element'>
                <img id='clock-icon' src={clock_icon} alt="" />
                <p className='op'>Question3</p>
              </div>
            </a>
            <a href="#">
              <div className='sugg-element'>
                <img id='clock-icon' src={clock_icon} alt="" />
                <p className='op'>Question4</p>
              </div>
            </a>

          </div>
          <div id='links'>
            <Link to="/amazon"><div className='link-containers'><img className='icons' src={amazon_icon}/><p>Amazon</p></div></Link>
            <Link to="/chatgpt"><div className='link-containers'><img className='icons' src={chatgpt_icon}/><p>Chatgpt</p></div></Link>
            <Link to="/spotify"><div className='link-containers'><img className='icons' src={spotify_icon}/><p>Spotify</p></div></Link>
            <Link to="/whatsapp"><div className='link-containers'><img className='icons' src={whatsapp_icon}/><p>Whatsapp</p></div></Link>
            <Link to="/youtube"><div className='link-containers'><img className='icons' src={youtube_icon}/><p>Youtube</p></div></Link>
            <div className='link-containers'>
                <img className='icons' src={more_icon}/><p>More</p>
            </div>
          </div>
      </div>
    </div>
  )
}
