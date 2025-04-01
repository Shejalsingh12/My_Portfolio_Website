
import React from 'react'
import  Skills from "./Components/Skills.jsx"
import Projects from "./Components/Projects.jsx"
import Footer from "./Components/footer.jsx"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Education from "./Components/Education.jsx"
import Experience from "./Components/Experience.jsx"


function App() {
  

  return <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <Education/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Footer/>
    
    
   
  </div>
  }
export default App
