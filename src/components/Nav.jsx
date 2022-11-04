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

      <img src={avatar} alt="Avatar" className="nav__avatar" />
    </div>
  );
};

export default Nav;
