// src/components/Contacto.jsx
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <motion.section
      id="contacto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <h2 className="text-3xl font-bold mb-6 text-pink-brand">Contacto</h2>
      <form
        action="https://formspree.io/f/mrbqpbqb"
        method="POST"
        className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-700 space-y-4"
        >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          className="w-full p-3 bg-[#222] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-pink-brand"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          required
          className="w-full p-3 bg-[#222] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-pink-brand"
        />
        <textarea
          name="message"
          placeholder="Escribe tu mensaje"
          rows="5"
          required
          className="w-full p-3 bg-[#222] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-pink-brand"
        ></textarea>
        <button
          type="submit"
          className="bg-pink-brand text-black font-semibold py-2 px-6 rounded-md hover:bg-green-brand transition"
        >
          Enviar mensaje
        </button>
      </form>
    </motion.section>
  );
}
