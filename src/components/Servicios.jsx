const servicios = [
  {
    titulo: "Asesoría Personalizada",
    descripcion:
      "Nuestros especialistas le guían en cada etapa de la selección, considerando su nivel, espacio y presupuesto.",
  },
  {
    titulo: "Afinación y Mantenimiento",
    descripcion:
      "Servicio técnico certificado para mantener su instrumento en condiciones óptimas durante toda su vida útil.",
  },
  {
    titulo: "Financiamiento Directo",
    descripcion:
      "Planes de pago flexibles diseñados para que su piano ideal sea accesible sin comprometer la calidad.",
  },
  {
    titulo: "Entrega e Instalación",
    descripcion:
      "Logística especializada con personal capacitado para el traslado seguro e instalación profesional.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Por qué elegirnos</p>
          <h2 className="text-4xl font-light text-stone-900">
            Servicio <span className="font-semibold">Integral</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((s, i) => (
            <div key={i} className="bg-white p-8 border border-stone-200">
              <div className="w-8 h-px bg-stone-900 mb-6" />
              <h3 className="text-stone-900 font-semibold text-base mb-3 tracking-tight">
                {s.titulo}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contacto"
            className="inline-block bg-stone-900 text-white text-xs px-8 py-3.5 tracking-widest uppercase hover:bg-stone-700 transition-colors duration-200"
          >
            Solicitar Información
          </a>
        </div>
      </div>
    </section>
  );
}