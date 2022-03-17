import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName, userDescription, userAvatar]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar-edit"
          type="button"
          aria-label="обновить аватар"
          onClick={props.onEditAvatar}
        >
          <img
            alt={`Аватар пользователя ${userName}`}
            src={userAvatar}
            className="profile__avatar"
          />
        </button>
        <div className="profile__info">
          <div className="profile__data">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="кнопка редактирования"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить профиль"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
      <div className="modal modal-confirm">
        <div className="modal__inner">
          <form className="form">
            <button
              className="modal__close"
              type="button"
              aria-label="закрытие попап"
            ></button>
            <h2 className="modal__title">Вы уверены?</h2>
            <button className="modal__submit" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Main;
