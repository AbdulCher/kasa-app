import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.svg";
import './Banner.css';


export default function Banner() {

  return (
    <div className="banner">
        
      <div className="banner-logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="navigation-link">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "navigatio-link active" : "navigation-link"}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "navigation-link active" : "navigation-link"}
        >
          A propos
        </NavLink>
      </nav>
    </div>
  );
}
