import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

// Importar imágenes para Speaking
import speaking1 from "../data/photos/speaking_1.JPEG";
import speaking2 from "../data/photos/speaking_2.JPEG";
import speaking3 from "../data/photos/speaking_3.JPG";
import speaking4 from "../data/photos/speaking_4.jpg";
import speaking5 from "../data/photos/speaking_5.JPEG";
import speaking6 from "../data/photos/speaking_6.JPEG";
import speaking7 from "../data/photos/speaking_7.jpg";
import speaking8 from "../data/photos/speaking_8.JPEG";
import speaking9 from "../data/photos/speaking_9.jpg";

// Importar imágenes para Travel
import travel1 from "../data/photos/travel_1.JPEG";
import travel2 from "../data/photos/travel_2.jpg";
import travel3 from "../data/photos/travel_3.JPG";
import travel4 from "../data/photos/travel_4.JPG";
import travel5 from "../data/photos/travel_5.jpg";
import travel6 from "../data/photos/travel_6.jpg";
import travel7 from "../data/photos/travel_7.jpg";
import travel8 from "../data/photos/travel_8.JPG";
import travel9 from "../data/photos/travel_9.jpg";

// Importar imágenes para Archery
import archery1 from "../data/photos/archery_1.JPEG";
import archery2 from "../data/photos/archery_2.JPEG";
import archery3 from "../data/photos/archery_3.JPEG";
import archery4 from "../data/photos/archery_4.JPEG";
import archery5 from "../data/photos/archery_5.JPEG";
import archery6 from "../data/photos/archery_6.jpg";
import archery7 from "../data/photos/archery_7.jpg";
import archery8 from "../data/photos/archery_8.JPEG";
import archery9 from "../data/photos/archery_9.JPEG";

const hobbies = [
  {
    id: "speaking",
    title: "Public Speaking",
    description: "Compartir conocimientos sobre inteligencia artificial y desarrollo a través de conferencias, talleres y charlas es una de mis mayores pasiones.",
    images: [speaking1, speaking2, speaking3, speaking4, speaking5, speaking6, speaking7, speaking8, speaking9]
  },
  {
    id: "travel",
    title: "Viajes",
    description: "Explorar nuevos lugares, culturas y paisajes es una fuente constante de inspiración para mí. Cada viaje es una oportunidad para aprender y crecer.",
    images: [travel1, travel2, travel3, travel4, travel5, travel6, travel7, travel8, travel9]
  },
  {
    id: "archery",
    title: "Tiro con Arco",
    description: "El tiro con arco me enseña paciencia, precisión y concentración. Es un deporte que combina perfectamente la técnica física con la fortaleza mental.",
    images: [archery1, archery2, archery3, archery4, archery5, archery6, archery7, archery8, archery9]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Hobbies() {
  return (
    <div className="py-20 text-white">
      <Helmet>
        <title>Carli Code | Hobbies</title>
        <meta name="description" content="Mis pasatiempos favoritos: public speaking, viajes y tiro con arco." />
      </Helmet>
      
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-pink-brand">Mis Hobbies</h1>
      </div>
      
      <p className="text-xl text-gray-300 mb-16">
        Más allá de la tecnología y la inteligencia artificial, estos son los pasatiempos que me apasionan y ayudan a mantener un equilibrio en mi vida.
      </p>
      
      {hobbies.map((hobby, index) => (
        <motion.section 
          key={hobby.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`mb-24 ${index % 2 !== 0 ? 'bg-gray-800/30 py-16 -mx-4 px-4' : ''}`}
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-green-brand">{hobby.title}</h2>
            <p className="text-gray-300 text-lg">{hobby.description}</p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {hobby.images.map((image, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg shadow-lg h-64 relative"
              >
                <img 
                  src={image} 
                  alt={`${hobby.title} - Imagen ${i+1}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
}
