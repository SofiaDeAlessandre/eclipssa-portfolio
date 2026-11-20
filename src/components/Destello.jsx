// Estrellita de 4 puntas, como las del logo. Decorativa.
export default function Destello({ className = "", style }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`destello ${className}`} style={style}>
      <path d="M12 0c.6 7.2 4.8 11.4 12 12-7.2.6-11.4 4.8-12 12-.6-7.2-4.8-11.4-12-12 7.2-.6 11.4-4.8 12-12z" />
    </svg>
  );
}
