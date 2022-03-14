import React from "react";
import {
    Link
  } from "react-router-dom";

function Footer(){
    return(
        <div className="footer antialiased
        bg-gradient-to-r
        from-pink-300
        via-purple-300
        to-indigo-400 h-80">
            <h1 className="text-2xl font-black text-center"><Link exact to='/'>Home</Link></h1>
        </div>
    )
}

export default Footer;