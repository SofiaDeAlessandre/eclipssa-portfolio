import Destello from "./Destello";
import { INSTAGRAM } from "../data/productos";
import { linkWhatsApp, MENSAJE_GENERAL } from "../utils/catalogo";

export default function Contacto() {
  return (
    <section className="contacto" aria-labelledby="t-contacto">
      <Destello className="d-pie" />
      <h2 id="t-contacto" className="contacto-frase">¿Cuál te gustó más?</h2>
      <p>Escribinos para que sea tu próximo accesorio destacado.</p>
      <div className="contacto-botones">
        <a className="boton boton-verde" href={linkWhatsApp(MENSAJE_GENERAL)} target="_blank" rel="noopener">
          Escribinos por WhatsApp
        </a>
        <a className="boton boton-borde" href={INSTAGRAM} target="_blank" rel="noopener">
          Seguinos en Instagram
        </a>
      </div>
      <a className="contacto-ig" href={INSTAGRAM} target="_blank" rel="noopener">@eclipssa.accesorios</a>
    </section>
  );
}
