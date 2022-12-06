import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
    <div className="navbar">
        <div className="navbar-links">
          <Link className="link_to" to="/login">Login</Link>
          <Link className="link_to" to="/posts">Posts</Link>
          <Link className="link_to" to="/news">News</Link>
          <Link className="link_to" to="/profile">Profile</Link>
        </div>
      </div>
    );
}

export default Navbar;