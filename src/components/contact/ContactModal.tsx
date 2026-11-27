import {
  ArrowUpRight,
  Check,
  Copy,
  Loader2,
  Mail,
  Send,
  X,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useLanguage } from "../../context/language.context";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "./constants/contact.constant";
import type {
  ContactFormData,
  ContactModalProps,
  SubmitStatus,
} from "./interfaces/contact.interface";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [copied, setCopied] = useState<boolean>(false);

  // Equivalente a DisposableEffect en Jetpack Compose:
  // bloquea el scroll del fondo y permite cerrar con la tecla Escape.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY?.trim();

    // Si aún no se configura VITE_WEB3FORMS_KEY en .env / hosting,
    // abre el cliente de correo prellenado para que el botón nunca quede muerto.
    if (!accessKey) {
      const subject = encodeURIComponent(
        `Contacto desde portafolio — ${formData.name}`,
      );
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\n${formData.message}`,
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("fallback");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Nuevo mensaje desde fabian.dev — ${formData.name}`,
          from_name: "Portafolio Fabián.dev",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: "",
        }),
      });

      const result: { success?: boolean } = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      {/* Ventana estilo Terminal (stopPropagation evita que se cierre al clicar adentro) */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-xl max-h-[90vh] overflow-y-auto bg-terminal text-terminal-text rounded-xl border border-terminal-text/20 shadow-2xl font-mono"
      >
        {/* 1. Barra superior estilo macOS / Terminal */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-terminal-text/15 sticky top-0 bg-terminal z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-terminal-text/30" />
            </div>
            <span className="text-xs text-terminal-text/65">
              {t.contact.path}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t.contact.closeAria}
            className="flex items-center gap-1.5 text-xs text-terminal-text/60 hover:text-accent transition-colors cursor-pointer px-2 py-1 rounded hover:bg-terminal-text/10"
          >
            <span className="hidden sm:inline">[esc]</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          {/* 2. Encabezado */}
          <div>
            <h2
              id="contact-modal-title"
              className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-terminal-text"
            >
              {t.contact.title}
              <span className="text-accent">.</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-terminal-text/70 mt-1">
              {t.contact.subtitle}
            </p>
          </div>

          {/* 3. Canales directos: Copiar correo + LinkedIn + GitHub */}
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-widest text-terminal-text/50">
              {t.contact.directChannelsLabel}
            </p>

            {/* Tarjeta de correo con botón Copiar en 1 clic */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg border border-terminal-text/15 bg-terminal-text/5">
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs sm:text-sm text-terminal-text truncate">
                  {CONTACT_EMAIL}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex items-center justify-center gap-1.5 text-xs px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer shrink-0 ${
                  copied
                    ? "bg-green-500/20 text-green-300 border border-green-400/40"
                    : "bg-accent text-[#141413] hover:brightness-95"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>{t.contact.copiedEmail}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.contact.copyEmail}</span>
                  </>
                )}
              </button>
            </div>

            {/* Tarjetas de LinkedIn y GitHub */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 p-3 rounded-lg border border-terminal-text/15 bg-terminal-text/5 hover:border-accent/60 hover:bg-terminal-text/10 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-9 h-9 rounded-md bg-terminal-text/10 text-terminal-text group-hover:bg-accent group-hover:text-[#141413] flex items-center justify-center transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-terminal-text">
                          {social.label}
                        </p>
                        <p className="text-[11px] text-terminal-text/55 truncate">
                          {social.handle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-terminal-text/45 group-hover:text-accent transition-colors shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 4. Formulario de envío de correo */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 pt-4 border-t border-terminal-text/15"
          >
            <p className="text-xs text-accent font-semibold">
              &gt; {t.contact.formCommand}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-xs text-terminal-text/70"
                >
                  {t.contact.nameLabel}:
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) => {
                    setFormData((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }));
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full rounded-lg bg-black/35 border border-terminal-text/20 px-3 py-2 text-xs sm:text-sm text-terminal-text placeholder:text-terminal-text/35 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block text-xs text-terminal-text/70"
                >
                  {t.contact.emailLabel}:
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => {
                    setFormData((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }));
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full rounded-lg bg-black/35 border border-terminal-text/20 px-3 py-2 text-xs sm:text-sm text-terminal-text placeholder:text-terminal-text/35 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="block text-xs text-terminal-text/70"
              >
                {t.contact.messageLabel}:
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formData.message}
                onChange={(event) => {
                  setFormData((prev) => ({
                    ...prev,
                    message: event.target.value,
                  }));
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder={t.contact.messagePlaceholder}
                className="w-full rounded-lg bg-black/35 border border-terminal-text/20 px-3 py-2 text-xs sm:text-sm text-terminal-text placeholder:text-terminal-text/35 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            {/* Mensajes de estado (éxito, fallback mailto o error) */}
            {status === "success" && (
              <p className="text-xs text-green-400 bg-green-500/10 border border-green-400/30 rounded-lg px-3 py-2">
                &gt; {t.contact.successMessage}
              </p>
            )}

            {status === "fallback" && (
              <p className="text-xs text-accent bg-accent/10 border border-accent/30 rounded-lg px-3 py-2">
                &gt; {t.contact.fallbackMessage}
              </p>
            )}

            {status === "error" && (
              <p className="text-xs text-red-400 bg-red-500/10 border border-red-400/30 rounded-lg px-3 py-2">
                &gt; {t.contact.errorMessage}
              </p>
            )}

            {/* Botón Enviar */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-accent text-[#141413] font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:brightness-95 transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t.contact.sendingButton}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submitButton}</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
