import { WHATSAPP, COLECCIONES } from "../data/productos";

export const precioTexto = (precio) =>
  precio == null ? "Consultar precio" : "$" + precio.toLocaleString("es-AR");

export const foto = (nombre, ancho = 480) => `/img/${nombre}-${ancho}.webp`;

export const srcSet = (nombre) => `${foto(nombre, 480)} 480w, ${foto(nombre, 960)} 960w`;

export const linkWhatsApp = (texto) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

export function mensajeProducto(p, variante) {
  const coleccion = p.coleccion ? ` de la ${COLECCIONES[p.coleccion]}` : "";
  const opcion = variante ? `, opción ${variante}` : "";
  return `¡Hola Eclipssa! Me interesa: *${p.nombre}*${coleccion}${opcion} (${precioTexto(p.precio)}). ¿Está disponible?`;
}

export const MENSAJE_GENERAL = "¡Hola Eclipssa! Quería hacerles una consulta sobre sus accesorios.";
