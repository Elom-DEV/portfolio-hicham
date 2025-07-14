"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
  {
    degree: "Master Informatique",
    school: " Big Data et Cloud Computing.",
    location: " ENSET Mohammedia, Maroc.",
    period: "2024 - 2026",
    // description: "Spécialisation en développement web et architectures distribuées",
    grade: "En cours",
  },
  {
    degree: "Licence Informatique",
    school: "Développement Web et Mobile.",
    location:" ENSET Mohammedia, Maroc.",
    period: "2022 - 2023",
    // description: "Formation générale en informatique et mathématiques appliquées",
    grade: "Assez bien Bien",
  },
]

const certifications = [
  {
    name: "WORDPRESS Le Cours Complet |version 2024 (45h)",
    issuer: "Udemy",
    date: "2023",
    icon: Award,
  },
  {
    name: "L'essentiel de JavaScript",
    issuer: "LinkedIn Learning",
    date: "2023",
    icon: Award,
  },
  {
    name: "PHP et MySQL : la formation ULTIME",
    issuer: "Udemy",
    date: "2023",
    icon: Award,
  },
]

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 relative">
      {/* Background effects identiques à ExperienceSection */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-indigo-950/20"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Formation &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-blue-100">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-cyan-300" />
              Formation Académique
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/10"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-bold">{edu.degree}</h4>
                      <p className="text-cyan-300 font-medium">{edu.school}</p>
                      <p className="text-blue-200 text-sm">{edu.location}</p>
                    </div>
                    <div className="text-sm text-blue-400">{edu.period}</div>
                  </div>
                  {/* <p className="text-blue-200 mb-2">{edu.description}</p> */}
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-green-300 text-xs font-medium">
                    {edu.grade}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="h-6 w-6 mr-3 text-cyan-300" />
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/10 flex items-center gap-4"
                  >
                    <Icon className="h-8 w-8 text-cyan-300 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white">{cert.name}</h4>
                      <p className="text-blue-300 text-sm">{cert.issuer} - {cert.date}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
