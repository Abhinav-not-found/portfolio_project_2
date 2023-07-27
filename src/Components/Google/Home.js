import React, { useState } from 'react'
import "./Home.css"
import google_img from './images/google.png'
import search from './images/search-icon.png'
import mic from './images/google_mic_icon.png'

export default function Home() {

  const [showSug,setShowSug]= useState(false)
  
  return (
    <div>
      <div id='wrapper'>

          <img id='google' src={google_img}/>
          <div id='search'>
            <img id='search-icon' src={search}/>
            <input id='input' type='search' onFocus={()=> setShowSug(true)} onBlur={()=>setShowSug(false)}></input>
            <img id='mic-icon' src={mic}/>
          </div>
          <div className={`suggestions ${showSug?"showsug":""}`}>
          </div>
          {/* <div id='links'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
          </div> */}
      </div>
    </div>
  )
}
