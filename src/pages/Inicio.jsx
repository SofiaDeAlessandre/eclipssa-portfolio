import Hero from "../components/Hero";
import Destacados from "../components/Destacados";
import Contacto from "../components/Contacto";

export default function Inicio({ onAbrir }) {
  return (
    <>
      <Hero onAbrir={onAbrir} />
      <Destacados onAbrir={onAbrir} />
      <Contacto />
    </>
  );
}
