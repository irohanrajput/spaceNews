// src/components/Navbar.js
import React from "react";
import App from "../App";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-head">SpaceNews </div>
      <ul className="navbar-elements">
        <li><a href="Home">Home</a> </li>
        <li><a href="Stories">Stories</a></li>
        <li><a href="Space">Space </a></li>
        <li><a href="live-TV">Live TV</a></li>
      </ul>

      <div className="search">
        <input className="searchbox" type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
