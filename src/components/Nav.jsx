import React, { useEffect, useState } from "react";

import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";

import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

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
      <img src={logo} alt="Netflix" className="nav__logo" />

      <a href="https://github.com" target="_blank" rel="noreferrer noopener">
        <img src={avatar} alt="Avatar" className="nav__avatar" />
      </a>
    </div>
  );
};

export default Nav;
