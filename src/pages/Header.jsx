import React from "react";
import "./header.css"
import { Link } from "react-router-dom";



function Header() {
  return (
    <header>
      <h1>re:educate</h1>
      <nav>
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
        <button>dark mode</button>
      </nav>
    </header>
  );
}

export default Header;
