import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import burgerButton from "../images/burger-button.svg";

function NavBar(props) {
  const location = useLocation();

  return (
    <nav className="header__menu">
      <NavLink
        onClick={props.onChangeForm}
        className={`header__element hover ${
          location.pathname === "/signup" || location.pathname === "/"
            ? "header__element_hidden"
            : ""
        }`}
        to="/signup"
      >
        Регистрация
      </NavLink>

      <NavLink
        onClick={props.onChangeForm}
        className={`header__element hover ${
          location.pathname === "/signin" || location.pathname === "/"
            ? "header__element_hidden"
            : ""
        }`}
        to="/signin"
      >
        Войти
      </NavLink>
      {location.pathname === "/" ? (
        <p className="header__element">{props.email}</p>
      ) : (
        ""
      )}
      {location.pathname === "/" ? (
        <button
          onClick={props.onLogOut}
          className="header__close header__close_hidden hover"
        >
          Выйти
        </button>
      ) : (
        ""
      )}
      {location.pathname === "/" ? (
        <img
          onClick={props.onBurger}
          src={burgerButton}
          className="header__burger hover"
          alt="бургер"
        />
      ) : (
        ""
      )}
    </nav>
  );
}
export default NavBar;
