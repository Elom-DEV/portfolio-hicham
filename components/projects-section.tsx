"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Eye, Star, Code, Smartphone, Globe, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "PIXCODI",
    category: "Wordpress",
    description: " Plateforme dédiée aux Wallpapers gratuits pour mobile et PC",
    // longDescription:
    //   "Une solution complète d'analyse de données utilisant l'intelligence artificielle pour fournir des insights en temps réel. Interface moderne avec visualisations interactives et tableaux de bord personnalisables.",
    image: "/pixcodi.png?height=400&width=600",
    technologies: ["Wordpress", "Html/css", "Seo", "Elementor", "Hostinger", " Analytics"],
    demo: "https://pixcodi.net/",
    featured: true,
    stats: { stars: 234, forks: 45, views: "12.5k" },
    icon: Globe,
    Github: false ,
   
  },
  {
    id: 2,
    title: "A Movie Application",
    category: "React js",
    description: "Parcourir les films avec l'API Appwrit | Trending Movies Search movies ",
    longDescription:"Construit avec React.js pour l'interface utilisateur, Appwrite pour l'algorithme Trending Movies et stylisé avec TailwindCSS.",
    image: "/moviApp.png?height=400&width=600",
    technologies: ["React js", "TypeScript", "Node.js", "Appwrit", "tailwind css"],
    github: "https://github.com/Elom-DEV/The-Movie-App-React-js-?tab=readme-ov-file",
    demo: "https://github.com/Elom-DEV/The-Movie-App-React-js-?tab=readme-ov-file",
    featured: false,
    stats: { stars: 189, forks: 32, views: "8.7k" },
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Cabinet médical",
    category: "Web App",
    description: "Une application Java pour gérer les consultations dans un cabinet médical.",
    // longDescription:
    //   "Solution web complète pour le suivi et la réduction de l'empreinte carbone des entreprises avec rapports automatisés et recommandations personnalisées.",
    image: "/cabinet.gif?height=400&width=600",
    technologies: [ "Java", "Micro services","PostgreSQL", "Spring boot", "Docker","Bff"],
    github: "#",
    demo: "https://sienna-giraffe-566482.hostingersite.com/",
    featured: true,
    stats: { stars: 156, forks: 28, views: "6.2k" },
    icon: Globe,
  },
  // {
  //   id: 4,
  //   title: "DevTools Extension",
  //   category: "Extension",
  //   description: "Extension navigateur pour développeurs avec outils avancés",
  //   longDescription:
  //     "Extension de navigateur complète pour développeurs avec inspecteur de performance, analyseur de code et outils de débogage avancés.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   technologies: ["JavaScript", "Chrome API", "React", "Webpack", "CSS3"],
  //   github: "#",
  //   demo: "#",
  //   featured: false,
  //   stats: { stars: 312, forks: 67, views: "15.3k" },
  //   icon: Code,
  // },
]

const categories = ["Tous", "Wordpress", "React js", "Web App", ]

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects =
    selectedCategory === "Tous" ? projects : projects.filter((project) => project.category === selectedCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/20 via-transparent to-purple-950/20"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Mes{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8"></div>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Une sélection de mes réalisations les plus innovantes et impactantes
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
            Projets{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Phares</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-500/10 hover:border-blue-400/40 hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* Overlay */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center"
                      >
                        <div className="flex gap-4">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                            onClick={() => window.open(project.demo, "_blank")}
                            disabled={!project.demo}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Voir
                          </Button>
                          
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
                      <project.icon className="h-3 w-3 text-cyan-300 mr-2" />
                      <span className="text-cyan-300 text-xs font-medium">{project.category}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="flex items-center px-2 py-1 bg-slate-900/60 backdrop-blur-sm rounded-full">
                      <Star className="h-3 w-3 text-yellow-400 mr-1" />
                      <span className="text-white text-xs">{project.stats.stars}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-blue-200 mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-cyan-300 rounded-full border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-cyan-300 rounded-full border border-blue-400/20">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                      disabled={!project.demo}
                     
                  
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    {/* <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-400/50 text-blue-300 hover:bg-blue-400/10"
                      onClick={() => window.open(project.github, "_blank")}
                      disabled={!project.github}
                      
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button> */}
                  </div>
                </div>
                
              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                  : "border-blue-400/50 text-blue-300 hover:bg-blue-400/10 hover:border-blue-400"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl rounded-xl overflow-hidden border border-blue-500/20 shadow-lg shadow-blue-500/10 hover:border-blue-400/40 hover:shadow-blue-500/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                  {/* Category */}
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center px-2 py-1 bg-slate-900/60 backdrop-blur-sm rounded-full">
                      <project.icon className="h-3 w-3 text-cyan-300 mr-1" />
                      <span className="text-cyan-300 text-xs">{project.category}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center px-2 py-1 bg-slate-900/60 backdrop-blur-sm rounded-full">
                      <Eye className="h-3 w-3 text-blue-300 mr-1" />
                      <span className="text-white text-xs">{project.stats.views}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-blue-200 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-blue-500/10 text-cyan-300 rounded border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-400/50 text-blue-300 hover:bg-blue-400/10 flex-1 text-xs"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                    {/* <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-400/50 text-blue-300 hover:bg-blue-400/10 flex-1 text-xs"
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
