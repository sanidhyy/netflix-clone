import { useEffect, useState } from "react";

import avatar from "../assets/avatar.png";
import logo from "../assets/logo.png";

import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <img src={logo} alt="Netflix" className="nav__logo" />

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
