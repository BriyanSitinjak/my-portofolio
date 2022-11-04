import React from "react";
import "./IntroComponent.scss";

import GithubIcon from "../../img/github.png";
import LinkedinIcon from "../../img/linkedin.png";
import InstagramIcon from "../../img/instagram.png";

const IntroComponent = () => {
  return (
    <div className="introComp">
        <div className="intro-left">
            <div className="intro-name">
                <span>Hii! I Am</span>
                <span>Briyan Sitinjak</span>
                <span>Frontend Developer with high level of interest web designing and development</span>
            </div>
            <button className="button intro-btn">
                Hire Me
            </button>
            <div className="intro-icons">
                <img src={GithubIcon} alt=""></img>
                <img src={LinkedinIcon} alt=""></img>
                <img src={InstagramIcon} alt=""></img>
            </div>
        </div>
        <div className="intro-right">
            Right side
        </div>
    </div>
  )
}

export default IntroComponent