import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmPopup from "./ConfirmPopup";
import BurgerMobile from "./BurgerMobile";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";
import Login from "./Login";
import InfoTooltip from "./InfoTooltip";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Switch, Route, useHistory } from "react-router-dom";
import * as auth from "../utils/auth";
import api from "../utils/api";
import { useState, useEffect } from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [deletedCard, setDeletedCard] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [fail, setFail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  const history = useHistory();
  const [email, setEmail] = useState("");

  function handleEditProfilePopupOpen() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlacePopupOpen() {
    setAddPlacePopupOpen(true);
  }
  function handleEditAvatarPopupOpen() {
    setEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function handleInfoTooltipOpen() {
    setIsInfoTooltipOpen(true);
    setSubmitted(true);
  }

  function handleBurgerClick() {
    setIsBurgerOpen(true);
  }

  function handleUpdateAvatar(data) {
    api
      .setUserAvatar(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, cards]) => {
        setCurrentUser(data);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        );
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(e) {
    e.preventDefault();
    api
      .deleteCard(deletedCard._id)
      .then(() => {
        const newCards = cards.filter((item) => item !== deletedCard);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDeleteRequest(card) {
    setDeletedCard(card);
    setConfirmPopupOpen(true);
  }

  function handleAddPlaceSubmit(data) {
    api
      .addNewCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
    setConfirmPopupOpen(false);
    setSelectedCard({});
  }

  function handleLogin() {
    handleTokenCheck();
  }

  function handleLogOut() {
    localStorage.removeItem("token");
    history.push("/signin");
  }

  function handleTokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      auth.checkToken(token).then((res) => {
        if (res.data) {
          setLoggedIn(!loggedIn);
          setEmail(res.data.email);
          history.push("/");
        } else if (res.message) {
          return res.message;
        }
      });
    } else {
      return;
    }
  }

  function handleRegistrationFail() {
    setIsInfoTooltipOpen(!isInfoTooltipOpen);
    setSubmitted(!submitted);
    setFail(!fail);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          loggedIn={loggedIn}
          email={email}
          onLogOut={handleLogOut}
          onBurger={handleBurgerClick}
        />
        <BurgerMobile
          isOpen={isBurgerOpen}
          onClose={closeAllPopups}
          email={email}
          onLogOut={handleLogOut}
        ></BurgerMobile>
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            loggedIn={loggedIn}
            onEditProfile={handleEditProfilePopupOpen}
            onAddPlace={handleAddPlacePopupOpen}
            onEditAvatar={handleEditAvatarPopupOpen}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDeleteRequest}
            component={Main}
          >
            <Main />
            <Footer />
          </ProtectedRoute>
        </Switch>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <ConfirmPopup
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleCardDelete}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          submitted={submitted}
          failed={fail}
        ></InfoTooltip>
        <Route path="/signup">
          <Register
            onRegister={handleInfoTooltipOpen}
            onFail={handleRegistrationFail}
          />
        </Route>
        <Route path="/signin">
          <Login onLogin={handleLogin} onFail={handleRegistrationFail} />
        </Route>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
