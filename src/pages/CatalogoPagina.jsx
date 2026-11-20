import { useParams, Navigate } from "react-router-dom";
import Catalogo from "../components/Catalogo";
import { GRUPOS } from "../data/productos";

export default function CatalogoPagina({ onAbrir }) {
  const { grupo } = useParams();
  const actual = GRUPOS.find((g) => g.slug === grupo);
  if (!actual) return <Navigate to="/catalogo/acero-blanco" replace />;
  return <Catalogo grupo={actual} onAbrir={onAbrir} />;
}
