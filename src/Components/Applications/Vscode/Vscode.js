import React from 'react'
import Home from "./home"
import "./Vscode.css"
import down  from "./Image/down-arrow-icon.png"
export default function Vscode() {
  return (
    <div>
      <div className='top-bar'>
        <ul className='list-left'>
          <li>Logo</li>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Go</li>
          <li>Run</li>
          <li>Terminal</li>
          <li>Help</li>
        </ul>
        <p>Abhinav Kumar - Visual Studio Code</p>
        <div>
          <button>minimize</button>
          <button>maximize</button>
          <button>close</button>
        </div>
      </div>
      <div className='main-wrapper'>
        
      <div className='left-bar'>

      </div>
      <div className='left-main'>
        <img id='down' src={down}></img><label>Portfolio</label>
          <div className='file-box'>
              <p>home.jsx</p>
              <p>about.html</p>
              <p>contact.css</p>
              <p>project.js</p>
          </div>
         
      </div>
      <div className='main'>
        <Home></Home>
      </div>
      
      </div>
    </div>
  )
}
