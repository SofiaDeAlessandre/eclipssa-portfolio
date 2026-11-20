import { useRef } from "react";
import Destello from "./Destello";
import { PRODUCTOS } from "../data/productos";
import { foto, srcSet, precioTexto } from "../utils/catalogo";

export default function Destacados({ onAbrir }) {
  const pista = useRef(null);
  const destacados = PRODUCTOS.filter((p) => p.destacado);

  const mover = (dir) => {
    const el = pista.current;
    const paso = el.querySelector(".slide")?.offsetWidth ?? 300;
    el.scrollBy({ left: dir * (paso + 16), behavior: "smooth" });
  };

  return (
    <section className="destacados" aria-labelledby="t-destacados">
      <h2 id="t-destacados">
        Los más elegidos
        <Destello className="d-titulo" />
      </h2>
      <p className="destacados-ayuda">Deslizá para ver más</p>

      <div className="carrusel" ref={pista}>
        {destacados.map((p) => (
          <button key={p.id} type="button" className="slide" onClick={() => onAbrir(p)}>
            <div className="slide-foto">
              <img
                src={foto(p.fotos[0])}
                srcSet={srcSet(p.fotos[0])}
                sizes="(min-width: 960px) 26vw, 62vw"
                alt={p.nombre}
                loading="lazy"
              />
            </div>
            <span className="slide-nombre">{p.nombre}</span>
            <span className="slide-precio">{precioTexto(p.precio)}</span>
          </button>
        ))}
      </div>

      <div className="flechas">
        <button type="button" onClick={() => mover(-1)} aria-label="Ver anteriores">‹</button>
        <button type="button" onClick={() => mover(1)} aria-label="Ver siguientes">›</button>
      </div>
    </section>
  );
}
