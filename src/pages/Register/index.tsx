import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";

import { Layout } from "../../components/Layout";
import { useState } from "react";

import "./styles.css";

export function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Layout>
      <form className="login-form">
        <span className="login-form-title">Criar Conta No</span>

        <span className="login-form-title">
          <img src={logoImg} alt="OnTeacher" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Name"></span>
        </div>

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
        <button className="login-form-btn">Acessar</button>

        <div className="text-center">
          <span className="txt1">Já possui conta?</span>

          <Link className="txt2" to="/Login">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </Layout>
  );
}
