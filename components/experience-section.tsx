"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, Building, TrendingUp } from "lucide-react"

const experiences = [
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
      " Validation des API avec Postman (collections, scripts de tests automatiques).",
      " Vérification des statuts HTTP, payloads, scénarios d’erreurs et sécurité basique.",
      "Suivi des anomalies et retests après correction."

    ],
    technologies: ["Java", "Spring Boot", "Postman", "PostgreSQL", "GitLab", "Microservices"],
    achievements: "Architecture microservices complète",
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
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Parcours</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8"></div>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Une progression constante à travers des défis techniques stimulants
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col lg:flex-row items-center mb-16 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Timeline dot - Hidden on mobile */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-slate-950 z-10 shadow-lg shadow-blue-400/50"></div>

              {/* Content */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/10 hover:border-blue-400/40 hover:shadow-blue-500/20 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center text-cyan-300 mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                        <span className="text-blue-300 text-sm font-medium">{index + 1}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-blue-200">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievement badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full mb-4">
                      <TrendingUp className="h-3 w-3 text-green-400 mr-2" />
                      <span className="text-green-300 text-xs font-medium">{exp.achievements}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                        className="text-blue-100 text-sm flex items-start leading-relaxed"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 rounded-full border border-blue-400/30 hover:border-blue-400/50 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
