import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'  
import Techstack from './components/Techstack'
import ProjectSection from './components/ProjectSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Education/>
      <Techstack/>
      <ProjectSection/>
      <Contact/>
      <Footer/>
    </div>
  )
} 

export default App