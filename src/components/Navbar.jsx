import React from 'react';
import {  Link } from "react-router-dom";
import "../Style/Navbar.css";
import emailIcon from "../Icons/gmail.png";

export default function Navbar() {
  const resumeUrl="https://drive.google.com/file/d/1b8rxOs0vrc-Hxk6dX9syNJEu2jUKHrLo/view?usp=sharing";
  const emailAddress="siddharthsingh002018@gmail.com";
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Siddharth Singh
      </a>
      <button className="hamburger">
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a  href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">
              <img className="image1"src={emailIcon} alt="email" />
            </a>
          </li>
          <li>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}