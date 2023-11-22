import { useState } from "react";

import logo from "../../assets/images/logo.png";
import landing from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import teachIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeart from "../../assets/images/icons/purple-heart.svg";
import quitIcon from "../../assets/images/icons/Sair.png";
import defaultAvatar from "../../assets/images/default-avatar.png";

import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

export function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);
  const [isTeacher, setIsTeacher] = useState(false);

  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/");
  }

  return (
    <div id="page-landing">
      <div className="header">
        <div className="profile">
          <img src="https://avatars.githubusercontent.com/u/112427489?v=4" />
          <strong>Thauane Bispo</strong>
        </div>
        <button className="logoff-button" type="button">
          <img src={quitIcon} alt="Sair" onClick={handleNavigation} />
        </button>
      </div>

      <div id="banner">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>
            Sua plataforma de <br /> estudos online.
          </h2>
        </div>

        <img src={landing} alt="Plataforma de Estudos" className="hero-image" />
      </div>

      <div className="content">
        <div className="welcome-connections-container">
          <div className="welcome-container">
            <span>Seja bem-vindo.</span>
            <strong>O que deseja fazer?</strong>
          </div>
          <span className="total-connections">
            Total de {totalConnections} conexões.
            <img src={purpleHeart} alt="" />
          </span>
        </div>
        <div className="buttons-container">
          <a href="/TeacherList" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <Link to="/TeacherForm" className="teach">
            <img src={teachIcon} alt="" />
            Dar Aulas
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
