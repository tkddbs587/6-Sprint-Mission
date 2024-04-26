import React from "react";
import pandaLogo from "../image/panda_logo.svg";
import logo from "../image/logo.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav_left">
        <img className="panda_logo" src={pandaLogo} alt="판다로고"></img>
        <span>자유게시판</span>
        <h3>중고마켓</h3>
      </div>

      <img className="logo" src={logo} alt="상단로고"></img>
    </div>
  );
};

export default Nav;
