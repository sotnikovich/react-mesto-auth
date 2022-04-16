import PopupWithForm from "./PopupWithForm";
import successImage from "../images/success.svg";
import failImage from "../images/fail.svg";

function InfoTooltip(props) {
  if (props.failed) {
    return (
      <PopupWithForm
        isOpen={props.isOpen}
        onClose={props.onClose}
        submitted={props.submitted}
        name="popup__form"
      >
        <img src={failImage} className="popup__infotool-image" alt="провал" />
        <h2 className={`form-heading popup__form-heading_centered`}>
          Что-то пошло не так! Попробуйте ещё раз.
        </h2>
      </PopupWithForm>
    );
  } else {
    return (
      <PopupWithForm
        isOpen={props.isOpen}
        onClose={props.onClose}
        submitted={props.submitted}
        name="popup__form"
      >
        <img src={successImage} className="popup__infotool-image" alt="успех" />
        <h2 className={`form-heading popup__form-heading_centered`}>
          Вы успешно зарегистрировались!
        </h2>
      </PopupWithForm>
    );
  }
}

export default InfoTooltip;
