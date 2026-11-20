import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BotonWhatsApp from "./components/BotonWhatsApp";
import Detalle from "./components/Detalle";
import Inicio from "./pages/Inicio";
import CatalogoPagina from "./pages/CatalogoPagina";
import Informacion from "./components/Informacion";
import Sobre from "./components/Sobre";
import { verPagina } from "./utils/analytics";

const TITULOS = {
  "/": "Eclipssa | Accesorios para brillar como la Luna",
  "/informacion": "Información | Eclipssa",
  "/sobre-eclipssa": "Sobre Eclipssa",
};

export default function App() {
  const [abierto, setAbierto] = useState(null);
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = TITULOS[pathname] ?? "Catálogo | Eclipssa";
  }, [pathname]);
  verPagina(pathname, document.title);

  return (
    <>
      <Header />
      <main className="pagina">
        <Routes>
          <Route path="/" element={<Inicio onAbrir={setAbierto} />} />
          <Route path="/catalogo" element={<Navigate to="/catalogo/acero-blanco" replace />} />
          <Route path="/catalogo/:grupo" element={<CatalogoPagina onAbrir={setAbierto} />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/sobre-eclipssa" element={<Sobre />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <BotonWhatsApp />
      <Detalle producto={abierto} onCerrar={() => setAbierto(null)} />
    </>
  );
}
