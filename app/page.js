"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap,FaJsSquare,FaBriefcase,FaFigma,FaServer,FaWordpress,FaLinux,FaCloud,FaFlask,FaLaravel, FaProjectDiagram, FaLaptopCode, FaTools, FaPhp, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiSupabase, SiMysql,SiPython, SiFlutter } from 'react-icons/si';

export default function Home() {
  return (
    <div className="bg-black text-gray-100">
      {/* Section: Présentation */}
      <section id="presentation" className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-900 opacity-40 blur-3xl" />
        <Image
          src="/favicon.ico"
          alt="Photo de Kounou Gnimassou Gilbert"
          width={150}
          height={150}
          className="rounded-full mb-4 border-4 border-blue-500"
        />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 animate-fadeInDown">
          Salut, je suis Kounou Gnimassou Gilbert !
        </h1>
        <p className="text-lg text-gray-300 mb-6 animate-fadeInUp">
          Développeur, Designer et Créateur de solutions numériques.
        </p>
      </section>

      {/* Section: Parcours éducatif */}
      <section id="parcours" className="py-16 px-6 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20" />
        <h2 className="text-4xl font-bold text-center text-green-400 mb-8 flex items-center justify-center gap-2">
          <FaGraduationCap /> Mon Parcours Éducatif
        </h2>
        <div className="space-y-6 animate-slideInLeft">
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

      {/* Section: Technologies et Outils Utilisés */}
      <section id="technologies" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-8 flex items-center justify-center gap-2">
          <FaTools /> Technologies et Outils Utilisés
        </h2>
        <div className="flex flex-wrap justify-center gap-6 animate-zoomIn">
          <div className="flex flex-col items-center">
            <FaReact className="text-5xl text-blue-500 hover:text-blue-400 transition-all duration-300" />
            <span className="mt-2 text-gray-300">React</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare className="text-5xl text-yellow-400 hover:text-yellow-300 transition-all duration-300" />
            <span className="mt-2 text-gray-300">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiFlutter className="text-5xl text-blue-400 hover:text-blue-300 transition-all duration-300" />
            <span className="mt-2 text-gray-300">Flutter</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPhp className="text-5xl text-blue-500 hover:text-blue-400 transition-all duration-300" />
            <span className="mt-2 text-gray-300">PHP</span>
          </div>
          <div className="flex flex-col items-center">
            <SiSupabase className="text-5xl text-green-400 hover:text-green-300 transition-all duration-300" />
            <span className="mt-2 text-gray-300">Supabase</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-5xl text-green-400 hover:text-green-300 transition-all duration-300" />
            <span className="mt-2 text-gray-300">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-5xl text-yellow-500 hover:text-yellow-400 transition-all duration-300" />
            <span className="mt-2 text-gray-300">MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <FaDatabase className="text-5xl text-gray-600 hover:text-gray-500 transition-all duration-300" />
            <span className="mt-2 text-gray-300">PostgreSQL</span>
          </div>
          {/* Ajout des nouveaux outils */}
          <div className="flex flex-col items-center">
            <FaServer className="text-5xl text-red-500 hover:text-red-400 transition-all duration-300" />
            <span className="mt-2 text-gray-300">Apache</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLinux className="text-5xl text-yellow hover:text-red-800 transition-all duration-300" />
            <span className="mt-2 text-white-300">Ubuntu Server</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCloud className="text-5xl text-blue-600 hover:text-blue-500 transition-all duration-300" />
            <span className="mt-2 text-gray-300">API REST</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPython className="text-5xl text-yellow-400 hover:text-yellow-300 transition-all duration-300" />
            <span className="mt-2 text-gray-300">Python</span>
          </div>
          
          <div className="flex flex-col items-center">
            <FaFlask className="text-5xl text-blue-500 hover:text-blue-400 transition-all duration-300" />
            <span className="mt-2 text-gray-300">Flask</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLaravel className="text-5xl text-red-600 hover:text-red-500 transition-all duration-300" />
            <span className="mt-2 text-gray-300">Laravel</span>
          </div>
          <div className="flex flex-col items-center">
            <FaWordpress className="text-5xl text-blue-600 hover:text-blue-500 transition-all duration-300" />
            <span className="mt-2 text-gray-300">WordPress</span>
          </div>
          <div className="flex flex-col items-center">
            <FaFigma className="text-5xl text-pink-500 hover:text-pink-400 transition-all duration-300" />
            <span className="mt-2 text-gray-300">Figma</span>
          </div>
         
        </div>
      </section>

      {/* Section: Mes Expériences */}
      <section id="experiences" className="py-16 px-6 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20" />
        <h2 className="text-4xl font-bold text-center text-green-400 mb-8 flex items-center justify-center gap-2">
          <FaBriefcase /> Mes Expériences
        </h2>
        <div className="space-y-6 animate-slideInRight">
          <div>
            <h3 className="text-2xl font-semibold">Développeur Freelance</h3>
            <p className="text-gray-300">Janvier 2023 - Présent</p>
            <p className="text-gray-300">Création de sites web et d'applications mobiles sur mesure pour des clients locaux et internationaux.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Développeur Web Junior</h3>
            <p className="text-gray-300">Septembre 2021 - Décembre 2022</p>
            <p className="text-gray-300">Mise en œuvre de solutions digitales pour une entreprise de e-commerce, avec l'intégration d'APIs et de systèmes de gestion de contenu.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Stagiaire Développeur</h3>
            <p className="text-gray-300">Juillet 2021 - Août 2021</p>
            <p className="text-gray-300">Stage dans une startup en développement d'applications mobiles et gestion des bases de données MySQL et PostgreSQL.</p>
          </div>
        </div>
      </section>

      {/* Section: Projets */}
      <section id="projets" className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-20" />
        <h2 className="text-4xl font-bold text-center text-green-400 mb-8 flex items-center justify-center gap-2">
          <FaProjectDiagram /> Mes Projets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-zoomIn">
          {['Tikita', 'Ticketna', 'Mobigate'].map((projet) => (
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
    </div>
  );
}
