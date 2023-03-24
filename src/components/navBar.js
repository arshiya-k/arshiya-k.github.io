import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className="navbar">
      <div className="flex-none">
      <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`menu menu-horizontal px-1 ${showMenu ? 'show' : ''}`}>
          <li>
            <Link href="#cover">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li className="resume-link">
          <Link href="Arshiya_Khattak__Resume_.pdf" target="_blank">Resume</Link>
          </li>
        </ul>
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="Arshiya_Khattak__Resume_.pdf" target="_blank">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;