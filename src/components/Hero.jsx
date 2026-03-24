export default function Hero() {
  return (
    <section id="inicio" className="pt-16 min-h-screen flex flex-col">

      {/* Imagen principal */}
      <div className="relative flex-1 min-h-screen bg-stone-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1600&q=90"
          alt="Piano de cola Aumala"
          className="w-full h-full object-cover object-center absolute inset-0 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center min-h-screen">
          <div className="max-w-xl py-32">
            <p className="text-stone-500 text-xs tracking-widest uppercase mb-4 font-medium">
              Instrumentos de Alta Gama
            </p>
            <h1 className="text-5xl lg:text-6xl font-light text-stone-900 leading-tight mb-6">
              Encuentra el piano
              <br />
              <span className="font-semibold">perfecto para ti.</span>
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed mb-10 font-light">
              Cada instrumento Aumala está seleccionado para ofrecer la más alta expresión musical. Desde el estudiante hasta el concertista profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#catalogo"
                className="bg-stone-900 text-white px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-stone-700 transition-colors duration-300 text-center"
              >
                Ver Catálogo
              </a>
              <a
                href="#servicios"
                className="border border-stone-400 text-stone-700 px-8 py-3.5 text-sm tracking-widest uppercase hover:border-stone-900 hover:text-stone-900 transition-colors duration-300 text-center"
              >
                Nuestros Servicios
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-stone-400 text-xs tracking-widest uppercase">Descubrir</span>
          <div className="w-px h-10 bg-stone-300 animate-pulse" />
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { numero: "25+", label: "Años de experiencia" },
            { numero: "800+", label: "Instrumentos entregados" },
            { numero: "12", label: "Países de procedencia" },
            { numero: "100%", label: "Garantía de calidad" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-light text-stone-200 mb-1">{s.numero}</div>
              <div className="text-stone-400 text-xs tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}