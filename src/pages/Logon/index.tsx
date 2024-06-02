import background from "../../assets/images/Background.png";
import backIcon from "../../assets/images/icons/back.svg";
import logo from "../../assets/images/logo.png";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";

import "./styles.css";
import { useNavigate } from "react-router-dom";

export function Logon() {
  const navigation = useNavigate();

  function handleNavigation() {
    navigation("/");
  }

  return (
    <div id="page-logon">
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
        <img
          className="go-back"
          onClick={handleNavigation}
          src={backIcon}
          alt="Voltar"
        />
        <form>
          <div className="title-container">
            <h1 className="form-title">Cadastre-se no</h1>
            <img src={logo} alt="Proffy" className="logo" />
          </div>

          <Input name="first_name" placeholder="Nome" />

          <Input name="last_name" placeholder="Sobrenome" />

          <Input name="email" placeholder="E-mail" />

          <PasswordInput name="password" placeholder="Senha" />

          <button type="submit">Concluir Cadastro</button>
        </form>
      </main>
    </div>
  );
}
