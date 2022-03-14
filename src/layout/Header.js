import React from "react";
import logo from '../logo.svg';
import {
  Link
} from "react-router-dom";

function Header(){
    return(
        <header>
     <nav
        className=" flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-zinc-300 mb-10"
      >
       <div>
         <Link exact="true" to="/">
          
          <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
         
          </Link>
        </div>
       
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"
          >
            <li>
               <Link className="md:p-4 py-2 block hover:text-purple-400" exact="true" to="/">Home</Link>
            </li>
            <li>
               <Link className="md:p-4 py-2 block hover:text-purple-400" exact="true" to="about">About Us</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" exact="true" to="create">Create</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" exact="true" to="read">Read</Link>
            </li>
            
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" exact="true" to="update">Update</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" exact="true" to="/">Home</Link>
            </li>
            <li>
            <Link className="md:p-4 py-2 block hover:text-purple-400"  exact="true" to="contact">Contact Us</Link>
            </li>
            
          </ul>
        </div>
    </nav>
  </header>
    )
}

export default Header;