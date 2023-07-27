import React from 'react'
import "./Home.css"
import google_img from './images/google.png'
import search from './images/search-icon.png'
import mic from './images/google_mic_icon.png'

export default function Home() {
  return (
    <div>
      <div id='wrapper'>

          <img id='google' src={google_img}/>
          <div id='search'>
            <img id='search-icon' src={search}/>
            <input id='input' type='search'></input>
            <img id='mic-icon' src={mic}/>
          </div>
            <div id='test'>

            </div>
      </div>
    </div>
  )
}
