import React, { useState } from 'react'
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
export default function Home() {

  const [showSug,setShowSug]= useState(false)
  
  return (
    <div>
      <Navbar></Navbar>
      <div id='wrapper'>

          <img id='google' src={google_img}/>
          <div id='search'>
            <img id='search-icon' src={search}/>
            <input id='input' placeholder='Search Google or type a URL' type='search' onFocus={()=> setShowSug(true)} onBlur={()=>setShowSug(false)}></input>
            <img id='mic-icon' src={mic}/>
          </div>
          <div className={`suggestions ${showSug?"showsug":""}`}>
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
