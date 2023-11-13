import logoImg from "../../assets/images/logo.png";

import "./styles.css";

export function LoginTeacher() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Seja Bem-Vindo Ao</span>
            <span className="login-form-title">
              <img src={logoImg} alt="OnTeacher" />
            </span>

            <div className="wrap-input">
              <input className="input" type="email" />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input className="input" type="password" />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn"></div>
            <button className="login-form-btn">Acessar</button>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>

              <a className="txt2" href="#">
                Criar conta.
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
