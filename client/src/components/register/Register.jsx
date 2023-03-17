import React, { useState, useEffect } from "react";
import "./register.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { createParticipant } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const participant = useSelector((state) => state.participant);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(createParticipant());
  }, []);

  const togglePassword = () => {
    setPassword(!password);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createParticipant(inputs));
    console.log(inputs);
    // alert(`${inputs.email.toUpperCase()} fue creado con exito`);
    setInputs({
      email: "",
      password: "",
    });
  };

  return (
    <div id="register" className="conteiner2">
      <div>
        <h1>Register</h1>
      </div>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="register-div">
          <label className="register-laber" htmlFor="email">
            Correo electrónico:
          </label>
          <input
            className="register-input"
            type="email"
            id="email"
            value={inputs.email}
            onChange={handleEmailChange}
            placeholder="ejemplo@gmail.com"
            required
          />
        </div>
        <div className="register-div">
          <label className="register-laber" htmlFor="password">
            Contraseña:
          </label>

          <input
            className="register-input"
            type={password ? "password" : "text"}
            onChange={handlePasswordChange}
            placeholder="••••••••"
            required
          />
          {password && (
            <AiOutlineEyeInvisible
              onClick={togglePassword}
              color="grey"
              size="30px"
              onMouseOut={({ target }) => (target.style.color = "grey")}
              cursor="pointer"
            />
          )}
          {!password && (
            <AiOutlineEye
              onClick={togglePassword}
              color="grey"
              size="30px"
              onMouseOut={({ target }) => (target.style.color = "grey")}
              cursor="pointer"
            />
          )}
        </div>
        <div className="register-div">
          <label className="register-laber" htmlFor="confirmPassword">
            Confirmar contraseña:
          </label>
          <input
            className="register-input"
            type="password"
            onChange={handleConfirmPasswordChange}
            placeholder="••••••••"
            required
          />
        </div>
        <button className="register-button" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
