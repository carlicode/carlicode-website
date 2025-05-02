import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/content";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";

const experiencia = [
  {
    cargo: "AI engineer",
    empresa: "Nowbit",
    fecha: "Feb 2025 - presente",
    ubicacion: "Remote",
    tareas: ["Develop AI agents."]
  },
  {
    cargo: "AI In-house Teacher",
    empresa: "Platzi",
    fecha: "March 2024 - October 2024",
    ubicacion: "Remote",
    tareas: ["Delivered courses on Python, LangChain, and virtual environments."]
  },
  {
    cargo: "Head of AI",
    empresa: "Dapta",
    fecha: "Jan 2024 - March",
    ubicacion: "Remote - USA",
    tareas: ["Built contextual assistants using RAG.", "Directed AI projects, optimized NLP pipelines and models with LLMs, and instructed the team on emerging AI technologies."]
  },
  {
    cargo: "Professor",
    empresa: "Platzi",
    fecha: "March 2023 - July 2023",
    ubicacion: "Cochabamba - Bolivia",
    tareas: ["Taught the course 'Creating Chatbots with OpenAI.'"]
  },
  {
    cargo: "Co-founder & CEO",
    empresa: "Menti Academy",
    fecha: "October 2020 - November 2024",
    ubicacion: "Cochabamba - Bolivia",
    tareas: ["Managed an educational startup focused on coding for kids."]
  },
  {
    cargo: "Associate Researcher",
    empresa: "Artificial Intelligence Institute (IIC) of the Private Bolivian University",
    fecha: "March 2020 - March 2023",
    ubicacion: "Cochabamba - Bolivia",
    tareas: ["Developed next-generation deep learning models for conversational AI in Spanish.", "Built MATILDA, a RASA chatbot trained with data about scientific women."]
  },
  {
    cargo: "Machine Learning Freelancer",
    empresa: "Trascender Global",
    fecha: "Feb 2021 - Feb 2022",
    ubicacion: "Bogotá - Colombia",
    tareas: ["Designed and developed ETL workflows for extracting, transforming, and loading data from diverse sources.", "Collaborated on data labeling for AI models with image analysis."]
  },
  {
    cargo: "Python Instructor",
    empresa: "CISCO Networking Academy",
    fecha: "April 2020 - December 2020",
    ubicacion: "Cochabamba - Bolivia",
    tareas: ["Taught online courses on Python essentials development."]
  },
  {
    cargo: "Research Assistant - Robotics Lab",
    empresa: "TRUEXTEND",
    fecha: "Sep 2019 - Nov 2019",
    ubicacion: "Cochabamba - Bolivia",
    tareas: ["Researched and developed VEX Robotics projects.", "Taught programming and robotics to children."]
  },
  {
    cargo: "UI/UX Intern",
    empresa: "Zékiri",
    fecha: "Apr 2019 - Jul 2019",
    ubicacion: "Cochabamba - Bolivia",
    tareas: ["Designed UI wireframes for web and mobile applications."]
  }
];

const logros = [
  "2016: 3rd place national phase - ACM-ICPC Bolivia.",
  "2016: 2nd place - International NASA Space Apps Challenge, Cochabamba."
];


const skills = [
  {
    categoria: "Programming Languages",
    tecnologias: ["Python (TensorFlow, PyTorch, Keras)", "pandas, matplotlib, numpy, requests, BeautifulSoup, OpenCV"]
  },
  {
    categoria: "Machine Learning & Computer Vision",
    tecnologias: ["Supervised learning", "Computer Vision"]
  },
  {
    categoria: "Conversational AI",
    tecnologias: ["Langchain and RASA Framework", "Contextual models with Langchain", "Gemini multimodal applications", "OpenAI: Personalization, Fine-tuning, Transfer Learning"]
  },
  {
    categoria: "Natural Language Processing (NLP)",
    tecnologias: ["Text Embeddings using Chroma"]
  },
  {
    categoria: "DevOps",
    tecnologias: ["Docker / Jupyter notebooks", "Google Cloud: Storage I/O"]
  }
];

const comunidades = [
  "Scientific Society of Systems and Informatics Engineering Students (SCESI)",
  "Google Developers Group (GDG) - Instructor in ML & SL",
  "Women Techmakers",
  "Cochabamba AI",
  "Lead at PyLadies Cochabamba - Organizer and teacher for women and girls",
  "Python Community Cochabamba - Organizer (logistics, promotion, programming)"
];

const certificaciones = [
  "Dynamic and Stochastic Programming with Python - Platzi",
  "OOP and Algorithms in Python - Platzi",
  "Intro to Probabilistic Thinking - Platzi",
  "Computational Thinking with Python - Platzi",
  "CNNs in TensorFlow - Coursera",
  "AWS Machine Learning Foundations - Udacity",
  "Supervised Learning with Scikit-learn - Datacamp",
  "Foundation of Generative AI - <a href='https://www.udacity.com/certificate/e/e70454be-b7bc-11ef-8c5b-1fee656b8520' target='_blank'>Udacity</a>",
  "Analyze Speech and Language with Google APIs - <a href='https://www.credly.com/badges/5b1fcac5-d620-4b15-b0eb-53b1fa0f68e3/linked_in_profile' target='_blank'>Credly</a>",
  "Explore Generative AI with the Vertex AI Gemini API - <a href='https://www.credly.com/badges/dba0e742-7da5-4846-b444-0f18e0edac06/linked_in_profile' target='_blank'>Credly</a>",
  "Get Started with Cloud Storage - <a href='https://www.credly.com/badges/24a6da56-ab03-4b5d-adfc-9d3dcd3efeeb/linked_in_profile' target='_blank'>Credly</a>",
  "Prompt Design in Vertex AI - <a href='https://www.credly.com/badges/ab6a61c9-e0b0-410b-89bb-3aef91a29d51/linked_in_profile' target='_blank'>Credly</a>",
  "Build a Data Science Web App with Streamlit and Python - <a href='https://www.coursera.org/account/accomplishments/verify/US3VUKHK7YSW' target='_blank'>Coursera</a>",
  "Instructor 1 Year of Service - Cisco - <a href='https://www.credly.com/badges/5769ca48-d09c-4549-ba3a-e82545a31212?source=linked_in_profile' target='_blank'>Credly</a>"
];

const voluntariado = [
  "Esclavas del Sagrado Corazón de Jesús - Community volunteering (2012)",
  "TRUEXTEND - Coach at robotics challenge (2018)"
];

export default function Experiencia() {
  const [showLine1, setShowLine1] = useState(true);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);

  useEffect(() => {
    // Mostrar segunda línea después de que termine la primera
    if (showLine1) {
      const timer1 = setTimeout(() => {
        setShowLine2(true);
      }, 2500); // Tiempo para escribir "hello world()" + pequeña pausa
      
      return () => clearTimeout(timer1);
    }
  }, [showLine1]);

  useEffect(() => {
    // Mostrar tercera línea después de que termine la segunda
    if (showLine2) {
      const timer2 = setTimeout(() => {
        setShowLine3(true);
      }, 2500); // Tiempo para escribir "I'm Carli Code" + pequeña pausa
      
      return () => clearTimeout(timer2);
    }
  }, [showLine2]);

  return (
    <div className="py-20 text-white">
      <Helmet>
        <title>Carli Code | Experiencia Profesional</title>
        <meta name="description" content="Experiencia profesional, certificaciones y habilidades técnicas de Carli Code en el campo de la IA y desarrollo." />
      </Helmet>
      <div className="flex flex-col items-center mb-12">
        <div className="text-center font-mono">
          {showLine1 && (
            <div className="text-green-brand text-xl mb-3 flex">
              <span className="mr-2">&gt;</span>
              <Typewriter
                words={["hello world()"]}
                cursor={true}
                cursorStyle="_"
                typeSpeed={80}
                delaySpeed={300}
              />
            </div>
          )}
          
          {showLine2 && (
            <div className="text-green-brand text-xl mb-3 flex">
              <span className="mr-2">&gt;</span>
              <Typewriter
                words={["I'm Carli Code"]}
                cursor={true}
                cursorStyle="_"
                typeSpeed={50}
                delaySpeed={300}
              />
            </div>
          )}
          
          {showLine3 && (
            <div className="text-green-brand text-xl flex">
              <span className="mr-2">&gt;</span>
              <Typewriter
                words={["Machine Learning Engineer & AI Specialist"]}
                cursor={true}
                cursorStyle="_" 
                typeSpeed={50}
                delaySpeed={300}
              />
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a 
            href="https://www.linkedin.com/in/carlicode/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 rounded-full hover:bg-pink-brand/20 transition flex items-center gap-2"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a 
            href="https://github.com/carlicode" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 rounded-full hover:bg-pink-brand/20 transition flex items-center gap-2"
            aria-label="GitHub Profile"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
          <a 
            href="https://platzi.com/profes/carlicode/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 rounded-full hover:bg-pink-brand/20 transition flex items-center gap-2"
            aria-label="Platzi Courses"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M10.6392 1.127c2.2392 2.2387 2.2392 5.8628 0 8.101-2.2387 2.2392-5.8623 2.2392-8.101 0-2.2392-2.2382-2.2392-5.8623 0-8.101 2.2387-2.2387 5.8623-2.2387 8.101 0" />
              <path d="M23.9975 10.6577c0 3.5458-1.0182 7.009-2.9615 10.026-1.5672 2.435-3.5337 3.3155-5.9577 2.7912-1.6095-.347-2.5467-1.7812-2.3457-3.4422.168-1.393 1.176-2.443 2.5467-2.6482 1.3767-.2127 2.584.5617 3.0382 1.9505.3197.9742 1.494 1.344 2.2785.5557 2.0175-2.0295 3.069-4.6905 3.069-7.4327 0-2.7422-1.0515-5.4032-3.069-7.4322-.7845-.7882-1.9588-.4185-2.2785.5557-.4542 1.3888-1.6615 2.1632-3.0382 1.9505-1.3707-.2052-2.3787-1.2553-2.5467-2.6482-.201-1.6611.7362-3.0953 2.3457-3.4423 2.424-.5242 4.3905.3563 5.9577 2.7913 1.9433 3.017 2.9615 6.4802 2.9615 10.026Z" />
            </svg>
            Platzi
          </a>
          <a 
            href="https://www.cloudskillsboost.google/public_profiles/14e01263-8531-4600-88a2-320eea1f6c27" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 rounded-full hover:bg-pink-brand/20 transition flex items-center gap-2"
            aria-label="Cloud Skills Boost Profile"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a9.321 9.321 0 0 0 9.262 7.363 9.405 9.405 0 0 0 5.806-2.063l-.012.01.033-.026a9.335 9.335 0 0 0 1.827-1.54l.008-.008-.01.011a9.583 9.583 0 0 0 .855-1.143c.395-.648.71-1.336.886-2.06.47-1.748.197-3.584-.428-5.297.18.24.414-.26 0 0 1.555-4.95-1.536-10.293-6.572-11.997A9.321 9.321 0 0 0 12.19 2.38zm4.034 7.495a4.487 4.487 0 0 1 1.483 3.126 4.403 4.403 0 0 1-1.483 3.128 4.471 4.471 0 0 1-6.267 0 4.4 4.4 0 0 1-1.48-3.128 4.485 4.485 0 0 1 1.48-3.126 4.464 4.464 0 0 1 6.267 0z" />
            </svg>
            Cloud Skills
          </a>
          <a 
            href="https://www.credly.com/users/carli-code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 rounded-full hover:bg-pink-brand/20 transition flex items-center gap-2"
            aria-label="Credly Profile"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm5.3 15.1l-5.3 3.2-5.3-3.2V8.8L12 5l5.3 3.8v8.3z"/>
              <path d="M12 9l-3 2v3l3 2 3-2v-3l-3-2z"/>
            </svg>
            Credly
          </a>
          <a 
            href="https://g.dev/carlicode" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 rounded-full hover:bg-pink-brand/20 transition flex items-center gap-2"
            aria-label="Google Developer Profile"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
            Google Dev
          </a>
        </div>
      </div>

      {experiencia.map((exp) => (
        <motion.div
          key={exp.cargo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 border-l-4 border-pink-brand pl-4"
        >
          <h2 className="text-xl font-semibold">{exp.cargo}</h2>
          <p className="text-sm text-gray-400">
            {exp.empresa} — {exp.fecha} ({exp.ubicacion})
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            {exp.tareas.map((tarea, i) => (
              <li key={i}>{tarea}</li>
            ))}
          </ul>
        </motion.div>
      ))}

      <h2 className="text-3xl font-bold mb-4 text-pink-brand mt-16">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {certificaciones
          .slice()
          .sort((a, b) => {
            const aHasLink = a.includes("<a href=");
            const bHasLink = b.includes("<a href=");
            
            // Sort: linked items first, non-linked items after
            if (aHasLink && !bHasLink) return -1;
            if (!aHasLink && bHasLink) return 1;
            return 0;
          })
          .map((c, i) => {
          // Extract certificate name and link if present
          const hasLink = c.includes("<a href=");
          const certName = hasLink ? c.split("<a href=")[0].trim() : c;
          
          // Create more accessible link with proper attributes
          let accessibleCert = c;
          if (hasLink) {
            // Replace simple links with more accessible versions
            accessibleCert = accessibleCert.replace(
              /<a href='([^']+)' target='_blank'>/g, 
              `<a href='$1' target='_blank' rel='noopener noreferrer' aria-label='Ver certificado de ${certName}' class='text-green-brand hover:underline flex items-center'><span>View Certificate</span><span class='sr-only'> (opens in a new window)</span>`
            );
          }
          
          return (
            <div key={i} className="p-4 bg-gray-800 rounded-lg border border-pink-brand hover:shadow-md hover:shadow-pink-brand/20 transition">
              <div className="flex flex-col h-full">
                <h3 className="text-lg font-semibold text-white mb-2">{certName}</h3>
                {hasLink && (
                  <div className="mt-auto pt-2">
                    <span dangerouslySetInnerHTML={{ __html: accessibleCert.includes("<a href=") ? 
                      accessibleCert.replace(certName, "") : accessibleCert }} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="text-3xl font-bold mb-4 text-pink-brand">Technical Skills</h2>
      {skills.map((s, i) => (
        <div key={i} className="mb-4">
          <h4 className="text-lg font-semibold text-green-brand">{s.categoria}</h4>
          <ul className="list-disc list-inside text-gray-300">
            {s.tecnologias.map((tech, j) => (
              <li key={j}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 className="text-3xl font-bold mb-4 text-pink-brand mt-16">
        Proyectos
      </h2>
      {projects.map((p, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-xl font-semibold">{p.name}</h3>
          <p className="text-gray-300">{p.description}</p>
        </div>
      ))}

      <h2 className="text-3xl font-bold mb-4 text-pink-brand mt-16">Achievements</h2>
      <ul className="list-disc list-inside mb-12 text-gray-300">
        {logros.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-3xl font-bold mb-4 text-pink-brand mt-16">Communities</h2>
      <ul className="list-disc list-inside mb-12 text-gray-300">
        {comunidades.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <h2 className="text-3xl font-bold mb-4 text-pink-brand">Volunteering</h2>
      <ul className="list-disc list-inside mb-12 text-gray-300">
        {voluntariado.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>

      <div className="text-center mt-16">
        <a href="/" className="text-pink-brand hover:underline">
          ← Volver al inicio
        </a>
      </div>
    </div>
  );
}
