import { useState } from "react";
import { productos } from "../data/productos";
import CardProducto from "./CardProducto";

const tipos = ["Todos", "Piano de Cola", "Piano Vertical", "Piano Digital"];

export default function Catalogo() {
  const [filtro, setFiltro] = useState("Todos");
  const filtrados = filtro === "Todos" ? productos : productos.filter((p) => p.tipo === filtro);

  return (
    <section className="py-24 bg-white" id="catalogo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Colección 2025</p>
            <h2 className="text-4xl font-light text-stone-900">Nuestro <span className="font-semibold">Catálogo</span></h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tipos.map((t) => (
              <button
                key={t}
                onClick={() => setFiltro(t)}
                className={`text-xs px-4 py-2 tracking-widest uppercase border transition-colors duration-200 ${
                  filtro === t
                    ? "bg-stone-900 text-white border-stone-900"
                    : "bg-white text-stone-500 border-stone-200 hover:border-stone-400"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtrados.map((p) => (
            <CardProducto key={p.id} producto={p} />
          ))}
        </div>
        <div className="text-center mt-14">
          <p className="text-stone-400 text-sm mb-4">¿No encuentra lo que busca?</p>
          <button className="border border-stone-300 text-stone-700 text-xs px-8 py-3 tracking-widest uppercase hover:border-stone-900 hover:text-stone-900 transition-colors">
            Solicitar Instrumento Personalizado
          </button>
        </div>
      </div>
    </section>
  )};