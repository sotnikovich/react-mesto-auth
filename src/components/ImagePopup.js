import React from "react";

function ImagePopup(props) {
  return (
    <div onClick={props.onClose}>
      <div
        className={`modal modal-img ${
          props.card && props.isOpen ? "modal_active" : {}
        }`}
      >
        <div className="modal-img__container">
          <button
            className="modal__close"
            type="button"
            aria-label="закрытие попап"
            onClick={props.onClose}
          ></button>
          <img
            className="modal__img"
            src={props.card.link}
            alt={props.card.name}
          />
          <p className="modal__caption">{props.card.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
