import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import BackgroundParticles from "../components/BackgroundParticles";
import { Youtube, Instagram, Twitch, ChevronLeft, ChevronRight, Code, Video, Users } from "lucide-react";

const socialStats = [
  { 
    platform: "TikTok", 
    followers: "145 MIL",
    icon: (props) => (
      <svg viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 015.4 5.82C4.9 6.32 4.5 7 4.3 7.76c-.7 3.04 3.89 6.71 3.89 6.71s4.59 3.67 3.89 6.71c-.2.76-.6 1.44-1.1 1.94a4.278 4.278 0 0111.2 0c.5-.5.9-1.18 1.1-1.94.7-3.04-3.89-6.71-3.89-6.71s-4.59-3.67-3.89-6.71c.2-.76.6-1.44 1.1-1.94z"/>
      </svg>
    ),
    link: "https://www.tiktok.com/@carli.code"
  },
  { 
    platform: "Instagram", 
    followers: "14 MIL",
    icon: Instagram,
    link: "https://www.instagram.com/carli.code/"
  },
  { 
    platform: "Twitch", 
    followers: "3 MIL",
    icon: Twitch,
    link: "https://www.twitch.tv/carli_code"
  },
  { 
    platform: "Youtube", 
    followers: "1 MIL",
    icon: Youtube,
    link: "https://www.youtube.com/@carli_code"
  }
];

const trafficSources = [
  { source: "Buscar", percentage: 53.3 },
  { source: "Para ti", percentage: 31.2 },
  { source: "Perfil personal", percentage: 9.6 },
  { source: "Siguiendo", percentage: 5.7 },
  { source: "Sonido", percentage: 0.2 }
];

const demographics = {
  gender: [
    { label: "Hombres", value: 57 },
    { label: "Mujeres", value: 42 },
    { label: "Otro", value: 1 }
  ],
  age: [
    { range: "18-24", percentage: 30.6 },
    { range: "25-34", percentage: 48.9 },
    { range: "35-44", percentage: 13.8 },
    { range: "45-54", percentage: 5.0 },
    { range: "55+", percentage: 1.7 }
  ]
};

const prices = {
  tiktok: [
    { description: "VIDEO DE 60 A 80 SEGUNDOS", price: 80 },
    { description: "VIDEO DE 40 A 59 SEGUNDOS", price: 75 },
    { description: "VIDEO DE MENOS DE 40 SEGUNDOS", price: 60 }
  ],
  instagramReel: [
    { description: "VIDEO DE 60 A 80 SEGUNDOS", price: 30 },
    { description: "VIDEO DE 40 A 59 SEGUNDOS", price: 25 },
    { description: "VIDEO DE MENOS DE 40 SEGUNDOS", price: 15 }
  ],
  instagramStories: [
    { description: "HISTORIA IMAGEN", price: 10 },
    { description: "HISTORIA HABLANDO Y PRESENTANDO", price: 25 },
    { description: "HISTORIA HABLANDO Y PRESENTANDO + COMPARTIR LINK", price: 30 }
  ]
};

const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 015.4 5.82C4.9 6.32 4.5 7 4.3 7.76c-.7 3.04 3.89 6.71 3.89 6.71s4.59 3.67 3.89 6.71c-.2.76-.6 1.44-1.1 1.94a4.278 4.278 0 0111.2 0c.5-.5.9-1.18 1.1-1.94.7-3.04-3.89-6.71-3.89-6.71s-4.59-3.67-3.89-6.71c.2-.76.6-1.44 1.1-1.94z"/>
  </svg>
);

const locations = [
  { label: "Bolivia", percentage: 29.0 },
  { label: "Otros", percentage: 19.9 },
  { label: "México", percentage: 13.3 },
  { label: "Perú", percentage: 13.1 },
  { label: "Colombia", percentage: 6.0 },
  { label: "Brasil", percentage: 4.5 },
  { label: "Ecuador", percentage: 4.1 },
  { label: "Chile", percentage: 2.8 },
  { label: "Argentina", percentage: 2.7 },
  { label: "Guatemala", percentage: 2.4 },
  { label: "Estados Unidos", percentage: 2.2 }
];

// TikTok video IDs to embed
const videoIds = [
  "7205955488666651910",
  "7333576536383130886",
  "7429755114442788101",
  "7350286655393189125"
];

export default function Influencer() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  // Carousel state for single video display
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="relative overflow-hidden">
      <BackgroundParticles />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <Helmet>
          <title>Influencer - Carli Code</title>
          <meta name="description" content="Carli Code como influencer en tecnología y desarrollo" />
        </Helmet>
        {/* Typewriter Intro */}
        <div className="text-center my-8">
          <div className="text-green-brand text-xl flex justify-center items-center">
            <span className="mr-2">&gt;</span>
            <Typewriter
              words={["I'm Carli Code"]}
              cursor={true}
              cursorStyle="_"
              typeSpeed={50}
              delaySpeed={300}
            />
          </div>
        </div>

        {/* Sección de Introducción - UI dinámico */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-surface-dark border border-gray-700 rounded-3xl p-8 md:p-12 shadow-neon"
        >
          <h1 className="text-5xl font-extrabold text-pink-brand text-center mb-6">
            CARLA FLORIDA
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { Icon: Code, label: 'Desarrolladora AI' },
              { Icon: Video, label: 'Creadora de Contenido' },
              { Icon: Users, label: 'Impulsa Comunidad' }
            ].map(({ Icon, label }, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center p-4 bg-[#111] rounded-2xl hover:bg-[#222] transition"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <Icon className="w-12 h-12 text-green-brand mb-3" />
                <p className="text-lg text-gray-300 font-medium text-center">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sobre la Creadora */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-pink-brand text-center">SOBRE LA CREADORA</h2>
          <p className="text-lg text-center mb-8">
            Principalmente comparto contenido en Tik Tok donde cuento con una comunidad sólida 
            que siempre me apoya y me aporta con buena onda. Ademaes soy colaboro con google 
            cómo embajadora de WTM y participo activamente en la comunidad de programadores.
          </p>
        </motion.section>

        {/* Videos Destacados Carousel */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-green-brand">VIDEOS DESTACADOS</h2>
          <div className="relative mx-auto w-64 sm:w-80 md:w-96 h-80 sm:h-96 md:h-[600px] overflow-hidden rounded-2xl shadow-neon transition-transform hover:scale-105">
            {/* Left arrow overlay */}
            <button
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 p-1 rounded-full text-green-brand hover:text-pink-brand transition z-20"
              onClick={() => setCurrentIndex((currentIndex - 1 + videoIds.length) % videoIds.length)}
              aria-label="Anterior video"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <iframe
              src={`https://www.tiktok.com/embed/v2/${videoIds[currentIndex]}?autoplay=1&mute=1`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            {/* Right arrow overlay */}
            <button
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 p-1 rounded-full text-green-brand hover:text-pink-brand transition z-20"
              onClick={() => setCurrentIndex((currentIndex + 1) % videoIds.length)}
              aria-label="Siguiente video"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
              <a
                href={`https://www.tiktok.com/@carli.code/video/${videoIds[currentIndex]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-green-brand to-pink-brand text-black text-base sm:text-lg font-bold rounded-full shadow-lg hover:from-green-brand/80 hover:to-pink-brand/80 transition"
              >
                <TikTokIcon className="w-6 h-6 text-black" />
                Ver en TikTok
              </a>
            </div>
          </div>
        </motion.section>

        {/* Estadísticas Sociales */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-pink-brand text-center">
            Estadísticas Sociales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {socialStats.map(({ platform, followers, icon: Icon, link }) => (
              <motion.a
                key={platform}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-surface-dark border border-gray-700 rounded-3xl hover:shadow-neon shadow-pink-brand/40 transition"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-green-brand group-hover:text-pink-brand transition" />
                </div>
                <h3 className="text-3xl font-extrabold mb-2 text-green-brand group-hover:text-pink-brand transition">
                  {followers}
                </h3>
                <p className="text-gray-400 text-center">Seguidores en {platform}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Fuentes de Tráfico */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-green-brand">FUENTES DE TRÁFICO</h2>
          <div className="space-y-4">
            {trafficSources.map((source, idx) => (
              <div key={source.source} className="relative group">
                <div className="flex justify-between mb-1 text-gray-300 group-hover:text-white transition">
                  <span>{source.source}</span>
                  <span>{source.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded overflow-hidden">
                  <motion.div
                    className={`h-full ${idx % 2 === 0 ? 'bg-green-brand' : 'bg-pink-brand'} rounded`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${source.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Demografía */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-green-brand">DEMOGRAFÍA</h2>
          
          {/* Género */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">SEXO</h3>
            <div className="grid grid-cols-3 gap-4">
              {demographics.gender.map((item) => (
                <motion.div
                  key={item.label}
                  className="block p-4 bg-[#222] border border-gray-700 rounded-2xl hover:shadow-neon shadow-pink-brand/60 transition"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-green-brand">{item.value}%</div>
                  <div className="text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Edad */}
          <div>
            <h3 className="text-xl font-semibold mb-4">EDAD</h3>
            <div className="space-y-4">
              {demographics.age.map((item) => (
                <div key={item.range} className="relative group shadow-inner hover:shadow-lg transition-shadow">
                  <div className="flex justify-between mb-1 text-gray-300 group-hover:text-white transition">
                    <span>{item.range}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded overflow-hidden">
                    <motion.div
                      className="h-full bg-green-brand rounded"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Ubicaciones */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-green-brand">UBICACIONES</h2>
          <div className="space-y-4">
            {locations.map((loc, idx) => (
              <div key={loc.label} className="relative group shadow-inner hover:shadow-lg transition-shadow">
                <div className="flex justify-between mb-1 text-gray-300 group-hover:text-white transition">
                  <span>{loc.label}</span>
                  <span>{loc.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded overflow-hidden">
                  <motion.div
                    className={`h-full ${idx % 2 === 0 ? 'bg-green-brand' : 'bg-pink-brand'} rounded`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${loc.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Precios */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-pink-brand">PRECIOS POR PUBLICACIÓN</h2>
          
          {/* TikTok Pricing */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-pink-brand">TikTok Pricing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {prices.tiktok.map((item) => (
                <motion.div
                  key={item.description}
                  className="p-6 bg-[#222] border border-gray-700 rounded-2xl hover:shadow-neon shadow-pink-brand/40 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-lg font-semibold text-green-brand mb-2">{item.description}</h4>
                  <p className="text-3xl font-extrabold text-pink-brand">${item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Instagram Reels Pricing */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-pink-brand">Instagram Reels Pricing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {prices.instagramReel.map((item) => (
                <motion.div
                  key={item.description}
                  className="p-6 bg-[#222] border border-gray-700 rounded-2xl hover:shadow-neon shadow-pink-brand/40 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-lg font-semibold text-green-brand mb-2">{item.description}</h4>
                  <p className="text-3xl font-extrabold text-pink-brand">${item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Instagram Stories Pricing */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-pink-brand">Instagram Stories Pricing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {prices.instagramStories.map((item) => (
                <motion.div
                  key={item.description}
                  className="p-6 bg-[#222] border border-gray-700 rounded-2xl hover:shadow-neon shadow-pink-brand/40 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-lg font-semibold text-green-brand mb-2">{item.description}</h4>
                  <p className="text-3xl font-extrabold text-pink-brand">${item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-400 mt-8">
            PARA CUALQUIER COMBINACIÓN DE PUBLICACIÓN O COTIZACIÓN DE PAQUETE, COMUNICARSE AL CORREO
          </p>
          <p className="text-center text-pink-brand font-semibold mt-2">
            CARLI.F.ROMAN@GMAIL.COM
          </p>
        </motion.section>

        {/* Contacto */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-pink-brand">CONTACTO</h2>
          <p className="text-lg mb-2">(591) 69533423</p>
          <p className="text-lg mb-2">carli.f.roman@gmail.com</p>
          <p className="text-lg">@Carli.code</p>
        </motion.section>

        <div className="text-center mt-16">
          <a href="/" className="text-pink-brand hover:underline">
            ← Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
} 