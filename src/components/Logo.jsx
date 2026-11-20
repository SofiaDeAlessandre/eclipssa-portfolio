
function Luna({ className }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <path d="M23 4a17 17 0 1 0 12 29A14 14 0 0 1 23 4z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M33 6l.8 2.6 2.6.8-2.6.8-.8 2.6-.8-2.6-2.6-.8 2.6-.8z" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ compacto = false, className = "" }) {
  if (compacto) {
    return (
      <span className={`logo logo-compacto ${className}`} aria-label="Eclipssa">
        <Luna className="logo-luna" />
        <span className="logo-nombre">ECLIPSSA</span>
      </span>
    );
  }
  return (
    <span className={`logo logo-completo ${className}`} aria-label="Eclipssa accesorios">
      <Luna className="logo-luna" />
      <span className="logo-nombre">ECLIPSSA</span>
      <span className="logo-bajada">ACCESORIOS</span>
    </span>
  );
}
