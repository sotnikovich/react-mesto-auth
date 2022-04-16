import React from "react";

function FieldSet(props) {
  if (props.submitted) {
    return (
      <>
        <fieldset className={`${props.name}__container`}>
          {props.children}
        </fieldset>
        <button
          onClick={props.onClose}
          className="modal__close"
          type="button"
        ></button>
      </>
    );
  } else {
    return (
      <>
        <fieldset className={`${props.name}__container`}>
          <h2 className={`${props.name}__title`}>{props.title}</h2>
          {props.children}
          <button className={`${props.name}__button`} type="submit">
            {props.button}
          </button>
        </fieldset>
        <button
          onClick={props.onClose}
          className="modal__close"
          type="button"
        ></button>
      </>
    );
  }
}

export default FieldSet;
