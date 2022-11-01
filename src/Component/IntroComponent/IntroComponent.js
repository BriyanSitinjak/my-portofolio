import React from "react";
import "./IntroComponent.scss";

const IntroComponent = () => {
  return (
    <div className="introComp">
        <div className="intro-left">
            <div className="intro-name">
                <span>Hy! I Am</span>
                <span>Briyan Sitinjak</span>
                <span>Frontend Developer with high level of interest web designing and development</span>
            </div>
            <button className="button intro-btn">
                Hire Me
            </button>
        </div>
        <div className="intro-right">
            Right side
        </div>
    </div>
  )
}

export default IntroComponent