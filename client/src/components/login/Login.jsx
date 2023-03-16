import React, { useState } from "react";
import "./login.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setPassword(!password);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div id="login">
      <div className="conteiner-login">
        <div className="content-text">
          <div>
            <h1>Login</h1>
          </div>
          <form className="login-form">
            <div className="login-div">
              <label className="login-label" htmlFor="email">
                Correo electrónico:{" "}
              </label>
              <input
                className="login-inputs"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="ejemplo@gmail.com"
                required
              />
            </div>
            <div className="login-div">
              <label className="login-label" htmlFor="password">
                Contraseña:{" "}
              </label>
              <input
                className="login-inputs"
                type={password ? "password" : "text"}
                placeholder="••••••••"
                onChange={handlePasswordChange}
                required
              />
              {password && (
                <AiOutlineEyeInvisible
                  onClick={togglePassword}
                  color="grey"
                  size="30px"
                  onMouseOut={({ target }) => (target.style.color = "black")}
                  cursor="pointer"
                />
              )}
              {!password && (
                <AiOutlineEye
                  onClick={togglePassword}
                  color="grey"
                  size="30px"
                  onMouseOut={({ target }) => (target.style.color = "black")}
                  cursor="pointer"
                />
              )}
            </div>
            <button className="login-button" type="submit">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
