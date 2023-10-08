import React from "react";
import "../Hero/Hero.scss";
import banner from "../../Assets/right-mobile.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="left">
          <h3>Send Confidential Messages Anonymously On The Internet</h3>
          <p>
            Anonyms is an interactive anonymous messaging app with a dare game.
            Create your Profile Link and Send it to all your contacts to check
            what do your friends think about you. With the help of anonyms, you
            can send and recieve anonymous compliments easily for free!
          </p>

          <div className="get-start"> Get Started</div>
        </div>
        <div className="right">
          <img src={banner} width={250} alt="home-banner-phone-anonymous" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
