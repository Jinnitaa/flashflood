import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css'; 

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="logo"><img src="logo (2).png"></img></div>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
     
    </nav>
  );
};

export default Navbar;