import { useState } from "react";

const enlaces = ["Inicio", "Catálogo", "Nosotros", "Contacto"];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [activo, setActivo] = useState("Inicio");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-stone-900 flex items-center justify-center">
              <span className="text-white text-xs font-bold tracking-widest">A</span>
            </div>
            <div>
              <span className="text-stone-900 font-semibold text-base tracking-wide">AUMALA</span>
              <span className="text-stone-400 text-xs tracking-widest block -mt-1 uppercase">Pianos</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {enlaces.map((e) => (
              <button
                key={e}
                onClick={() => setActivo(e)}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  activo === e
                    ? "text-stone-900 font-semibold border-b border-stone-900 pb-0.5"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {e}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="bg-stone-900 text-white text-sm px-5 py-2 tracking-wide hover:bg-stone-700 transition-colors duration-200">
              Solicitar Catálogo
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-px bg-stone-900 transition-all duration-200 ${menuAbierto ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-px bg-stone-900 transition-all duration-200 ${menuAbierto ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-stone-900 transition-all duration-200 ${menuAbierto ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {menuAbierto && (
          <div className="md:hidden border-t border-stone-100 py-4 space-y-3">
            {enlaces.map((e) => (
              <button
                key={e}
                onClick={() => { setActivo(e); setMenuAbierto(false); }}
                className="block w-full text-left text-sm text-stone-700 hover:text-stone-900 py-1 tracking-wide"
              >
                {e}
              </button>
            ))}
            <button className="w-full bg-stone-900 text-white text-sm px-5 py-2 tracking-wide mt-2">
              Solicitar Catálogo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}