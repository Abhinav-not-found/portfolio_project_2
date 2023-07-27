import React from 'react'
import "./Navbar.css"
import Ninedots_icon from "./Images/nine-dots.svg"
import Profile_pic from "./Images/Profilepic.jpg"
export default function Navbar() {
  return (
    <div>
        <nav id='nav'>
            <ul id='list'>
                <li>Gmail</li>
                <li>Images</li>
                <li><img id='nine_dots' src={Ninedots_icon}/></li>
                <li id='profile'><img  alt='avtar' src={Profile_pic}/></li>
            </ul>
        </nav>
    </div>
  )
}
