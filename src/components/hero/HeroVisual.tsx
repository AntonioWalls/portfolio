export function HeroVisual() {
  return (
    // Partimos el collage en 12: 7 rebanadas (edificio + sol) y 5 (hardware + montañas)
    <div className="grid grid-cols-12 gap-3 h-full min-h-80">
      {/* SUB-COLUMNA IZQUIERDA (7 rebanadas): Puntitos + Sol amarillo + Edificio recortado en diagonal */}
      <div className="col-span-7 relative overflow-hidden">
        {/* Cuadrícula de puntitos arriba a la izquierda */}
        <div
          className="absolute top-1 left-0 grid grid-cols-7 gap-2 opacity-60 z-0"
          aria-hidden="true"
        >
          {Array.from({ length: 28 }).map((_, index) => (
            <span key={index} className="w-1 h-1 rounded-full bg-ink block" />
          ))}
        </div>

        {/* Sol amarillo grande arriba a la derecha */}
        <div
          className="absolute top-0 right-1 w-32 h-32 rounded-full bg-accent z-0"
          aria-hidden="true"
        />

        {/* Edificio recortado en diagonal (sin borde ni caja cuadrada) */}
        <div className="absolute inset-0 z-10 [clip-path:polygon(0%_58%,76%_18%,100%_36%,100%_100%,0%_100%)]">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
            alt="Arquitectura brutalista"
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>
      </div>

      {/* SUB-COLUMNA DERECHA (5 rebanadas): Foto tech arriba + Montañas abajo */}
      <div className="col-span-5 flex flex-col gap-3 h-full">
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
