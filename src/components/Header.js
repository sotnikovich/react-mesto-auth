import React from "react";
import logo from "../images/logo.svg";
import NavBar from "./NavBar";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <NavBar
        loggedIn={props.loggedIn}
        email={props.email}
        onLogOut={props.onLogOut}
        onBurger={props.onSettings}
      ></NavBar>
    </header>
  );
}

export default Header;
