import { useState } from "react";
import "../Navbar/Navbar.scss";
import { BiLogoAdobe } from "react-icons/bi";
import { LiaTimesSolid, LiaBarsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={scroll ? "nav-active" : "navbar"}>
      <div className="wrapper">
        <div className="logo">
          <BiLogoAdobe className="icon" />
          <p>Anonyms</p>
        </div>

        <div className={open ? "links-active" : "links"}>
          <div className="container">
            <LiaTimesSolid
              className="hamburger"
              onClick={() => setOpen(false)}
            />
            <p>Home</p>
            <a href="">Contact Us</a>
            <a href="">FAQs</a>
            <p>Get Started</p>
          </div>
        </div>

        <LiaBarsSolid className="hamburger" onClick={() => setOpen(true)} />
      </div>
    </div>
  );
};

export default Navbar;
