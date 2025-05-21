import logoFooter from "../../assets/LOGO-footer.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa Logo" className="footer-logo" />
      <p className="footer-text">© 2024 Kasa. Tous droits réservés</p>
    </footer>
  );
}
