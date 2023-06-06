import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <div className='header'>
        <div className='app-title'><Link to={"/"} className="header-links">Forsal Construction</Link></div>

        <div className='nav-links'>
          <div className='links'><Link to={"/"} className="header-links">Updates</Link></div>
          <div className='links'><Link to={"/"} className="header-links">About Us</Link></div>
          <div className='links'><Link to={"/"} className="header-links">Services</Link></div>
          <div className='links'><Link to={"/"} className="header-links">Gallery</Link></div>        
          <div className='links'><Link to={"/"} className="header-links">Contact Us</Link></div>        
          <div className='links'><Link to={"/"} className="header-links">Get Quote</Link></div>        
        
        </div>
      </div>
    )

}

export default Header;

