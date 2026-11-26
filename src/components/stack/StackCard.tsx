import type { StackItem } from "./interfaces/stack.interface";

interface StackCardProps {
  item: StackItem;
}

export function StackCard({ item }: StackCardProps) {
  const Icon = item.icon;

  return (
    <article className="group bg-cream border border-ink/20 rounded-xl p-4 flex flex-col justify-between gap-4 hover:border-ink hover:-translate-y-0.5 hover:shadow-sm transition-all">
      {/* Parte superior: icono + puntito amarillo sutil que aparece al hacer hover */}
      <div className="flex items-start justify-between">
        <Icon className="w-7 h-7 text-ink group-hover:scale-110 transition-transform" />
        <span className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Parte de inferior: nombre en Space Grotesk  + rol en Jetbrains Mono */}
      <div className="space-y-1">
        <h3 className="font-display font-bold text-base text-ink leading-tight">
          {item.name}
        </h3>
        <p className="font-mono text-[11px] text-ink/65 leading-snug">
          {item.role}
        </p>
      </div>
    </article>
  );
}
