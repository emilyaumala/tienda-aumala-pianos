const testimonios = [
  { nombre: "María Fernanda Ruiz", cargo: "Profesora de Conservatorio", texto: "La calidad del Grand 185 superó todas mis expectativas. La respuesta táctil y la proyección del sonido son excepcionales." },
  { nombre: "Carlos Andrade", cargo: "Pianista Concertista", texto: "Aumala Pianos ofrece instrumentos de clase mundial con un servicio personalizado que no encuentras en ningún otro lugar." },
  { nombre: "Daniela Moreno", cargo: "Estudiante Avanzada", texto: "Mi Aumala Vertical V1 transformó completamente mi práctica diaria. Recomiendo esta marca sin ninguna reserva." },
];

export default function Testimonios() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Voces de nuestros clientes</p>
          <h2 className="text-4xl font-light text-stone-900">Lo que dicen <span className="font-semibold">quienes tocan</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <div key={i} className="border border-stone-200 p-8">
              <div className="w-8 h-px bg-stone-300 mb-6" />
              <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">"{t.texto}"</p>
              <p className="text-stone-900 font-semibold text-sm">{t.nombre}</p>
              <p className="text-stone-400 text-xs tracking-wide mt-1">{t.cargo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}