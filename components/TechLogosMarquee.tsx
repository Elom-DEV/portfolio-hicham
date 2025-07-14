"use client"

import { motion } from "framer-motion"

const techLogos = [
  { src: "intelij.png", alt: "IntelliJ" },
  { src: "gitlab.png", alt: "GitLab" },
  { src: "react.png", alt: "React" },
  { src: "android.png", alt: "Android" },
  { src: "aws.png", alt: "AWS" },
  { src: "docker.png", alt: "Docker" },
  { src: "github.png", alt: "GitHub" },
  { src: "java.png", alt: "Java" },
  { src: "jenkins.png", alt: "Jenkins" },
  { src: "mysql.png", alt: "MySQL" },
  { src: "js.png", alt: "JavaScript" },
  { src: "react.png", alt: "React" },
  { src: "spring.png", alt: "Spring" },
  { src: "typescripte.png", alt: "TypeScript" },
  { src: "intelij.png", alt: "IntelliJ" },
  { src: "wordpress.png", alt: "WordPress" },
  { src: "VsCode.png", alt: "Visual Studio" },
  { src: "postgress.png", alt: "PostgreSQL" },
  { src: "python.png", alt: "Python" },
]

export default function TechLogosMarquee() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>

      {/* Première ligne */}
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex gap-12 animate-slide"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 30,
          }}
        >
          {techLogos.concat(techLogos).map((logo, index) => (
            <div
              key={`line1-${index}`}
              className="flex-shrink-0 p-3 bg-gradient-to-br from-slate-900/60 to-blue-950/50 backdrop-blur-xl border border-blue-500/20 rounded-xl shadow-lg shadow-blue-500/10 hover:scale-105 transition-transform duration-300"
            >
              <img src={logo.src} alt={logo.alt} className="h-12 w-12 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Deuxième ligne (inverse) */}
      {/* <div className="relative flex overflow-x-hidden mt-6">
        <motion.div
          className="flex gap-12 animate-slide-reverse"
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 30,
          }}
        >
          {techLogos.concat(techLogos).map((logo, index) => (
            <div
              key={`line2-${index}`}
              className="flex-shrink-0 p-3 bg-gradient-to-br from-slate-900/60 to-blue-950/50 backdrop-blur-xl border border-blue-500/20 rounded-xl shadow-lg shadow-blue-500/10 hover:scale-105 transition-transform duration-300"
            >
              <img src={logo.src} alt={logo.alt} className="h-12 w-12 object-contain" />
            </div>
          ))}
        </motion.div>
      </div> */}
    </section>
  )
}
