import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditProfilePopupOpen() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlacePopupOpen() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarPopupOpen() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
      <div class="page">
        <Header />
        <Main
          onEditProfile={handleEditProfilePopupOpen}
          onAddPlace={handleAddPlacePopupOpen}
          onEditAvatar={handleEditAvatarPopupOpen}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          children={
            <>
              <input
                className="modal__input modal__input_type_name"
                id="nameInput"
                name="name"
                placeholder="Имя"
                value=""
                minLength="2"
                maxLength="40"
                required
                autoComplete="off"
              />
              <span className="modal__error" id="nameInputError"></span>
              <input
                className="modal__input modal__input_type_job"
                id="jobInput"
                name="job"
                placeholder="О себе"
                value=""
                minLength="2"
                maxLength="200"
                required
                autoComplete="off"
              />
              <span className="modal__error" id="jobInputError"></span>
            </>
          }
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="add"
          title="Новое место"
          children={
            <>
              <input
                id="placeInput"
                class="modal__input modal__input_type_title"
                name="title"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                value=""
                required
                autoComplete="off"
              />
              <span className="modal__error" id="placeInputError"></span>
              <input
                id="linkInput"
                type="url"
                class="modal__input modal__input_type_link"
                name="link"
                placeholder="Ссылка на картинку"
                value=""
                required
                autoComplete="off"
              />
              <span className="modal__error" id="linkInputError"></span>
            </>
          }
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          children={
            <>
              <input
                id="avaInput"
                type="url"
                className="modal__input"
                name="avatar"
                value=""
                required
                autoComplete="off"
              />
              <span className="modal__error" id="avaInputError"></span>
            </>
          }
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          children={<></>}
          buttonText="Да"
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
