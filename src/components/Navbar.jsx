// src/components/Navbar.js
import React from "react";
import App from "../App";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/"><div className="navbar-head">SpaceNews </div></a>
      <ul className="navbar-elements">
        <h2><a  href="/">Home</a> </h2>
        <h2><a  href="#">Stories</a></h2>
        <h2><a  href="#">Space </a></h2>
        <h2><a  href="#">Live TV</a></h2>
      </ul>

      <div className="search">
        <input className="searchbox" type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
