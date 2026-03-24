import { useState, useEffect } from "react";

function Modal({ imagenes, indiceInicial, onCerrar }) {
  const [indice, setIndice] = useState(indiceInicial);
  const total = imagenes.length;

  const anterior = () => setIndice((prev) => (prev - 1 + total) % total);
  const siguiente = () => setIndice((prev) => (prev + 1) % total);

  // Cerrar con Escape y navegar con flechas del teclado
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onCerrar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") siguiente();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onCerrar}
    >
      {/* Contenedor interior — detiene propagación del click */}
      <div
        className="relative w-full max-w-4xl mx-4 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Botón cerrar */}
        <button
          onClick={onCerrar}
          className="absolute -top-10 right-0 text-white/70 hover:text-white text-xs tracking-widest uppercase flex items-center gap-2 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Cerrar
        </button>

        {/* Imagen principal */}
        <div className="relative bg-stone-950 flex items-center justify-center" style={{ height: "70vh" }}>
          <img
            src={imagenes[indice]}
            alt={`Imagen ${indice + 1}`}
            className="max-w-full max-h-full object-contain"
          />

          {/* Contador */}
          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1 tracking-widest">
            {indice + 1} / {total}
          </div>

          {/* Flechas */}
          {total > 1 && (
            <>
              <button
                onClick={anterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-colors duration-200"
                aria-label="Imagen anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={siguiente}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-colors duration-200"
                aria-label="Imagen siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Miniaturas del modal */}
        {total > 1 && (
          <div className="flex gap-2 justify-center">
            {imagenes.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndice(i)}
                className={`w-16 h-12 overflow-hidden border-2 transition-all duration-200 ${
                  i === indice ? "border-white" : "border-white/20 opacity-50 hover:opacity-80"
                }`}
              >
                <img src={img} alt={`miniatura ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CardProducto({ producto }) {
  const [indice, setIndice] = useState(0);
  const [modalAbierto, setModalAbierto] = useState(false);

  const imagenes = producto.imagenes || [];
  const total = imagenes.length;

  const anterior = (e) => {
    e.stopPropagation();
    setIndice((prev) => (prev - 1 + total) % total);
  };

  const siguiente = (e) => {
    e.stopPropagation();
    setIndice((prev) => (prev + 1) % total);
  };

  const mensaje = encodeURIComponent(
    `Hola, me interesa cotizar el ${producto.nombre} (${producto.tipo}).`
  );
  const url = `https://wa.me/${producto.whatsapp}?text=${mensaje}`;

  return (
    <>
      {/* Modal */}
      {modalAbierto && (
        <Modal
          imagenes={imagenes}
          indiceInicial={indice}
          onCerrar={() => setModalAbierto(false)}
        />
      )}

      <article className="bg-white border border-stone-200 hover:border-stone-400 transition-all duration-300 overflow-hidden">

        {/* Carrusel de imágenes */}
        <div
          className="relative bg-stone-50 h-64 overflow-hidden cursor-zoom-in"
          onClick={() => setModalAbierto(true)}
          title="Clic para ampliar"
        >
          <img
            src={imagenes[indice]}
            alt={`${producto.nombre} - imagen ${indice + 1}`}
            className="w-full h-full object-cover object-center transition-opacity duration-300"
          />

          {/* Ícono de lupa */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/10">
            <div className="w-10 h-10 bg-white/90 flex items-center justify-center shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-6-3v6m-3-3h6" />
              </svg>
            </div>
          </div>

          {/* Badge tipo */}
          <div className="absolute top-4 left-4">
            <span className="bg-white border border-stone-200 text-stone-600 text-xs px-3 py-1 tracking-widest uppercase">
              {producto.tipo}
            </span>
          </div>

          {/* Controles carrusel */}
          {total > 1 && (
            <>
              <button
                onClick={anterior}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors duration-200 shadow-sm z-10"
                aria-label="Imagen anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={siguiente}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors duration-200 shadow-sm z-10"
                aria-label="Imagen siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Puntos */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {imagenes.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setIndice(i); }}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                      i === indice ? "bg-stone-900" : "bg-stone-400"
                    }`}
                  />
                ))}
              </div>

              {/* Contador */}
              <div className="absolute top-4 right-4 bg-white border border-stone-200 text-stone-500 text-xs px-2 py-0.5 z-10">
                {indice + 1} / {total}
              </div>
            </>
          )}
        </div>

        {/* Miniaturas */}
        {total > 1 && (
          <div className="flex gap-1 px-4 pt-3">
            {imagenes.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndice(i)}
                className={`flex-1 h-12 overflow-hidden border transition-all duration-200 ${
                  i === indice ? "border-stone-900" : "border-stone-200 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`miniatura ${i + 1}`} className="w-full h-full object-cover object-center" />
              </button>
            ))}
          </div>
        )}

        {/* Contenido */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-stone-900 font-semibold text-lg tracking-tight">{producto.nombre}</h3>
            <span className="text-stone-900 font-light text-lg ml-4 whitespace-nowrap">{producto.precio}</span>
          </div>
          <p className="text-stone-500 text-sm leading-relaxed mb-6">{producto.descripcion}</p>

          <div className="flex flex-col gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-stone-900 text-white text-xs tracking-widest uppercase py-3 text-center hover:bg-stone-700 transition-colors duration-200"
            >
              Cotizar por WhatsApp
            </a>
            <a
              href="#contacto"
              className="block w-full border border-stone-200 text-stone-600 text-xs tracking-widest uppercase py-3 text-center hover:border-stone-400 hover:text-stone-900 transition-colors duration-200"
            >
              Solicitar Información
            </a>
          </div>
        </div>
      </article>
    </>
  );
}