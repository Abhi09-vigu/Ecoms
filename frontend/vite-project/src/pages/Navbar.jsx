import React from "react";
import {Link} from "react-router-dom"
function Navbar(){
       return(
        <>
        <h1 className="border-1 w-14 ml-4 mt-4 animate-bounce bg-blue-600 text-white font-bold flex justify-center"><Link to="/">HOME</Link></h1>
        <h1 className="border-1 w-14 ml-4 mt-4 animate-bounce bg-blue-600 text-white font-bold flex text-center justify-center"><Link to="/login">Login</Link></h1>
        </>
        
       )
}

export default Navbar;