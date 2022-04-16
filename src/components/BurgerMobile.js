import React from "react";
import MobilenNav from "./MobileNav";

function BurgerMobile(props) {
  const className = `header__popup ${
    props.isOpen ? "header__popup_opened" : ""
  }`;
  return (
    <>
      <section className={className} id={props.id}>
        <MobilenNav email={props.email} onLogOut={props.onLogOut}></MobilenNav>
        <button
          onClick={props.onClose}
          className="modal__close"
          type="button"
        ></button>
      </section>
    </>
  );
}

export default BurgerMobile;
