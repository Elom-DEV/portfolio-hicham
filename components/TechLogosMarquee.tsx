"use client"

import { motion } from "framer-motion"

const techLogos = [
  { src: "intellij.webp", alt: "IntelliJ" },
  { src: "gitlab.webp", alt: "GitLab" },
  { src: "react.webp", alt: "React" },
  { src: "android.webp", alt: "Android" },
  { src: "aws.webp", alt: "AWS" },
  { src: "docker.webp", alt: "Docker" },
  { src: "github.webp", alt: "GitHub" },
  { src: "java.webp", alt: "Java" },
  { src: "jenkins.webp", alt: "Jenkins" },
  { src: "mysql.webp", alt: "MySQL" },
  { src: "js.webp", alt: "JavaScript" },
  { src: "react.webp", alt: "React" },
  { src: "spring.webp", alt: "Spring" },
  { src: "typescript.webp", alt: "TypeScript" },
  { src: "intellij.webp", alt: "IntelliJ" },
  { src: "wordpress.webp", alt: "WordPress" },
  { src: "vscode.webp", alt: "Visual Studio" },
  { src: "postgresql.webp", alt: "PostgreSQL" },
  { src: "python.webp", alt: "Python" },
  { src: "apache.webp", alt: "QA Testing" },
  {src: "jira.webp", alt: "jira"},
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
