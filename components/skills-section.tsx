"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Cloud, Smartphone, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "from-blue-400 to-cyan-400",
    skills: [
      { name: "HTML/CSS", level: 88, color: "bg-orange-500" },
      { name: "JavaScript", level: 60, color: "bg-yellow-500" },
      { name: "React.js", level: 60, color: "bg-blue-500" },
      { name: "Next.js", level: 60, color: "bg-blue-600" },
      { name: "Bootstrap", level: 80, color: "bg-purple-500" },
      { name: "TypeScript", level: 60, color: "bg-blue-400" },    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "Java Spring Boot", level: 65, color: "bg-green-600" },
      { name: "API RESTful", level: 70, color: "bg-green-200" },
      { name: "Microservices", level: 70, color: "bg-blue-600" },
      { name: "PostgreSQL", level: 82, color: "bg-blue-500" },
      { name: "MySql", level: 75, color: "bg-purple-400" },
    ],
  },
  {
    title: "CMS & Tools",
    icon: Cloud,
    color: "from-blue-500 to-indigo-500",
    skills: [
      { name: "WordPress", level: 90, color: "bg-blue-600" },
      { name: "Git/GitLab/Github", level: 70, color: "bg-orange-500" },
      { name: "WooCommerce", level: 70, color: "bg-purple-500" },
      { name: "CRM", level: 60, color: "bg-yellow-500" },
      {name: "Docker", level: 40, color: "bg-blue-400" },
      { name: "Postman", level: 70, color: "bg-orange-400" },


      
    ],
  },
  {
    title: "Création Contenu",
    icon: Smartphone,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "TikTok (10k+)", level: 95, color: "bg-pink-500" },
      { name: "Pinterest (1.4k+)", level: 90, color: "bg-red-500" },
      { name: "Threads (5.6k+)", level: 90, color: "bg-purple-500" },
      { name: "Contenu Tech", level: 90, color: "bg-indigo-500" },
      { name: "Fcebook (7.2k+)", level: 85, color: "bg-blue-500" },
    ],
  },
  {
    title: "Securité",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Keycloak", level: 50, color: "bg-purple-600" },
      { name: "Spring Security", level: 50, color: "bg-pink-500" },
    ],
  },
]

const tools = [
  "Git/GitHub",
  "VS Code",
  "IntelliJ IDEA",
  "Hostinger",
  "Postman",
  "Docker",
  "Canva",
  "Lightroom",
]

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-16 pb-12 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Mes{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8"></div>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions exceptionnelles
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/10 hover:border-blue-400/40 hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-blue-100">{skill.name}</span>
                      <span className="text-sm text-cyan-300 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut",
                        }}
                        className={`h-2 ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/10"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Outils & Technologies</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-lg p-4 text-center hover:border-blue-400/40 hover:bg-blue-500/20 transition-all duration-300 group"
              >
                <span className="text-blue-100 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
