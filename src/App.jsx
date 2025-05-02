import { Helmet } from "react-helmet-async";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Comunidad from "./components/comunidad";
import Contacto from "./components/Contacto";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Carli Code | Portfolio</title>
        <meta name="description" content="Portfolio de Carli Code – Especialista en IA, desarrollo y charlas sobre inteligencia artificial." />
      </Helmet>
      <Hero />
      <Projects />
      <Comunidad />
      <Contacto />
      <footer id="contact" className="py-16 text-center text-gray-500">
        © {new Date().getFullYear()} — Hecho con 🐍, ☕ y mucho 💜
      </footer>
    </>
  );
}
