import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [props.isOpen, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="modal__input"
        id="nameInput"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        autoComplete="off"
        value={name || ""}
        onChange={handleChangeName}
      />
      <span className="modal__error" id="nameInputError"></span>
      <input
        className="modal__input"
        id="jobInput"
        name="about"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
        autoComplete="off"
        value={description || ""}
        onChange={handleChangeDescription}
      />
      <span className="modal__error" id="jobInputError"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
