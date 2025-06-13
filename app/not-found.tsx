"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Custom404() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 text-center">
      {/* Logo en haut */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6 cursor-pointer"
      >
        <img
          src="/ELOM_logo.png"
          alt="Logo"
          className="w-48 mx-auto"
        />
      </motion.div>

      {/* Code d'erreur */}
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold text-blue-400"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        className="text-gray-300 mt-4 text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Oups 😅 La page que vous cherchez n'existe pas.
      </motion.p>

      {/* Bouton retour animé */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/">
          <Button
            variant="outline"
            className="text-blue-300 border-blue-400/50 hover:bg-blue-400/10 hover:text-cyan-300 transition-all duration-300"
          >
            <Zap className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
