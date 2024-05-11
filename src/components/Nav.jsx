import React, { useEffect, useState } from "react";

import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";

// CSS
import "./Nav.css";

// Nav
const Nav = () => {
  const [show, setShow] = useState(false);

  // navbar show/hide onscroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      {/* Brand Logo */}
      <img src={logo} alt="Netflix" className="nav__logo" />

      {/* Avatar */}
      <a
        href="https://github.com/sanidhyy/netflix-clone"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={avatar} alt="Avatar" className="nav__avatar" />
      </a>
    </div>
  );
};

export default Nav;
