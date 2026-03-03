export default function CardProducto({ producto }) {
  const mensaje = encodeURIComponent(
    `Hola, me interesa cotizar el ${producto.nombre} (${producto.tipo}) por ${producto.precio}.`
  );

  const url = `https://wa.me/${producto.whatsapp}?text=${mensaje}`;

  return (
    <article className="group bg-white border border-stone-200 hover:border-stone-400 transition-all duration-300 overflow-hidden">
      
      <div className="relative overflow-hidden bg-stone-50 h-64">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-white border border-stone-200 text-stone-600 text-xs px-3 py-1 tracking-widest uppercase">
            {producto.tipo}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-stone-900 font-semibold text-lg tracking-tight">
            {producto.nombre}
          </h3>

          <span className="text-stone-900 font-light text-lg ml-4 whitespace-nowrap">
            {producto.precio}
          </span>
        </div>

        <p className="text-stone-500 text-sm leading-relaxed mb-6">
          {producto.descripcion}
        </p>

        <div className="flex flex-col gap-2">
          
          {/* Botón WhatsApp */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-stone-900 text-white text-xs tracking-widest uppercase py-3 text-center hover:bg-stone-700 transition-colors duration-200"
          >
            Cotizar por WhatsApp
          </a>

          {/* Botón Detalles */}
          <button className="w-full border border-stone-200 text-stone-600 text-xs tracking-widest uppercase py-3 hover:border-stone-400 hover:text-stone-900 transition-colors duration-200">
            Ver Detalles
          </button>

        </div>
      </div>
    </article>
  );
}