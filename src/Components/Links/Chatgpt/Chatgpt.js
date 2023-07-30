import React from 'react'
import "./Chatgpt.css"
import sidebar_icon from "./Images/sidebar_icon.png"
export default function Chatgpt() {
  return (
    <div>
      <div id='wrapper1'>
          <div id='sidebar'>
                <div id='btn-container'>
                  <button id='newchat'>&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp; New chat</button>
                  <button id='close'><img id='sidebar_icon' src={sidebar_icon}/></button>
                </div>
          </div>
          <div id='mainpage'>
          </div>
      </div>
    </div>
  )
}
