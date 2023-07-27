import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Google/Home'
import Project from './Components/Projects/Project'
import { Routes, Route } from 'react-router-dom'
import Amazon from "./Components/Links/Amazon/Amazon"
import Chatgpt from "./Components/Links/Chatgpt/Chatgpt"
import Spotify from "./Components/Links/Spotify/Spotify"
import Whatsapp from "./Components/Links/Whatsapp/Whatsapp"
import Youtube from "./Components/Links/Youtube/Youtube"
export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
      </Routes>
      <Routes>
        <Route path='/amazon' element={<Amazon/>}></Route>
        <Route path='/chatgpt' element={<Chatgpt/>}></Route>
        <Route path='/spotify' element={<Spotify/>}></Route>
        <Route path='/whatsapp' element={<Whatsapp/>}></Route>
        <Route path='/youtube' element={<Youtube/>}></Route>
      </Routes>
    </div>
  )
}
