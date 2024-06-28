import { NavLink } from "react-router-dom";
import logo from "../images/kasa_logo.svg"
import "../styles/header.scss"
const Header = () => {
  return (
    <header id="header">
      <div>
        <img src={logo} alt="kasa logo"></img>
      </div>
      <div>
        <nav>
          <NavLink
            to="/"
            className="nav-link"
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
export default Header;
