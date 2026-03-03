export default function Contacto() {
  return (
    <section className="py-24 bg-stone-900 text-white" id="contacto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-stone-400 text-xs tracking-widest uppercase mb-4">Contáctenos</p>
            <h2 className="text-4xl font-light mb-6">Hablemos sobre <span className="font-semibold">su instrumento</span></h2>
            <p className="text-stone-400 leading-relaxed mb-10 text-sm">
              Nuestros asesores están disponibles para orientarle en la selección del instrumento ideal.
            </p>
            <div className="space-y-4">
              {[
                { label: "WhatsApp", valor: "+593 900 000 000" },
                { label: "Correo", valor: "contacto@aumalapianos.com" },
                { label: "Horario", valor: "Lun – Sáb, 09:00 – 18:00" },
                { label: "Ubicación", valor: "Quito, Ecuador" },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 items-start border-b border-stone-800 pb-4">
                  <span className="text-stone-500 text-xs tracking-widest uppercase w-24 pt-0.5 shrink-0">{item.label}</span>
                  <span className="text-stone-200 text-sm">{item.valor}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8">
            <h3 className="text-stone-900 font-semibold text-lg mb-6 tracking-tight">Envíenos un mensaje</h3>
            <div className="space-y-4">
              {[
                { label: "Nombre completo", type: "text", placeholder: "Ingrese su nombre" },
                { label: "Correo electrónico", type: "email", placeholder: "ejemplo@correo.com" },
                { label: "Teléfono", type: "tel", placeholder: "+593 000 000 000" },
              ].map((campo) => (
                <div key={campo.label}>
                  <label className="block text-stone-600 text-xs tracking-widest uppercase mb-2">{campo.label}</label>
                  <input
                    type={campo.type}
                    placeholder={campo.placeholder}
                    className="w-full border border-stone-200 text-stone-800 text-sm px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors placeholder-stone-300"
                  />
                </div>
              ))}
              <div>
                <label className="block text-stone-600 text-xs tracking-widest uppercase mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntenos qué tipo de piano busca..."
                  className="w-full border border-stone-200 text-stone-800 text-sm px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors resize-none placeholder-stone-300"
                />
              </div>
              <button className="w-full bg-stone-900 text-white text-xs tracking-widest uppercase py-4 hover:bg-stone-700 transition-colors duration-200">
                Enviar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}