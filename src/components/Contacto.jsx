import { useState } from "react";

const WHATSAPP_NUMBER = "593979084423";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", telefono: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.nombre || !form.correo || !form.mensaje) {
      alert("Por favor complete los campos obligatorios: nombre, correo y mensaje.");
      return;
    }
    const texto = encodeURIComponent(
      `Nombre: ${form.nombre}\nCorreo: ${form.correo}\nTeléfono: ${form.telefono}\nMensaje: ${form.mensaje}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Información */}
          <div>
            <p className="text-stone-400 text-xs tracking-widest uppercase mb-4">Contáctenos</p>
            <h2 className="text-4xl font-light mb-6">
              Hablemos sobre <span className="font-semibold">su instrumento</span>
            </h2>
            <p className="text-stone-400 leading-relaxed mb-10 text-sm">
              Nuestros asesores están disponibles para orientarle en la selección del instrumento ideal.
              Contáctenos por cualquiera de los siguientes medios.
            </p>
            <div className="space-y-4">
              {[
                { label: "WhatsApp", valor: "+593 97 908 4423" },
                { label: "Correo", valor: "contacto@aumalapianos.com" },
                { label: "Horario", valor: "Lun – Sáb, 09:00 – 18:00" },
                { label: "Ubicación", valor: "Quito, Ecuador" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-6 items-start border-b border-stone-800 pb-4"
                >
                  <span className="text-stone-500 text-xs tracking-widest uppercase w-24 pt-0.5 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-stone-200 text-sm">{item.valor}</span>
                </div>
              ))}
            </div>

            {/* Botón WhatsApp directo */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-white text-stone-900 text-xs px-8 py-3.5 tracking-widest uppercase hover:bg-stone-100 transition-colors duration-200"
            >
              Escribir por WhatsApp
            </a>
          </div>

          {/* Formulario */}
          <div className="bg-white p-8">
            <h3 className="text-stone-900 font-semibold text-lg mb-6 tracking-tight">
              Envíenos un mensaje
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-stone-600 text-xs tracking-widest uppercase mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Ingrese su nombre"
                  className="w-full border border-stone-200 text-stone-800 text-sm px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors placeholder-stone-300"
                />
              </div>
              <div>
                <label className="block text-stone-600 text-xs tracking-widest uppercase mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                  className="w-full border border-stone-200 text-stone-800 text-sm px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors placeholder-stone-300"
                />
              </div>
              <div>
                <label className="block text-stone-600 text-xs tracking-widest uppercase mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="+593 000 000 000"
                  className="w-full border border-stone-200 text-stone-800 text-sm px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors placeholder-stone-300"
                />
              </div>
              <div>
                <label className="block text-stone-600 text-xs tracking-widest uppercase mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Cuéntenos qué tipo de piano busca..."
                  className="w-full border border-stone-200 text-stone-800 text-sm px-4 py-3 focus:outline-none focus:border-stone-900 transition-colors resize-none placeholder-stone-300"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-stone-900 text-white text-xs tracking-widest uppercase py-4 hover:bg-stone-700 transition-colors duration-200"
              >
                Enviar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}