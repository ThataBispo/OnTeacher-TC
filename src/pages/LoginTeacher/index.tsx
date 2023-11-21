import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logoImg from "../../assets/images/logo.png";
import { Layout } from "../../components/Layout";

import "./styles.css";

export function LoginTeacher() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const isAuthenticated = true;

    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      alert("Login falhou. Verifique suas credenciais.");
    }
  };

  return (
    <Layout>
      <form className="login-form">
        <span className="login-form-title">Seja Bem-Vindo Ao</span>
        <span className="login-form-title">
          <img src={logoImg} alt="OnTeacher" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn"></div>
        <button className="login-form-btn" onClick={handleLogin}>
          Acessar
        </button>

        <div className="text-center">
          <span className="txt1">Não possui conta?</span>

          <Link className="txt2" to="/register">
            Criar conta.
          </Link>
        </div>
      </form>
    </Layout>
  );
}
