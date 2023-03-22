import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
// import Logo from "./Logo";
import { FaHome} from 'react-icons/fa';

/*
const Navigation = () => {
    return (
      <div className="navbar">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="#cover">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
            <Link href="Arshiya_Khattak__Resume_.pdf">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

*/
const Navigation = () => {
  return (
    <div className="navbar">
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#cover">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
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