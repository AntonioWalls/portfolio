import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/Navbar";

export function App() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navbar />

      <main className="max-w-[1680px] mx-auto px-4 sm:px-10">
        <Hero />
      </main>
    </div>
  );
}

export default App;
