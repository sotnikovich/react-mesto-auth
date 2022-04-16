import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import FieldSet from "./FieldSet";
import * as auth from "../utils/auth";

function Register(props) {
  const [values, setValues] = React.useState({ email: "", password: "" });
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    auth.register(values.email, values.password).then((res) => {
      if (res.data) {
        history.push("/signin");
        props.onRegister();
      } else if (res.message || res.error) {
        props.onFail();
      }
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <form className="register" onSubmit={handleSubmit}>
      <FieldSet title="Регистрация" name="register" button="Зарегистрироваться">
        <input
          name="email"
          placeholder="Email"
          type="email"
          className="register__input"
          onChange={handleChange}
          value={values.email || ""}
        />
        <input
          name="password"
          placeholder="Пароль"
          type="password"
          className="register__input"
          onChange={handleChange}
          value={values.password || ""}
        />
      </FieldSet>
      <p>
        Уже зарегистрированы?{" "}
        <Link to="/signin" className="register__login hover">
          Войти
        </Link>
      </p>
    </form>
  );
}
export default withRouter(Register);
