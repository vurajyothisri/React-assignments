import React from "react"
import { Link } from "react-router-dom";
import './style.css'
const Navbar=()=>{

    return(
        <nav className="navbar">
           <ul className="nav_container" >
            
         <li className="items">
            
         <Link to="/" className="colorchange">Search Name  </Link></li>
      
       
        <li className="items">
            
        <Link to="/searchid" className="colorchange">Search id</Link></li>
       
            </ul>
        </nav>
    )
}
export default Navbar