import React from "react";

import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";

const Nav = () => {
  return (
    <div className="nav">
      <img src={logo} alt="Netflix" className="nav__logo" />

      <img src={avatar} alt="Avatar" className="nav__avatar" />
    </div>
  );
};

export default Nav;
