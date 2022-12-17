import React from "react";
import logo from '../images/air.png'


function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" className="header-logo"/>
    </div>
  );
}

export default Header;
