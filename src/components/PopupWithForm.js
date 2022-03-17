import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`modal modal-${props.name} ${props.isOpen && "modal_active"}`}
    >
      <div className="modal__inner">
        <h2 className="modal__title">{props.title}</h2>
        <button
          className="modal__close"
          type="button"
          aria-label="закрытие попап"
          onClick={props.onClose}
        ></button>
        <form className="form" name={props.name} noValidate>
          {props.children}
          <button className="modal__submit" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
