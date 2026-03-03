export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-500 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-white flex items-center justify-center">
                <span className="text-stone-900 text-xs font-bold">A</span>
              </div>
              <span className="text-white font-semibold text-sm tracking-widest uppercase">Aumala Pianos</span>
            </div>
            <p className="text-stone-500 text-xs leading-relaxed max-w-xs">
              Selección curada de pianos de alta gama para músicos que exigen lo mejor de su instrumento.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-xs tracking-wide">
            {["Inicio", "Catálogo", "Servicios", "Nosotros", "Contacto", "Términos"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="text-xs">© 2025 Aumala Pianos. Todos los derechos reservados.</span>
          <span className="text-xs">Quito, Ecuador</span>
        </div>
      </div>
    </footer>
  );
}