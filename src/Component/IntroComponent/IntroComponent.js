import React from "react";
import "./IntroComponent.scss";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

import GithubIcon from "../../img/github.png";
import LinkedinIcon from "../../img/linkedin.png";
import InstagramIcon from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import GlassEmoji from "../../img/glassesimoji.png";


const IntroComponent = () => {
  return (
    <div className="introComp">
        <div className="intro-left">
            <div className="intro-name">
                <span>Hi! I Am   </span>
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
            <img src={Vector1}/>
            <img src={Vector2}/>
            <img src={Boy}/>
            <div>
                <FloatingDiv image={Crown} />
            </div>
        </div>
    </div>
  )
}

export default IntroComponent