"use client"

import { useEffect, useState } from "react"
import { backIn, motion } from "framer-motion"
import { Github, Linkedin, Mail, Code, Sparkles, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const roles = [
  "JAVA",
  "REACT.JS",
  "NEXT.JS", 
  "SPRING BOOT",
  "DEVELOPPEUR WORDPRESS",
  "SEO OPTIMISATION",
  "Créateur de Contenu",

]

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-sm mb-4">
                <Sparkles className="h-4 w-4 text-cyan-300 mr-2" />
                <span className="text-cyan-300 text-sm font-medium">Développeur Passionné</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
            >
              <span className="block text-white mb-2">Hicham Elotmani </span>
              <span  className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                INGÉNIERIE  LOGICIEL
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 h-16 flex items-center justify-center lg:justify-start"
            >
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-blue-200 text-lg mb-8 max-w-2xl leading-relaxed"
            >
              ingénieure logiciel passionné spécialisé en React.js, Java Spring Boot et WordPress. Créateur de contenu
              sur les réseaux sociaux avec plus de 17k followers combinés. Fondateur de pixcodi.net, plateforme de
              wallpapers gratuits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Code className="h-5 w-5 mr-2" />
                Voir mes projets
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400/50 text-blue-300 hover:bg-blue-400/10 hover:border-blue-400 px-8 py-4 text-lg transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Me contacter
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
                {[
                { icon: Github, href: "https://github.com/Elom-DEV", target: "_blank", color: "hover:text-white" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/hicham-elotmani/", target: "_blank", color: "hover:text-blue-400" },
                // { icon: Mail, href: "#", target: "_blank", color: "hover:text-cyan-400" },
                ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.target}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-blue-300 ${social.color} transition-all duration-300 p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40`}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
                ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-cyan-400/20"
              />

              {/* Glow effect */}
              <div className="absolute inset-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>

              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-cyan-400 shadow-2xl shadow-blue-500/25">
                <Image
                  src="/ELOM.png"
                  alt="HICHAM ELOTMANI - Développeur Full-Stack"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating elements */}
              {[
                {  src: "/javaa.png", position: "top-4 right-4 ", delay: 0 },
                { src: "/react.png", position: "bottom-4 left-4", delay: 1 },
                { src: "/VsCode.png", position: "top-4 left-4", delay: 2 },
                { src: "/intelij.png", position: "bottom-4 right-4", delay: 3 },


              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + item.delay * 0.2 }}
                  className={`absolute ${item.position} w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30 text-xl`}
                >
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: item.delay }}
                  >
                    {item.src === "/java.png" ? (
                      <Image src={item.src} alt="Java" width={32} height={32} />
                    ) : (
                      <Image src={item.src} alt={item.src.split('/').pop()?.split('.')[0] || "Icon"} width={32} height={32} />
                    )}  
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-blue-300"
          >
            <span className="text-sm mb-2 font-medium">Découvrir</span>
            <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
