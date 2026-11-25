export function HeroVisual() {
  return (
    // Mini-grid de 2 sub-columnas que ocupa el 100% de la altura de la terminal (h-full)
    <div className="grid grid-cols-2 gap-3 h-full min-h-72">
      {/* SUB-COLUMNA IZQUIERDA: Puntitos + Sol amarillo grande + Edificio brutalista */}
      <div className="relative rounded-xl overflow-hidden bg-cream flex flex-col justify-between">
        {/* Parte superior: Cuadrícula de puntitos (izquierda) + Sol amarillo gigante (derecha) */}
        <div className="relative h-28 w-full">
          {/* Cuadrícula de puntos 6x5 (mismo truco que hicimos en el Navbar) */}
          <div
            className="grid grid-cols-6 gap-2.5 p-2 w-fit opacity-50"
            aria-hidden="true"
          >
            {Array.from({ length: 30 }).map((_, index) => (
              <span key={index} className="w-1 h-1 rounded-full bg-ink block" />
            ))}
          </div>

          {/* Sol amarillo grande asomándose detrás del edificio */}
          <div
            className="absolute top-1 right-1 w-28 h-28 rounded-full bg-accent z-0"
            aria-hidden="true"
          />
        </div>

        {/* Foto del edificio brutalista (sube un poquito con -mt-12 para encimarse al sol) */}
        <div className="relative z-10 flex-1 -mt-12 rounded-xl overflow-hidden border border-ink/20 bg-ink">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
            alt="Arquitectura brutalista"
            className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* SUB-COLUMNA DERECHA: Foto tech alta arriba (2/3) + Montañas abajo (1/3) */}
      <div className="flex flex-col gap-3 h-full">
        {/* Foto superior: Hardware / Tech */}
        <div className="flex-2 rounded-xl overflow-hidden border border-ink/20 bg-ink">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            alt="Hardware y tecnología"
            className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Foto inferior: Montañas panorámicas */}
        <div className="flex-1 rounded-xl overflow-hidden border border-ink/20 bg-ink">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
            alt="Montañas en blanco y negro"
            className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}
