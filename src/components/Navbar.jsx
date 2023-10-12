import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
    <div className="navbar">
        <div className="navbar-links">
          <Link className="link_to" to="/login">Login</Link>
        </div>
      </div>
    );
}

export default Navbar;