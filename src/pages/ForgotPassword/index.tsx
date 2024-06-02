import background from "../../assets/images/Background.png";
import backIcon from "../../assets/images/icons/back.svg";
import logo from "../../assets/images/logo.png";
import Input from "../../components/Input";

import "./styles.css";
import { useNavigate } from "react-router-dom";

export function ForgotPassword() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }

  return (
    <div id="page-forgot-password">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
      </div>

      <main>
        <img className="go-back" onClick={goBack} src={backIcon} alt="Voltar" />
        <form>
          <div className="title-container">
            <h1 className="form-title">
              Eita, esqueceu <br /> sua senha?
            </h1>
            <span className="subtitle">
              Não esquenta, vamos dar um jeito nisso.
            </span>
          </div>

          <Input name="email" placeholder="E-mail" />

          <button type="submit">Enviar</button>
        </form>
      </main>
    </div>
  );
}
