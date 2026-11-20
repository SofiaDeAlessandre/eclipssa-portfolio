import { useEffect, useRef, useState } from "react";
import { COLECCIONES } from "../data/productos";
import { foto, srcSet, precioTexto, linkWhatsApp, mensajeProducto } from "../utils/catalogo";

export default function Detalle({ producto: p, onCerrar }) {
  const dialogo = useRef(null);
  const [variante, setVariante] = useState(null);
  const [fotoActual, setFotoActual] = useState(0);

  useEffect(() => {
    const d = dialogo.current;
    if (p && !d.open) {
      setVariante(p.variantes?.[0] ?? null);
      setFotoActual(0);
      d.showModal();
      d.querySelector(".galeria")?.scrollTo({ left: 0 });
      document.documentElement.classList.add("sin-scroll");
    }
  }, [p]);

  const cerrar = () => {
    dialogo.current.close();
  };

  const alCerrar = () => {
    document.documentElement.classList.remove("sin-scroll");
    onCerrar();
  };

  const alDeslizar = (e) => {
    const el = e.currentTarget;
    setFotoActual(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <dialog
      ref={dialogo}
      className="detalle"
      aria-labelledby="detalle-nombre"
      onClose={alCerrar}
      onClick={(e) => e.target === dialogo.current && cerrar()}
    >
      {p && (
        <div className="detalle-cuerpo">
          <button type="button" className="cerrar" onClick={cerrar} aria-label="Cerrar">×</button>

          <div className="detalle-fotos">
            <div className="galeria" onScroll={alDeslizar}>
              {p.fotos.map((f, i) => (
                <img
                  key={f}
                  src={foto(f, 960)}
                  srcSet={srcSet(f)}
                  sizes="(min-width: 900px) 440px, 100vw"
                  alt={`${p.nombre}, foto ${i + 1} de ${p.fotos.length}`}
                />
              ))}
            </div>
            {p.fotos.length > 1 && (
              <div className="puntos" aria-hidden="true">
                {p.fotos.map((f, i) => (
                  <span key={f} className={i === fotoActual ? "activo" : ""} />
                ))}
              </div>
            )}
          </div>

          <div className="detalle-info">
            {p.coleccion && <p className="detalle-coleccion">{COLECCIONES[p.coleccion]}</p>}
            <h3 id="detalle-nombre">{p.nombre}</h3>
            {p.detalle && <p className="detalle-texto">{p.detalle}</p>}
            {p.material && (
              <p className="detalle-material">
                {p.material}
                {p.bijou && p.material !== "Bijou" && " (bijou)"}
              </p>
            )}
            <p className="detalle-precio">{precioTexto(p.precio)}</p>

            {p.variantes && (
              <fieldset className="variantes">
                <legend>Elegí la opción</legend>
                {p.variantes.map((v) => (
                  <label key={v} className="variante">
                    <input
                      type="radio"
                      name="variante"
                      value={v}
                      checked={variante === v}
                      onChange={() => setVariante(v)}
                    />
                    <span>{v}</span>
                  </label>
                ))}
              </fieldset>
            )}

            <a
              className="boton boton-wa"
              href={linkWhatsApp(mensajeProducto(p, variante))}
              target="_blank"
              rel="noopener"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}
