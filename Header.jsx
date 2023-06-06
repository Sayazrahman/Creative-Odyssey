import React from 'react'
import { useState } from 'react';
export default function Header() {
  
  const handleScrollHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleScrollPotfolio = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth',
    });
  };
  const handleScrollSkills = () => {
    window.scrollTo({
      top: 2400,
      behavior: 'smooth',
    });
  };
  const handleScrollAbout = () => {
    window.scrollTo({
      top: 2850,
      behavior: 'smooth',
    });
  };
 
  const handleScrollContact = () => {
    window.scrollTo({
      top: 3700,
      behavior: 'smooth',
    });
  };
  
  return (
   <>
   
   <header className="header">
<nav className="navbar">
<ul>
<li onClick={handleScrollHome}>Home</li>
<li onClick={handleScrollPotfolio}>Potfolio</li>
<li onClick={handleScrollSkills}>Skills</li>
<h1 style={{margin: '20px',fontWeight: 'bolder'}}>Creative Odyssey</h1>
<li onClick={handleScrollAbout}>About</li>
<li onClick={handleScrollContact}>Contact me</li>
</ul>
</nav>

   </header>
   
   </>
  )
}
