const GA_ID = "G-0XX806KT2W"; 

export function iniciarAnalytics() {
  if (!GA_ID) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false });
}

export function verPagina(ruta, titulo) {
  window.gtag?.("event", "page_view", {
    page_path: ruta,
    page_title: titulo,
    page_location: window.location.href,
  });
}

export function evento(nombre, datos = {}) {
  window.gtag?.("event", nombre, datos);
}