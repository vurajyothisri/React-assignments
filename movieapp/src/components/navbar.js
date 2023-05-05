import React from "react"

import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav>
           <ul>
       <Link to="/">
        <li>Search Name</li>
       </Link>
       <Link to="/searchid">
        <li>Search id</li>
       </Link>
            </ul>
        </nav>
    )
}
export default Navbar