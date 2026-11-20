import { NavLink } from "react-router-dom";
import { PRODUCTOS, GRUPOS, CATEGORIAS, ADICIONALES, COLECCIONES } from "../data/productos";
import { foto, srcSet, precioTexto } from "../utils/catalogo";
import Destello from "./Destello";

function Tarjeta({ p, onAbrir }) {
  return (
    <li>
      <button type="button" className="tarjeta" onClick={() => onAbrir(p)}>
        <div className="tarjeta-foto">
          <img
            src={foto(p.fotos[0])}
            srcSet={srcSet(p.fotos[0])}
            sizes="(min-width: 1100px) 25vw, (min-width: 640px) 33vw, 50vw"
            alt={p.nombre}
            loading="lazy"
          />
          {p.coleccion && <span className="etiqueta">{COLECCIONES[p.coleccion]}</span>}
        </div>
        <span className="tarjeta-nombre">{p.nombre}</span>
        {p.detalle && <span className="tarjeta-material">{p.detalle}</span>}
        <span className="tarjeta-precio">{precioTexto(p.precio)}</span>
      </button>
    </li>
  );
}

const irA = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Catalogo({ grupo, onAbrir }) {
  const delGrupo = PRODUCTOS.filter((p) => p.grupos?.includes(grupo.id));
  const secciones = CATEGORIAS.map((c) => ({
    ...c,
    items: delGrupo.filter((p) => p.categoria === c.id),
  })).filter((c) => c.items.length);

  return (
    <section className="catalogo" aria-labelledby="t-catalogo">
      <h1 id="t-catalogo" className="titulo-pagina">
        Catálogo
        <Destello className="d-titulo" />
      </h1>

      <nav className="grupos" aria-label="Elegí el material">
        {GRUPOS.map((g) => (
          <NavLink key={g.id} to={`/catalogo/${g.slug}`} className="grupo">
            {g.nombre}
          </NavLink>
        ))}
      </nav>

      {grupo.id === "adicionales" ? (
        <div className="adicionales">
          <h2 className="categoria-titulo">Un detalle inolvidable</h2>
          <p className="adicionales-texto">
            Regalá tus accesorios y creá un momento memorable. Podés sumar alhajeros y estuches de
            gamuza para que tus joyas estén siempre organizadas y cuidadas.
          </p>
          <ul className="grilla">
            {ADICIONALES.map((p) => <Tarjeta key={p.id} p={p} onAbrir={onAbrir} />)}
          </ul>
        </div>
      ) : (
        <>
          {secciones.length > 1 && (
            <nav className="saltos" aria-label="Ir a una categoría">
              {secciones.map((c) => (
                <a key={c.id} href={`#cat-${c.id}`} onClick={(e) => irA(e, `cat-${c.id}`)}>
                  {c.nombre}
                </a>
              ))}
            </nav>
          )}
          {secciones.map((c) => (
            <div key={c.id} className="categoria" id={`cat-${c.id}`}>
              <h2 className="categoria-titulo">{c.nombre}</h2>
              <ul className="grilla">
                {c.items.map((p) => <Tarjeta key={p.id} p={p} onAbrir={onAbrir} />)}
              </ul>
            </div>
          ))}
        </>
      )}
    </section>
  );
}
