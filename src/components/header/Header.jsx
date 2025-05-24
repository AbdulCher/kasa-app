import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.svg";
import './Header.css';


export default function Header() {

  return (
    <div className="header">
        
      <div className="header-logo">
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
