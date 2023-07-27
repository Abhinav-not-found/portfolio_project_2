import React from 'react'
import "./Intro.css"
import { Link } from 'react-router-dom'
export default function Intro({onOkClick}) {
  return (
    <div>
        <section class="cd-intro">
            <div class="cd-intro-content bouncy">
                <h1>Welcome to my browser</h1>
                {/* <p>A collection of text effects for the intro section of your website</p> */}
                <div class="action-wrapper">
                    <Link to="/" onClick={onOkClick} class="cd-btn main-action">OK</Link>
                    
                </div>
            </div>
        </section>
    </div>
  )
}
