"use client"

import { motion } from "framer-motion"
import { Wrench } from "lucide-react"
556
export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Wrench className="w-16 h-16 text-yellow-400 mx-auto" />
      </motion.div>

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-yellow-400"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Site en maintenance
      </motion.h1>

      <motion.p
        className="text-gray-300 mt-4 text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Nous faisons quelques ajustements pour améliorer votre expérience. Merci de revenir plus tard !
      </motion.p>
    </div>
  )
}
