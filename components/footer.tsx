"use client"

import { motion } from "framer-motion"
import { Heart, Zap, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-black border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-4"
            >
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-slate-900" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                ElomDev
              </span> */}
               <div className="flex items-center space-x-2">
                <img className="w-40  items-center justify-center" src="/ELOM_logo.png" alt="" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-blue-200 mb-4 max-w-md leading-relaxed"
            >
              Développeur Full-Stack passionné par la création d'expériences numériques exceptionnelles. Spécialisé dans
              les technologies modernes et l'innovation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cyan-300 text-sm font-medium"
            >
              Disponible pour des projets freelance et opportunités CDI
            </motion.p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-white mb-4"
            >
              Navigation
            </motion.h4>
            <ul className="space-y-2">
              {["Accueil", "À propos", "Expérience", "Compétences", "Projets", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase().replace("à propos", "about").replace("compétences", "skills").replace("expérience", "experience")}`}
                    className="text-blue-200 hover:text-cyan-300 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-white mb-4"
            > */}
              {/* Services WordPress
            </motion.h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              {[
                "Sites Portfolio",
                "Sites One Page",
                "Blogs Professionnels",
                "E-commerce WooCommerce",
                "Maintenance WordPress",
                "Optimisation SEO",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
        </div> */}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-blue-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-blue-300 text-sm flex items-center ">
            &copy; {new Date().getFullYear()} HICHAM ELOTMANI{" "}
          
          </p>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="mt-4 md:mt-0 border-blue-400/50 text-blue-300 hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Retour en haut
          </Button>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
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
    </footer>
  )
}
