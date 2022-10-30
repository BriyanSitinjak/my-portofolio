import React from "react";
import "./NavbarComponent.scss";

const NavbarComponent = () => {
  return (
    <div className="navComp">
        <div className="nav-left">
            <div className="nav-name">Briyan Sitinjak</div>
            <span>Toggle</span>
        </div>
        <div className="nav-right">
          <div className="nav-list">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Experience</li>
              <li>Portofolio</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <button className="button nav-btn">
            Contat Us
          </button>
        </div>
    </div>
  )
}

export default NavbarComponent