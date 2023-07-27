import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Google/Home'
import Project from './Components/Projects/Project'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
      </Routes>

    </div>
  )
}
