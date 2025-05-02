import { projects } from "../data/content";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <h2 className="text-3xl font-bold mb-6 text-pink-brand">Proyectos</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-[#222] border border-gray-700 rounded-2xl hover:shadow-neon shadow-pink-brand/60 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-green-brand">{p.name}</h3>
            <p className="text-gray-300">{p.description}</p>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
