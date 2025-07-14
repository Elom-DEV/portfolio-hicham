"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Expérience", href: "#experience" },
   { name: "Projets", href: "#projects" },
  { name: "Compétences", href: "#skills" },
    { name: "Éducation", href: "#education" },
  { name: "Services", href: "#services" },

  { name: "Contact", href: "#contact" },

]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    // setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleCVDownload = () => {
    window.open("/cv.pdf", "_blank")
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection("#home")}

            >
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-slate-900" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                ElomDev
              </span> */}
              <div className="flex items-center space-x-2">
                <img className="w-40  items-center justify-center" src="/ELOM_logo.png" alt="" />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="relative px-4 py-2 text-sm font-medium text-blue-100 hover:text-cyan-300 transition-all duration-300 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Desktop CV Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCVDownload}
                className="border-blue-400/50 text-blue-300 hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
              >
                <Download className="h-4 w-4 mr-2" />
                CV
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-blue-300 hover:text-cyan-300 hover:bg-blue-400/10"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-blue-500/20"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                        onClick={() => {
  setIsOpen(false)
  setTimeout(() => {
    scrollToSection(item.href)
  }, 300) // 300ms correspond à la durée de ton animation framer-motion
}}
                    className="block w-full text-left px-4 py-3 text-blue-100 hover:text-cyan-300 hover:bg-blue-400/10 rounded-lg transition-all duration-300"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="pt-4 border-t border-blue-500/20">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-400/50 text-blue-300 hover:bg-blue-400/10"
                    onClick={handleCVDownload}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger CV
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
