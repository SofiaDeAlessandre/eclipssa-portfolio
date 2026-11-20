import Destello from "./Destello";
import { linkWhatsApp, MENSAJE_GENERAL } from "../utils/catalogo";

export default function Informacion() {
  return (
    <section className="informacion" id="informacion" aria-labelledby="t-info">
      <Destello className="d-info-1" />
      <Destello className="d-info-2" />
      <Destello className="d-info-3" />

      <div className="informacion-interior">
        <h1 id="t-info" className="titulo-pagina">Encontrá tus próximos favoritos</h1>
        <p>
          En el catálogo Eclipssa podrás conocer nuestros accesorios destacados y comunicarte de
          manera directa por WhatsApp, para una asesoría personalizada y más información.
        </p>

        <div className="info-bloques">
          <div>
            <h3>Entregas</h3>
            <p>Hacemos envíos y tenemos punto de encuentro en Berazategui.</p>
          </div>
          <div>
            <h3>Medios de pago</h3>
            <p>Mercado Pago, transferencia bancaria y efectivo (presencial).</p>
          </div>
        </div>

        <p className="info-cierre">
          Queremos brindarte la mejor asesoría y experiencia. ¡Consultanos!
        </p>
        <a className="boton boton-verde" href={linkWhatsApp(MENSAJE_GENERAL)} target="_blank" rel="noopener">
          Consultar por WhatsApp
        </a>
      </div>
    </section>
  );
}
