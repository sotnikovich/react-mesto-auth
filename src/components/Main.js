import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

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
            alt={`Аватар пользователя ${currentUser.name}`}
            src={currentUser.avatar}
            className="profile__avatar"
          />
        </button>
        <div className="profile__info">
          <div className="profile__data">
            <h1 className="profile__title">{currentUser.name}</h1>
            <p className="profile__subtitle">{currentUser.about}</p>
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
        {props.cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
