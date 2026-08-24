"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Lightbulb, Users, Zap, Target, Heart } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Code Élégant",
    description: "Architecture propre et maintenable",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Solutions créatives et modernes",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travail d'équipe et communication",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimisation et rapidité",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Target,
    title: "Précision",
    description: "Attention aux détails",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Amour du développement",
    color: "from-pink-500 to-red-500",
  },
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            À propos de{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-900/50 to-blue-950/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 shadow-2xl shadow-blue-500/10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
               Dev Background & QA Mindset.{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"></span>
              </h3>

              <div className="space-y-4 text-blue-100 leading-relaxed">
                <p>
                  Je suis <b>HICHAM ELOTMANI</b>, passionné par l’ingénierie logicielle et la qualité des applications. J’intègre systématiquement le <b>QA</b> et le testing logiciel pour garantir des solutions robustes et performantes.                </p>

                <p>
              J’ai de l’expérience avec Java Spring Boot, ainsi que des architectures microservices et des modèles BFF, que j’intègre dans mes projets pour offrir des applications bien structurées et maintenables.                </p>

                <p>
                   En parallèle, je partage du contenu éducatif sur la programmation sur TikTok, où j’ai réuni une communauté de plus de 10 000 abonnés.
                  </p>
                  <p>
                    Actuellement en formation de Master en Ingénierie Informatique, Big Data et Cloud Computing à l’ENSET Mohammedia, je continue de développer mes compétences en QA et Test Automation, avec pour objectif de contribuer à des projets de haute qualité.
                  </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    20k+
                  </div>
                  <div className="text-blue-200 text-sm">Followers réseaux sociaux</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    1+
                  </div>
                  <div className="text-blue-200 text-sm">Années d'expérience</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group bg-gradient-to-br from-slate-900/50 to-blue-950/30 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-blue-200 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
