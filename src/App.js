import React from 'react'
import Header from './component/Header'
import Projects from './component/Projects'
import Footer from './component/Footer'
import Contact from './component/contact'
import About from './component/About'
import Hero from './component/Hero'
import Work from './component/Work'


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Work/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
