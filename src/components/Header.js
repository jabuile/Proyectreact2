import React from "react";
import NavBar from "./NavBar";
import '../SCSS/Header.scss'


function Header (){
    return (
    <header className="Header">
        <img  src="/logo2.jpg" alt="" />
        
      
        <NavBar/>
    </header>
    
    
    )

};

export default Header