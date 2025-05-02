import BackgroundParticles from "./BackgroundParticles";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center justify-center text-center py-32 overflow-hidden"
    >
      <BackgroundParticles />

      <div className="absolute inset-0 -z-20 animate-background bg-gradient-to-br from-pink-brand via-black-brand to-green-brand opacity-20 blur-3xl" />

      <h1 className="text-4xl font-bold mb-4 z-10">
        ¡Hola! Soy <span className="text-pink-brand">Carli Code</span> 🚀
      </h1>
      <p className="text-xl max-w-xl mx-auto z-10">
        Programadora de IA, speaker y creadora de contenido.
      </p>

      <p className="font-mono text-green-brand mt-4 z-10 text-lg">
        &gt;{" "}
        <Typewriter
          words={["hello world()"]}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          delaySpeed={1500}
        />
      </p>
    </motion.header>
  );
}
