import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './Portfolio/portfolio'
import Navbar from './Portfolio/Navbar'
import Contact from './Portfolio/Contact'
import Resume from './Portfolio/Resume'
import Project from './Portfolio/Project'
import CV from './Portfolio/CV'

function App() {

  return (
   <div>
    {/* <Navbar/>
    <Portfolio/>
    <Contact/>
    <Resume/>
    <Project/> */}
    <CV/>
   </div> 
  )
}

export default App
