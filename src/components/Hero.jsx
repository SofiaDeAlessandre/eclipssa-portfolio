import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Destello from "./Destello";
import { PORTADA, PRODUCTOS } from "../data/productos";
import { foto, srcSet } from "../utils/catalogo";

const slides = PORTADA.map((s) => ({ ...s, p: PRODUCTOS.find((p) => p.id === s.producto) }));

export default function Hero({ onAbrir }) {
  const pista = useRef(null);
  const [actual, setActual] = useState(0);
  const [pausa, setPausa] = useState(false);

  const ir = (i) => {
    const el = pista.current;
    el.scrollTo({ left: el.clientWidth * i, behavior: "smooth" });
  };

  // Avanza solo cada 5 s, salvo que la persona lo esté tocando o prefiera sin movimiento
  useEffect(() => {
    if (pausa || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => ir((actual + 1) % slides.length), 5000);
    return () => clearTimeout(t);
  }, [actual, pausa]);

  const alDeslizar = (e) => {
    const el = e.currentTarget;
    setActual(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <section className="hero" id="inicio">
      <Destello className="d-hero-1" />
      <Destello className="d-hero-2" />
      <Destello className="d-hero-3" />

      <div className="hero-texto">
        <h1 className="hero-logo"><Logo /></h1>
        <p className="hero-lema">Accesorios para brillar como la Luna</p>
        <Link className="boton" to="/catalogo/acero-blanco">Ver catálogo</Link>
      </div>

      <div
        className="hero-carrusel"
        onPointerDown={() => setPausa(true)}
        onMouseEnter={() => setPausa(true)}
        onMouseLeave={() => setPausa(false)}
      >
        <div className="hero-pista" ref={pista} onScroll={alDeslizar} aria-label="Accesorios destacados">
          {slides.map(({ foto: f, p }, i) => (
            <button
              key={f}
              type="button"
              className="hero-slide"
              onClick={() => p && onAbrir(p)}
              aria-label={`Ver ${p?.nombre}`}
            >
              <img
                src={foto(f, 960)}
                srcSet={srcSet(f)}
                sizes="(min-width: 960px) 440px, 88vw"
                alt={p?.nombre}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
              />
              <span className="hero-slide-nombre">{p?.nombre}</span>
            </button>
          ))}
        </div>
        <div className="hero-puntos">
          {slides.map((s, i) => (
            <button
              key={s.foto}
              type="button"
              className={i === actual ? "activo" : ""}
              aria-label={`Foto ${i + 1}`}
              aria-current={i === actual}
              onClick={() => { setPausa(true); ir(i); }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
