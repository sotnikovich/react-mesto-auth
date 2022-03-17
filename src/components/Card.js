import React from "react";

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <img
        onClick={handleCardClick}
        src={props.card.link}
        alt={props.card.name}
        className="element__img"
      />
      <div className="element__signature">
        <h2 className="element__caption">{props.card.name}</h2>
        <div className="element__button">
          <button
            className="element__like"
            type="button"
            aria-label="лайк"
          ></button>
          <p className="element__counter">{props.card.likes.length}</p>
        </div>
        <button
          className="element__delete"
          type="button"
          aria-label="удалить"
        ></button>
      </div>
    </article>
  );
}

export default Card;
