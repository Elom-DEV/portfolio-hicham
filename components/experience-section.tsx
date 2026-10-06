"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, Building, TrendingUp, ChevronDown } from "lucide-react"

const experiences = [
    {
    title: "Commercial Mutuelle — Marché français",
    company: "ARTEX ASSURANCES",
    location: "Mohammedia, Maroc",
    period: "Avril. 2026 - présent",
    description: [
      "Analyse des besoins et demandes clients",
      "Respect de procédures et de règles métier",
      "Identification et résolution d'anomalies/dossiers complexes",
  
    ],
    technologies: ["CRM", "Vente", "Relation Client"],
    achievements: "Objectifs commerciaux atteints",
  },
  {
    title: "Développeur Java Spring Boot | Tests & Qualité Logicielle",
    company: "DOMCIT",
    location: "À distance",
    period: "Févr. 2025 - Mars. 2026",
    description: [
      "Développement d'API RESTful en Java avec Spring Boot selon l'architecture microservices",
      "Mise en place de l'architecture BFF (Backend For Frontend)",
      "Création d'endpoints REST pour CRUD, authentification et communication interservices",
      "Structuration backend en couches (Controller, Service, Repository)",
      "Utilisation de PostgreSQL avec Spring Data JPA pour la persistance",
      "Intégration frontend React.js avec microservices via Axios",
      "Gestion de version avec GitLab et bonnes pratiques de commit",
      "➡️ Partie QA :",
      "Conception et exécution de tests fonctionnels (cas de test).",
      "Tests boîte noire : validation du comportement utilisateur et API.",
      "TNR – Tests de Non-Régression après chaque évolution.",
      "Validation des API avec Postman (collections, scripts de tests automatiques).",
      "Vérification des statuts HTTP, payloads, scénarios d'erreurs et sécurité basique.",
      "Suivi des anomalies et retests après correction.",
    ],
    technologies: ["Java", "Spring Boot", "Postman", "PostgreSQL", "GitLab", "Microservices"],
    achievements: "Architecture microservices complète",
  },
  {
    title: "Archives | Stage",
    company: "ARCHIVISTES DU MAROC",
    location: "Casablanca, Maroc",
    period: "Avril. 2024 - Janv. 2025",
    description: [
      "Gestion et conservation des archives",
      "Traitement et numérisation des archives (GED)",
      "Destruction des archives",
    ],
    technologies: ["GED", "Numérisation", "Archivage", "Gestion documentaire"],
    achievements: "Numérisation et conservation d'archives",
  },
  {
    title: "Stagiaire Exploitation",
    company: "NAPS",
    location: "Casablanca-Settat, Maroc",
    period: "Oct. 2023 - Avr. 2024",
    description: [
      "Gestion des données relatives aux transactions et commerçants",
      "Mise en place de protocoles de sécurité pour données sensibles",
      "Paramétrage des terminaux de paiement électronique (TPE)",
      "Contrôle d'accès sécurisé pour activation/désactivation des TPE",
      "Gestion de la relation client (CRM)",
      "Administration front-office et back-office",
    ],
    technologies: ["CRM", "Sécurité", "TPE", "PostgreSQL", "Back-Office"],
    achievements: "Système de gestion TPE sécurisé",
  },
  {
    title: "Télévendeur Assurance",
    company: "YEPCALL",
    location: "Maroc",
    period: "Avr. 2022 - Avr. 2023",
    description: [
      "Prospection clientèle pour produits d'assurance",
      "Proposition de solutions mutuelle et prévoyance adaptées",
      "Gestion de la relation client et suivi commercial",
      "Atteinte des objectifs de vente mensuels",
    ],
    technologies: ["CRM", "Vente", "Relation Client"],
    achievements: "Objectifs commerciaux atteints",
  },
]

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // index de l'expérience ouverte (null = tout fermé)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="experience" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-indigo-950/20"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Mon{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Parcours
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8"></div>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Une progression constante à travers des défis techniques stimulants
          </p>
        </motion.div>

<div className="relative w-full">            {/* Timeline line (à gauche) - cachée sur mobile */}
          <div className="hidden lg:block absolute left-[11px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400"></div>

          {experiences.map((exp, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative mb-6 lg:pl-14"
              >
                {/* Timeline dot - caché sur mobile */}
                <div
                  className={`hidden lg:block absolute left-0 top-8 w-6 h-6 rounded-full border-4 border-slate-950 z-10 transition-all duration-300 ${
                    isOpen
                      ? "bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/60 scale-110"
                      : "bg-gradient-to-r from-blue-400/70 to-cyan-400/70 shadow-lg shadow-blue-400/30"
                  }`}
                ></div>

                {/* Carte */}
                <div
                  className={`bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl rounded-2xl border shadow-2xl shadow-blue-500/10 overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-blue-400/50" : "border-blue-500/20 hover:border-blue-400/40"
                  }`}
                >
                  {/* En-tête cliquable (toujours visible) */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{exp.title}</h3>

                      <div className="flex items-center text-cyan-300 mb-3">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-blue-200">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-2 rounded-full border border-blue-400/30 flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-cyan-300" />
                    </motion.div>
                  </button>

                  {/* Détails (visibles au clic) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-blue-500/20 pt-6">
                          {/* Achievement badge */}
                          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full mb-5">
                            <TrendingUp className="h-3 w-3 text-green-400 mr-2" />
                            <span className="text-green-300 text-xs font-medium">{exp.achievements}</span>
                          </div>

                          {/* Description */}
                          <ul className="space-y-3 mb-6">
                            {exp.description.map((item, i) => (
                              <li
                                key={i}
                                className="text-blue-100 text-sm flex items-start leading-relaxed"
                              >
                                <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 rounded-full border border-blue-400/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}