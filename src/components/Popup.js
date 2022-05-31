import React, { useEffect } from "react";

function Popup(props) {
  const [isOpen, onClose] = [props.isOpen, props.onClose];
  useEffect(() => {
    if (!isOpen) return;
    const handleEscapeClose = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`modal popup_type_${props.name} ${isOpen && "modal_active"}`}
      onMouseDown={(event) =>
        event.target.classList.contains("modal") && onClose()
      }
    >
      <div className="modal__inner">
        {props.children}
        <button
          name="close-button"
          type="button"
          className="modal__close"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default Popup;
