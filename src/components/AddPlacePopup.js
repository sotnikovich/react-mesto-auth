import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    props.onAddPlace({
      name: name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="placeInput"
        className="modal__input"
        name="title"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        autoComplete="off"
        value={name}
        onChange={handleChangeName}
      />
      <span className="modal__error" id="placeInputError"></span>
      <input
        id="linkInput"
        type="url"
        className="modal__input"
        name="link"
        placeholder="Ссылка на картинку"
        required
        autoComplete="off"
        value={link}
        onChange={handleChangeLink}
      />
      <span className="modal__error" id="linkInputError"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
