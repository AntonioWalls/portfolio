import { STACK_ITEMS } from "./constants/stack.constant";
import { StackCard } from "./StackCard";

export function Stack() {
  return (
    <section id="stack" className="py-10 border-b border-ink/20 ">
      {/* Celular: 1 columna | Laptop (lg): 4 + 8 rebanadas | Monitor grande (xl): 3 + 9 rebanadas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* COLUMNA IZQUIERDA: Número + Título "Stack" + Línea divisoria + Descripción */}
        <div className="lg:col-span-4 xl:col-span-3 flex items-start gap-4">
          <div className="shrink-0">
            <span className="font-mono text-sm text-ink/70 block">01.</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-none mt-1">
              Stack
            </h2>
            {/* Barrita amarilla */}
            <span className="block w-10 h-1 bg-accent mt-2.5" />
          </div>
          <p className="border-l border-ink/20 pl-4 text-xs sm:text-sm text-ink/75 leading-relaxed">
            Tecnologías y herramientas que utilizo para construir productos web
            y móviles modernos, escalables y confiables.
          </p>
        </div>
        {/* Columna de la derecha */}
        <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-3">
          {STACK_ITEMS.map((item) => (
            <StackCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
