import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './Portfolio/Portfolio'
import Navbar from './Portfolio/Navbar'
import Contact from './Portfolio/Contact'
import Resume from './Portfolio/Resume'
import Project from './Portfolio/Project'
import CV from './Portfolio/CV'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './Portfolio/CV/Menu'
import Motion from './Practice/Motion'

function App() {

  return (
   <div>
    {/* <Navbar/>
    <Portfolio/>
    <Contact/>
    <Project/>
    <Resume/> */}
    {/* <CV/> */}
      {/* <Router>
        <Routes>
          <Route exact path='/' element={<Navbar/>}/>
          <Route exact path='/cv' element={<CV/>}/>
        </Routes>
      </Router> */}


      <Motion/>

   </div> 
  )
}

export default App
