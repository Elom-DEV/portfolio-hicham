"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Globe, Zap, Check, Star, ArrowRight, Monitor, FileText, User, Crown, Rocket, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Portfolio Professionnel",
    description: "Site vitrine élégant pour présenter votre travail et expertise",
    icon: User,
    color: "from-blue-400 to-cyan-400",
    features: [
      "Design moderne et responsive",
      "Galerie de projets interactive",
      "Formulaire de contact intégré",
      "Optimisation SEO incluse",
      "Hébergement 1 an offert",
    ],
    deliveryTime: "4-7 jours",
    price: "Livrage",
    popular: false,
  },
  {
    id: 2,
    title: "Site One Page",
    description: "Solution complète sur une seule page pour un impact maximum",
    icon: Monitor,
    color: "from-cyan-400 to-blue-500",
    features: [
      "Design sur mesure unique",
      "Animations et effets visuels",
      "Section services détaillée",
      "Témoignages clients",
      "Intégration réseaux sociaux",
      "Analytics et suivi",
    ],
    deliveryTime: "3-5 jours",
    price: "Livrage",
    popular: true,
  },
  {
    id: 3,
    title: "Blog Professionnel",
    description: "Plateforme de contenu pour partager votre expertise",
    icon: FileText,
    color: "from-blue-500 to-indigo-500",
    features: [
      "CMS WordPress personnalisé",
      "Système de catégories avancé",
      "Commentaires et interactions",
      "Newsletter intégrée",
      "Optimisation vitesse",
      "Sauvegarde automatique",
    ],
    deliveryTime: "7-10 jours",
    price: "Livrage",
    popular: false,
  },
]

const packages = [
  {
    id: 1,
    name: "Starter",
    price: "",
    description: "Parfait pour débuter en ligne",
    icon: Zap,
    color: "from-blue-400 to-cyan-400",
    features: [
      "Site One Page responsive",
      "Design moderne inclus",
      "Formulaire de contact",
      "Optimisation mobile",
      "Support 30 jours",
      "Hébergement 6 mois",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Professional",
    price: " ",
    description: "Solution complète pour professionnels",
    icon: Crown,
    color: "from-cyan-400 to-blue-500",
    features: [
      "Site multi-pages WordPress",
      "Design 100% personnalisé",
      "Blog intégré",
      "SEO avancé",
      "Analytics détaillés",
      "Support 90 jours",
      "Hébergement 1 an",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Next.js Pro",
    price: "",
    description: "Développement de sites statiques et web apps performants avec Next.js",
    icon: Rocket,
    color: "from-blue-500 to-indigo-500",
    features: [
      "Site statique ultra-rapide avec Next.js",
      "Design moderne et personnalisé",
      "Hébergement inclus 1 an",
      "Maintenance 6 mois",
      "Support réactif",
      "Optimisation SEO",
    ],
    popular: false,
  }
]

const technologies = [
  { name: "WordPress", icon: "🔧", description: "CMS le plus populaire" },
  { name: "Hostinger", icon: "💡", description: "Hébergeur" },
  { name: "WooCommerce", icon: "🛒", description: "E-commerce intégré" },
  { name: "Yoast SEO", icon: "📈", description: "Optimisation référencement" },
  { name: "Security", icon: "🔒", description: "Protection avancée" },
  { name: "Speed", icon: "⚡", description: "Performance optimale" },
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<"services" | "packages">("services")

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Mes{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8"></div>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Création de sites WordPress professionnels, modernes et optimisés pour votre succès en ligne, ainsi que de sites statiques performants avec Next.js.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gradient-to-r from-slate-900/80 to-blue-950/50 backdrop-blur-xl p-2 rounded-2xl border border-blue-500/20">
            <div className="flex gap-2">
              <Button
                variant={activeTab === "services" ? "default" : "ghost"}
                onClick={() => setActiveTab("services")}
                className={`px-5 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === "services"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                    : "text-blue-300 hover:text-white hover:bg-blue-500/10"
                }`}
              >
                <Globe className="h-4 w-4 " />
                Types de Sites
              </Button>
              <Button
                variant={activeTab === "packages" ? "default" : "ghost"}
                onClick={() => setActiveTab("packages")}
                className={`px-3 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === "packages"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                    : "text-blue-300 hover:text-white hover:bg-blue-500/10"
                }`}
              >
                <Crown className="h-4 w-4 " />
                Packages
              </Button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "services" && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    onMouseEnter={() => setSelectedService(service.id)}
                    onMouseLeave={() => setSelectedService(null)}
                    className={`group relative bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${
                      service.popular
                        ? "border-cyan-400/50 shadow-lg shadow-cyan-400/20"
                        : "border-blue-500/20 hover:border-blue-400/40"
                    }`}
                  >
                    {/* Popular badge */}
                    {service.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                          POPULAIRE
                        </div>
                      </div>
                    )}

                    <div className="p-8">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-blue-200 mb-6 leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-blue-100 text-sm">
                            <Check className="h-4 w-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Price and delivery */}
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="text-cyan-300 text-sm">{service.deliveryTime}</div>
                        </div>
                      </div>

                      {/* CTA - MODIFICATION ICI */}
                      <Link href="/Service">
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 transition-all duration-300">
                          Savoir plus
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    {/* Hover effect */}
                    <AnimatePresence>
                      {selectedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 pointer-events-none"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Technologies{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Utilisées
                  </span>
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 text-center hover:border-blue-400/40 hover:bg-blue-500/20 transition-all duration-300 group"
                    >
                      <div className="text-2xl mb-2">{tech.icon}</div>
                      <div className="text-white font-medium text-sm mb-1">{tech.name}</div>
                      <div className="text-blue-300 text-xs">{tech.description}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "packages" && (
            <motion.div
              key="packages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Packages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className={`group relative bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2  ${
                      pkg.popular
                        ? "border-cyan-400/50 shadow-2xl shadow-cyan-400/20 scale-105"
                        : "border-blue-500/20 hover:border-blue-400/40"
                    }`}
                  >
                    {/* Popular badge */}
                    {pkg.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                          RECOMMANDÉ
                        </div>
                      </div>
                    )}

                    <div className="p-8 pt-12">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}
                      >
                        <pkg.icon className="h-8 w-8 text-white" />
                      </div>

                      {/* Header */}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                        <p className="text-blue-200 text-sm mb-4">{pkg.description}</p>
                        <div className="text-4xl font-bold text-white mb-1">{pkg.price}</div>
                        <div className="text-cyan-300 text-sm">Paiement unique</div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-blue-100 text-sm">
                            <Check className="h-4 w-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA - MODIFICATION ICI */}
                      <Link href="/Service">
                        <Button className={`w-full font-semibold py-3 transition-all duration-300 ${
                          pkg.popular
                            ? "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg shadow-cyan-400/25"
                            : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                        }`}>
                          {pkg.popular ? "Choisir ce package" : "Commencer"}
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    {/* Glow effect for popular */}
                    {pkg.popular && (
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 pointer-events-none" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Guarantee */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl p-8 rounded-2xl border border-green-400/20 text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Garantie Satisfaction</h3>
                </div>
                <p className="text-green-200 text-lg mb-4">
                  Satisfait ou remboursé sous 30 jours. Votre succès est ma priorité.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-green-300">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    Révisions illimitées
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    Support technique inclus
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    Livraison dans les délais
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}