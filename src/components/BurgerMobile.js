import React from "react";
import MobileNav from "./MobileNav";

function BurgerMobile(props) {
  const className = `header__popup ${
    props.isOpen ? "header__popup_active" : ""
  }`;
  return (
    <>
      <section className={className} id={props.id}>
        <MobileNav email={props.email} onLogOut={props.onLogOut}></MobileNav>
      </section>
    </>
  );
}

export default BurgerMobile;
