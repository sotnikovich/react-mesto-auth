import React from "react";

function MobileNav(props) {
  return (
    <>
      <p className="header__element header__element_mobile">{props.email}</p>
      <button
        onClick={props.onLogOut}
        className="header__close header__close_mobile hover"
      >
        Выйти
      </button>
    </>
  );
}

export default MobileNav;
