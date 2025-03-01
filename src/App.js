import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from './component/Header'
import Projects from './component/Projects'
import Footer from './component/Footer'
import Contact from './component/contact'
import About from './component/About'
import Hero from './component/Hero'
import Work from './component/Work'
import AboutSection from './component/AboutSection'
import Cart from './component/Cart'


function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Router>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
      <AboutSection/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
