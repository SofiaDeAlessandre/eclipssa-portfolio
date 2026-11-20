import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { GRUPOS } from "../data/productos";

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const { pathname } = useLocation();

  // Cerrar el menú al cambiar de página
  useEffect(() => setAbierto(false), [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("sin-scroll", abierto);
    const esc = (e) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [abierto]);

  return (
    <header className="header">
      <button
        type="button"
        className={`hamburguesa ${abierto ? "abierta" : ""}`}
        aria-expanded={abierto}
        aria-controls="menu"
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setAbierto(!abierto)}
      >
        <span /><span /><span />
      </button>

      <nav id="menu" className={`menu ${abierto ? "abierto" : ""}`} aria-label="Secciones">
        <NavLink to="/" end className="menu-inicio">Inicio</NavLink>
        <NavLink to="/catalogo/acero-blanco" className={() => (pathname.startsWith("/catalogo") ? "active" : "")}>
          Catálogo
        </NavLink>
        <ul className="submenu">
          {GRUPOS.map((g) => (
            <li key={g.id}>
              <NavLink to={`/catalogo/${g.slug}`}>{g.nombre}</NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/informacion">Información</NavLink>
        <NavLink to="/sobre-eclipssa">Sobre Eclipssa</NavLink>
      </nav>

      <Link to="/" className="header-logo" aria-label="Eclipssa, ir al inicio">
        <Logo compacto />
      </Link>
    </header>
  );
}
