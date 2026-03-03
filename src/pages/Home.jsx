import Hero from "../components/Hero";
import Catalogo from "../components/Catalogo";
import Servicios from "../components/Servicios";
import Testimonios from "../components/Testimonios";
import Contacto from "../components/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Catalogo />
      <Servicios />
      <Testimonios />
      <Contacto />
    </>
  );
}