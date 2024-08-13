import { NavLink, useLocation } from "react-router-dom";
import logo from "../images/kasa_logo.svg";
import "../styles/header.scss";

const Header = () => {
  const location = useLocation();
  return (
    <header id="header">
      <div className="header-logo">
        <img src={logo} alt="kasa logo"></img>
      </div>
      <div className="header-nav">
        <nav>
          <NavLink
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
export default Header;
