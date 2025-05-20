import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.svg";

export default function Banner() {

  return (
    <header className="my-header">
        
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="my-nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}
