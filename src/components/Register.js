import React from "react";
import { Link, withRouter } from "react-router-dom";

function Register({ onSubmit }) {
  const [values, setValues] = React.useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.email, values.password);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <div className="register">
      <h2 className="register__title">Регистрация</h2>
      <form className="register__container" name="form" onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          type="email"
          className="register__input"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          placeholder="Пароль"
          type="password"
          className="register__input"
          value={values.password || ""}
          onChange={handleChange}
          required
          minLength="4"
          maxLength="16"
        />
        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
        <Link to="/signin" className="register__login hover">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}
export default withRouter(Register);
