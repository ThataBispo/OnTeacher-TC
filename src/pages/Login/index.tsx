import { useState } from "react";

import background from "../../assets/images/Background.png";
import logo from "../../assets/images/logo.png";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import purpleHeart from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/landing");
  }

  return (
    <div id="page-login">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="logo-container">
          <h2>Sua plataforma de estudos online</h2>
        </div>
      </div>
      <main>
        <form onSubmit={handleNavigation}>
          <div className="logo-form">
            <h1 className="form-title">Seja Bem Vindo ao</h1>
            <img src={logo} alt="Proffy" className="logo" />
          </div>

          <Input name="email" placeholder="E-mail" />
          <PasswordInput name="password" placeholder="Password" />
          <div className="remember-forgot-container">
            <div className="remember-container">
              <input id="remember-me" type="checkbox" />
              <label className="remember-me-label" htmlFor="remember-me">
                Lembre-me
              </label>
            </div>

            <Link to="/forgot-password" className="forgot-password">
              Esqueci minha senha
            </Link>
          </div>

          <button type="submit">Entrar</button>
        </form>

        <footer>
          <div className="logon-container">
            <span>Não tem conta?</span>
            <Link to="/logon" className="register">
              Cadastre-se
            </Link>
          </div>

          <span className="for-free">
            É de graça.
            <img src={purpleHeart} alt="" />
          </span>
        </footer>
      </main>
    </div>
  );
}
