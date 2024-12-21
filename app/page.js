"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGraduationCap,FaGithub,FaLinkedin,FaEnvelope, FaJsSquare,FaPhoneAlt, FaBriefcase, FaFigma, FaServer, FaWordpress, FaLinux, FaCloud, FaFlask, FaLaravel, FaProjectDiagram, FaLaptopCode, FaTools, FaPhp, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiSupabase, SiMysql, SiPython, SiFlutter } from 'react-icons/si';

export default function Home() {
  return (
    <div className="bg-black text-gray-100">
      {/* Section: Présentation */}
      <section
  id="presentation"
  className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative"
>
  {/* Fond dynamique avec animation de flou */}
  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-900 opacity-40 blur-3xl animate-pulse" />
  
  {/* Image avec animation d'agrandissement */}
  <Image
    src="/favicon.ico"
    alt="Photo de Kounou Gnimassou Gilbert"
    width={200}
    height={200}
    className="rounded-full mb-6 border-4 border-blue-500 animate-pulse hover:scale-110 transition-transform duration-300 ease-in-out"
  />
  
  {/* Titre avec animation de texte dynamique */}
  <motion.h1
    className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Salut, je suis Kounou Gnimassou Gilbert !
  </motion.h1>
  
  {/* Sous-titre avec une animation plus fluide */}
  <motion.p
    className="text-lg text-gray-300 mb-8 px-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
  >
    Développeur, Designer et Créateur de solutions numériques.
  </motion.p>
  
  {/* Boutons d'action */}
  <div className="flex gap-6 mb-8">
    {/* Bouton "Découvrir mes services" */}
    <motion.a
      href="#services"
      className="text-lg bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg transition-colors duration-300 ease-in-out transform hover:scale-105"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      Découvrez mes services
    </motion.a>
    
    {/* Bouton "Me Contacter" */}
    <motion.a
      href="#contact"
      className="text-lg bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition-colors duration-300 ease-in-out transform hover:scale-105"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
    >
      Me Contacter
    </motion.a>
  </div>

  {/* Indication de scroll */}
  <div className="absolute bottom-8 animate-bounce">
    <a href="#services">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-green-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7 7 7-7"
        />
      </svg>
    </a>
  </div>
</section>

      {/* Section: Parcours éducatif */}
      <section id="parcours" className="py-16 px-6 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20" />
        <h2 className="text-4xl font-bold text-center text-green-400 mb-8 flex items-center justify-center gap-2 animate-slideInLeft">
          <FaGraduationCap /> Mon Parcours Éducatif
        </h2>
        <div className="space-y-6 animate-fadeInUp">
          <div>
            <h3 className="text-2xl font-semibold">Licence en Informatique</h3>
            <p className="text-gray-300">Université Islamique du Niger</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Baccalauréat Scientifique</h3>
            <p className="text-gray-300">Lycée Moderne de Zinder</p>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-6 bg-gray-900 relative">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20" />
  <motion.h2
    className="text-4xl font-bold text-center text-green-400 mb-8 flex items-center justify-center gap-2"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Mes Services
  </motion.h2>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <motion.div
      className="service-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Développement Web</h3>
      <p className="text-gray-300">
        Création de sites web responsives, modernes et optimisés. Je développe des solutions adaptées à vos besoins avec une expérience utilisateur de qualité.
      </p>
    </motion.div>

    <motion.div
      className="service-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Développement Mobile</h3>
      <p className="text-gray-300">
        Développement d'applications mobiles sur iOS et Android avec une interface intuitive et une performance optimale.
      </p>
    </motion.div>

    <motion.div
      className="service-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Développement Application Web</h3>
      <p className="text-gray-300">
        Conseils et solutions pour améliorer l'efficacité de vos systèmes IT. Optimisation de vos infrastructures et processus métiers.
      </p>
    </motion.div>

    <motion.div
      className="service-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Développement & Intégration API</h3>
      <p className="text-gray-300">
        Amélioration de la visibilité en ligne de votre entreprise avec des stratégies de SEO adaptées et des campagnes de marketing digital efficaces.
      </p>
    </motion.div>

    <motion.div
      className="service-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Deploiement</h3>
      <p className="text-gray-300">
        Support technique et maintenance préventive pour garantir la continuité et la performance de vos applications et systèmes.
      </p>
    </motion.div>

    <motion.div
      className="service-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Formation & Coaching</h3>
      <p className="text-gray-300">
        Formation personnalisée sur les technologies web et mobiles, ainsi que du coaching pour booster vos compétences en développement.
      </p>
    </motion.div>
  </div>
</section>



      {/* Section: Technologies et Outils Utilisés */}
      <section id="technologies" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-8 flex items-center justify-center gap-2 animate-slideInRight">
          <FaTools /> Technologies et Outils Utilisés
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Animation au survol et zoom */}
          {[
            { icon: <FaReact />, name: 'React', color: 'text-blue-500' },
            { icon: <FaJsSquare />, name: 'JavaScript', color: 'text-yellow-400' },
            { icon: <SiFlutter />, name: 'Flutter', color: 'text-blue-400' },
            { icon: <FaPhp />, name: 'PHP', color: 'text-blue-500' },
            { icon: <SiSupabase />, name: 'Supabase', color: 'text-green-400' },
            { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-400' },
            { icon: <SiMysql />, name: 'MySQL', color: 'text-yellow-500' },
            { icon: <FaDatabase />, name: 'PostgreSQL', color: 'text-gray-600' },
            { icon: <FaServer />, name: 'Apache', color: 'text-red-500' },
            { icon: <FaLinux />, name: 'Ubuntu Server', color: 'text-yellow' },
            { icon: <FaCloud />, name: 'API REST', color: 'text-blue-600' },
            { icon: <SiPython />, name: 'Python', color: 'text-yellow-400' },
            { icon: <FaFlask />, name: 'Flask', color: 'text-blue-500' },
            { icon: <FaLaravel />, name: 'Laravel', color: 'text-red-600' },
            { icon: <FaWordpress />, name: 'WordPress', color: 'text-blue-600' },
            { icon: <FaFigma />, name: 'Figma', color: 'text-pink-500' }
          ].map((tool, index) => (
            <div key={index} className="flex flex-col items-center transform transition-all hover:scale-110 hover:shadow-xl">
              <div className={`${tool.color} text-5xl mb-2 hover:text-opacity-80 transition duration-300`}>{tool.icon}</div>
              <span className="text-gray-300">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Mes Expériences */}
<section id="experiences" className="py-16 px-6 bg-gray-900 relative">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20" />
  
  <motion.h2 
    className="text-4xl font-bold text-center text-green-400 mb-8 flex items-center justify-center gap-2"
    initial={{ opacity: 0, y: -50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
  >
    <FaBriefcase /> Mes Expériences 
  </motion.h2>
  
  <div className="space-y-6">
    <motion.div 
      className="animate-slideInRight"
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold">Développeur Freelance</h3>
      <p className="text-gray-300">Janvier 2023 - Présent</p>
      <p className="text-gray-300">Création de sites web et d'applications mobiles sur mesure pour des clients locaux et internationaux.</p>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold">Développeur Web Junior</h3>
      <p className="text-gray-300">Septembre 2021 - Décembre 2022</p>
      <p className="text-gray-300">Mise en œuvre de solutions digitales pour une entreprise de e-commerce, avec l'intégration d'APIs et de systèmes de gestion de contenu.</p>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold">Stagiaire Développeur</h3>
      <p className="text-gray-300">Juillet 2021 - Août 2021</p>
      <p className="text-gray-300">Stage dans une startup en développement d'applications mobiles et gestion des bases de données MySQL et PostgreSQL.</p>
    </motion.div>
  </div>
</section>

      {/* Section: Projets */}
      <section id="projets" className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-20" />
        <h2 className="text-4xl font-bold text-center text-green-400 mb-8 flex items-center justify-center gap-2 animate-slideInLeft">
          <FaProjectDiagram /> Mes Projets et contributions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-zoomIn">
          {['Tikita', 'Ticketna', 'Mobigate','Tikado','DataCrawler','Uconvert','Mobigate Geolocator'].map((projet) => (
            <div
              key={projet}
              className="bg-gray-900 p-6 rounded-md shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{projet}</h3>
              <p className="text-gray-300">Description du projet ici.</p>
              <Link
                href="#"
                className="mt-2 inline-block text-green-400 hover:text-green-500"
              >
                Voir plus
              </Link>
            </div>
          ))}
        </div>
      </section>


      <section
  id="contact"
  className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-center relative"
>
  {/* Effets de fond */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 blur-3xl" />
  <div className="absolute -top-10 left-10 w-32 h-32 bg-green-500 rounded-full filter blur-3xl opacity-20" />
  <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-20" />

  {/* Titre de la section */}
  <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-10">
    Me Contacter
  </h2>

  {/* Description */}
  <p className="text-lg text-gray-300 mb-8 max-w-2xl">
    Besoin de me joindre rapidement ? Voici mes coordonnées professionnelles :
  </p>

  {/* Coordonnées stylées */}
  <div className="w-full max-w-lg space-y-8 text-gray-300">
    <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 shadow-lg hover:bg-gray-700 transition">
      <FaPhoneAlt className="text-green-400 text-xl" />
      <span className="text-lg">+227 99 00 00 00</span>
    </div>

    <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 shadow-lg hover:bg-gray-700 transition">
      <FaEnvelope className="text-green-400 text-xl" />
      <span className="text-lg">kounougilbert288@gmail.com</span>
    </div>

    <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 shadow-lg hover:bg-gray-700 transition">
      <FaLinkedin className="text-blue-500 text-xl" />
      <a
        href="https://www.linkedin.com/in/kounougilbert"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg hover:underline"
      >
        linkedin.com/in/kounougilbert
      </a>
    </div>

    <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 shadow-lg hover:bg-gray-700 transition">
      <FaGithub className="text-gray-300 text-xl" />
      <a
        href="https://github.com/kounougilbert"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg hover:underline"
      >
        github.com/kounougilbert
      </a>
    </div>
  </div>
</section>



    </div>
  );
}
