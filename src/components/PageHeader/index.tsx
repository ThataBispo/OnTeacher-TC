import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.png";
import backIcon from "../../assets/images/icons/back.svg";
import { ReactNode } from "react";

import "./styles.css";

interface PageHeaderProps {
  title: string;
  children?: ReactNode;
  description?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/landing">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="OnTeacher" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>

        {props.description && <p>{props.description}</p>}
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
