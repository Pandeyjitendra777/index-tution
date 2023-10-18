import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav>

        <div className="container">
          <div className="main-header">
            <div className="header-logo">
              <a href="#" className="">
                <img src="" />
              </a>
            </div>
            <div className="header-menus">
              <ul>
                <Link to="/home">Home</Link>
                <br />
                <Link to="/about_us">About Us</Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
