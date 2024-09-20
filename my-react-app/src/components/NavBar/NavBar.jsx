import React from "react"
import { NavLink } from "react-router-dom"
import Home from "../home/Home"
import About from "../about/About"
import Education from "../Education/Education"
import Skills from "../Skills/Skills"
import Contact from "../Contact/Contact"
const NavBar = ()=>{

    return(
        <>
    
        <section className="navContainer">

            <h1 className="font-bold" style={{fontSize : "2.5rem"}}>Logo</h1>
           <div className="bx bx-menu" id="menu-icon"></div>
            <nav className="navList">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/about">ABOUT</NavLink>
              <NavLink to="/education">EDUCATION</NavLink>
              <NavLink to="/skills">SKILLS</NavLink>
              <NavLink to="/contactus">CONTACT</NavLink>
            </nav>
           
        </section>
          

        </>
    )
}
export default NavBar