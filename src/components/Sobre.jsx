import Destello from "./Destello";
import { foto } from "../utils/catalogo";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre" aria-labelledby="t-sobre">
      <div className="sobre-interior">
        <div className="sobre-texto">
          <h1 className="titulo-pagina" id="t-sobre">
            Sobre Eclipssa
            <Destello className="d-titulo" />
          </h1>
          <p className="sobre-saludo">¡Bienvenidas a Eclipssa!</p>
          <p>
            Nuestra idea es acercarte accesorios seleccionados y una grata experiencia de
            asesoramiento.
          </p>
          <p>
            Cada accesorio es elegido especialmente para crear un estilo destacado y único.
            Ofrecemos amplia variedad para darte la opción de personalizar y armar tus sets como más
            te guste.
          </p>
          <p className="sobre-cierre">Descubrí la magia de Eclipssa</p>
        </div>
        <img
          className="sobre-foto"
          src={foto("cadenas-gold")}
          alt="Cadenas Gold de acero dorado sobre encaje"
          loading="lazy"
        />
      </div>
    </section>
  );
}
