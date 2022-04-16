import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import * as auth from "../utils/auth";
import FieldSet from "./FieldSet";

function Login(props) {
  const [values, setValues] = React.useState({ email: "", password: "" });
  const history = useHistory();
  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    auth.authorize(values.email, values.password).then((res) => {
      if (res.token) {
        setValues({ email: "", password: "" });
        props.onLogin();
        history.push("/");
      } else if (res.message || res.error) {
        props.onFail();
      }
    });
  }
  return (
    <form className="register" onSubmit={handleSubmit}>
      <FieldSet
        onClose={props.onClose}
        onSubmit={handleSubmit}
        title="Вход"
        name="register"
        button="Войти"
      >
        <input
          name="email"
          placeholder="Email"
          type="email"
          className="register__input"
          value={values.email || ""}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Пароль"
          type="password"
          className="register__input"
          value={values.password || ""}
          onChange={handleChange}
        />
      </FieldSet>
    </form>
  );
}
export default withRouter(Login);
