import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'  
import Techstack from './components/Techstack'
import ProjectSection from './components/ProjectSection'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Education/>
      <Techstack/>
      <ProjectSection/>
    </div>
  )
} 

export default App