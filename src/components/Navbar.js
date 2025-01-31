import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='navbar-container'>
      {/* Top Navigation */}
      <nav className='navbar'>
        <div className='logo'>5paisa</div>

        {/* Hamburger Icon for Mobile View */}
        <div className='menu-icon' onClick={toggleMenu}>
          {isOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
        </div>

        <div className={`nav-wrapper ${isOpen ? 'show' : ''}`}>
          <ul className='nav-links'>
            <li>Invest</li>
            <li>Trade</li>
            <li>Platforms</li>
            <li>Pricing</li>
            <li>Markets</li>
            <li>Learn</li>
            <li>Partner</li>
          </ul>

          {/* Buttons */}
          <div className='buttons'>
            <button className='open-account-btn'>Open Demat Account</button>
            <button className='login-btn'>Log In</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
