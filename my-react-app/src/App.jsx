import React from "react"
import {BrowserRouter as Router,Routes,Route,Outlet} from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Home from "./components/home/Home"
import About from "./components/about/About"
import Education from "./components/Education/Education"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"
const App = () => {
 

  return (
    <>
     <Router>
      <section>
       <NavBar/>
      </section>
      
        <Outlet></Outlet>
          
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contactus" element={<Contact/>}/>
      </Routes>

     </Router>
    </>
  )
}

export default App
