import { useState } from "react";
import { About } from "./components/about/About";
import { ContactModal } from "./components/contact/ContactModal";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import { Stack } from "./components/stack/Stack";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

export function App() {
  // State Hoisting (como en Jetpack Compose): el estado vive en el padre
  // para poder abrir el modal tanto desde Navbar como desde Footer.
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-cream text-ink font-sans overflow-x-clip transition-colors duration-300">
          <Navbar onOpenContact={() => setIsContactOpen(true)} />

          <main className="flex-1 w-full max-w-[1680px] mx-auto px-4 sm:px-10">
            <Hero />
            <Stack />
            <Projects />
            <About />
          </main>

          <Footer onOpenContact={() => setIsContactOpen(true)} />

          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
