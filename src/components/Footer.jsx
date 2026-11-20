import { Link } from "react-router-dom";
import Logo from "./Logo";
import { INSTAGRAM } from "../data/productos";
import { linkWhatsApp, MENSAJE_GENERAL } from "../utils/catalogo";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" aria-label="Eclipssa, ir al inicio" className="footer-logo">
        <Logo className="logo-pie" />
      </Link>
      <p className="pie-lema">Accesorios para brillar como la Luna</p>
      <p>Envíos y punto de encuentro en Berazategui</p>
      <div className="footer-links">
        <a href={linkWhatsApp(MENSAJE_GENERAL)} target="_blank" rel="noopener">WhatsApp</a>
        <a href={INSTAGRAM} target="_blank" rel="noopener">Instagram</a>
      </div>
    </footer>
  );
}
