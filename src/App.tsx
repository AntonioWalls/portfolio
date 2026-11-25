import { Navbar } from "./components/navbar/Navbar";

export function App() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <h1 className="font-display text-4xl font-bold">
          Probando lienzo de Fabián.dev
        </h1>
      </main>
    </div>
  );
}

export default App;
