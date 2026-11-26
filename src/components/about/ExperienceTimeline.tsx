import { useLanguage } from "../../context/language.context";

export function ExperienceTimeline() {
  const { t } = useLanguage();

  return (
    // id="experiencia" + scroll-mt-24 conecta con [ Experiencia ] sin quedar tapado por el Navbar
    <div
      id="experiencia"
      className="scroll-mt-24 flex flex-col justify-between gap-5 h-full"
    >
      {/* Encabezado: Título a la izquierda + años a la derecha */}
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
          {t.about.experienceTitle}
        </h3>
        <span className="font-mono text-xs sm:text-sm text-ink/70 shrink-0">
          {t.about.experienceYears}
        </span>
      </div>

      {/* Línea de tiempo vertical con border-l + puntitos posicionados con absolute */}
      <div className="relative border-l border-ink/25 pl-5 space-y-6 my-auto">
        {t.about.experiences.map((exp) => {
          const dotStyles = exp.isCurrent
            ? "bg-accent border-ink"
            : "bg-cream border-ink/60";

          return (
            <div key={exp.id} className="relative">
              {/* Circulito centrado sobre la línea vertical */}
              <span
                className={`absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${dotStyles}`}
              />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-3">
                <h4 className="font-display font-bold text-sm sm:text-base text-ink leading-snug">
                  {exp.role}
                </h4>
                <span className="font-mono text-xs text-ink/60 shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="font-mono text-xs text-ink/65 mt-1 leading-relaxed">
                {exp.summary}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
