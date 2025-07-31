import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  // Solo en la página de inicio usamos anclas, en otras páginas llevamos al inicio
  const projectsLink = isHomePage ? "#projects" : "/#projects";
  const communityLink = isHomePage ? "#comunidad" : "/#comunidad";
  const contactLink = isHomePage ? "#contact" : "/#contact";

  return (
    <nav className="flex justify-center gap-8 py-4 text-lg font-semibold">
      <Link to="/" className="hover:text-pink-brand transition">Inicio</Link>
      <a href={projectsLink} className="hover:text-pink-brand transition">Proyectos</a>
      <a href={communityLink} className="hover:text-pink-brand transition">Comunidad</a>
      <Link to="/experiencia" className="hover:text-pink-brand transition">Experiencia</Link>
      <Link to="/hobbies" className="hover:text-pink-brand transition">Hobbies</Link>
      <Link to="/influencer" className="hover:text-pink-brand transition">Influencer</Link>
      <a href={contactLink} className="hover:text-pink-brand transition">Contacto</a>
    </nav>
  );
}
