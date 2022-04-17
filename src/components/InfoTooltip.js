import successImage from "../images/success.svg";
import failImage from "../images/fail.svg";

function InfoTooltip(props) {
  if (props.failed) {
    return (
      <div
        submitted={props.submitted}
        className={`modal ${props.isOpen && "modal_active"}`}
      >
        <div className="modal__inner modal__infotool">
          <img src={failImage} className="modal__infotool-img" alt="провал" />
          <h2 className="modal__title">
            Что-то пошло не так! Попробуйте ещё раз.
          </h2>
          <button
            className="modal__close"
            type="button"
            aria-label="закрытие попап"
            onClick={props.onClose}
          ></button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        submitted={props.submitted}
        className={`modal ${props.isOpen && "modal_active"}`}
      >
        <div className="modal__inner modal__infotool">
          <img src={successImage} className="modal__infotool-img" alt="успех" />
          <h2 className="modal__title">Вы успешно зарегистрировались!</h2>
          <button
            className="modal__close"
            type="button"
            aria-label="закрытие попап"
            onClick={props.onClose}
          ></button>
        </div>
      </div>
    );
  }
}

export default InfoTooltip;
