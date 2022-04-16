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
        name="infotool"
      >
        <img src={failImage} className="modal__infotool-img" alt="провал" />
        <h2 className={`modal__title`}>
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
        name="infotool"
      >
        <img src={successImage} className="modal__infotool-img" alt="успех" />
        <h2 className={`modal__title`}>Вы успешно зарегистрировались!</h2>
      </PopupWithForm>
    );
  }
}

export default InfoTooltip;
