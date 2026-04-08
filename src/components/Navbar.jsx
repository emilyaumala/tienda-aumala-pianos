import { useState } from "react";

const enlaces = [
  { label: "Inicio", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [activo, setActivo] = useState("Inicio");

  const handleClick = (label) => {
    setActivo(label);
    setMenuAbierto(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
{/* Logo */}
<a href="#inicio" className="flex items-center gap-3">
  <div className="w-8 h-8 flex items-center justify-center">
    <img 
      src="https://res.cloudinary.com/dgnzr1i4p/image/upload/q_auto/f_auto/v1775681321/logo_ubpi21.png"
      alt="AUMALA Logo"
      className="w-full h-full object-contain"
    />
  </div>
  <div>
    <span className="text-stone-900 font-semibold text-base tracking-wide">AUMALA</span>
    <span className="text-stone-400 text-xs tracking-widest block -mt-1 uppercase">Pianos</span>
  </div>
</a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {enlaces.map((e) => (
              <a
                key={e.label}
                href={e.href}
                onClick={() => handleClick(e.label)}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  activo === e.label
                    ? "text-stone-900 font-semibold border-b border-stone-900 pb-0.5"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {e.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <a
            href="#catalogo"
            className="hidden md:block bg-stone-900 text-white text-sm px-5 py-2 tracking-wide hover:bg-stone-700 transition-colors duration-200"
          >
            Ver Catálogo
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir menú"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-px bg-stone-900 transition-all duration-200 ${menuAbierto ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-px bg-stone-900 transition-all duration-200 ${menuAbierto ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-stone-900 transition-all duration-200 ${menuAbierto ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuAbierto && (
          <div className="md:hidden border-t border-stone-100 py-4 space-y-1">
            {enlaces.map((e) => (
              <a
                key={e.label}
                href={e.href}
                onClick={() => handleClick(e.label)}
                className="block w-full text-left text-sm text-stone-700 hover:text-stone-900 py-2 px-2 tracking-wide"
              >
                {e.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#catalogo"
                onClick={() => setMenuAbierto(false)}
                className="block w-full bg-stone-900 text-white text-sm px-5 py-2.5 tracking-wide text-center"
              >
                Ver Catálogo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
