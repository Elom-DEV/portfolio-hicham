"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import {
  Check,
  Star,
  ArrowRight,
  User,
  Palette,
  MessageCircle,
  Monitor,
  FileText,
  Zap,
  Crown,
  Rocket,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const portfolioTemplates = [
  {
    id: 1,
    name: "Portfolio Sombre et Clair",
    description: "Design élégant avec mode sombre et clair pour une expérience utilisateur optimale",
    image: "/dark-w.webp",
    demoUrl: "https://lightseagreen-stork-241500.hostingersite.com/",
    icon: User,
    color: "from-blue-400 to-cyan-400",
    packs: [
      {
        id: "pack1",
        name: "Pack Premium",
        price: "",
        features: [
          "Hébergement 1 an gratuit",
          "Adresse email professionnelle",
          "Nom de domaine gratuit",
          "Portfolio responsive",
          "Certificat SSL",
          "Maintenance 30 jours",
          "Formulaire de contact",
        ],
        popular: true,
      },
      {
        id: "pack2",
        name: "Pack Essentiel",
        price: " ",
        features: [
          "Hébergement 1 an gratuit",
          "Nom de domaine gratuit",
          "Portfolio responsive",
          "Certificat SSL",
          "Formulaire de contact",
        ],
        popular: false,
      },
    ],
  },
  {
    id: 2,
    name: "Portfolio Moderne",
    description: "Template contemporain avec animations fluides et design minimaliste",
    image: "/PortfolioModerne.webp",
    demoUrl: "https://elotmani-hicham.com/",
    icon: Palette,
    color: "from-cyan-400 to-blue-500",
    packs: [
      {
        id: "pack1",
        name: "Pack Premium",
        price: "",
        features: [
          "Hébergement 1 an gratuit",
          "Adresse email professionnelle",
          "Nom de domaine gratuit",
          "Portfolio responsive",
          "Certificat SSL",
          "Maintenance 30 jours",
          "Formulaire de contact",
        ],
        popular: true,
      },
      {
        id: "pack2",
        name: "Pack Essentiel",
        price: "",
        features: [
          "Hébergement 1 an gratuit",
          "Nom de domaine gratuit",
          "Portfolio responsive",
          "Certificat SSL",
          "Formulaire de contact",
        ],
        popular: false,
      },
    ],
  },
]

const otherServices = [
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
    price: "Sur devis",
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
    price: "Sur devis",
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
    price: "Sur devis",
    popular: false,
  },
]

const packages = [
  {
    id: 1,
    name: "Starter",
    price: "Sur devis",
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
    price: "Sur devis",
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
    price: "Sur devis",
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
  },
]

const technologies = [
  { name: "WordPress", icon: "🔧", description: "CMS le plus populaire" },
  { name: "Hostinger", icon: "💡", description: "Hébergeur" },
  { name: "WooCommerce", icon: "🛒", description: "E-commerce intégré" },
  { name: "Yoast SEO", icon: "📈", description: "Optimisation référencement" },
  { name: "Security", icon: "🔒", description: "Protection avancée" },
  { name: "Speed", icon: "⚡", description: "Performance optimale" },
]

export default function PortfolioServicesPage() {
  const [showPopup, setShowPopup] = useState(false)

//  Popup
useEffect(() => {
  const timer = setTimeout(() => setShowPopup(true), 3000)
  return () => clearTimeout(timer)
}, [])

  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleWhatsAppContact = (templateName: string, packName: string, price: string) => {
    const message = encodeURIComponent(
      `Bonjour! Je suis intéressé par le ${templateName} - ${packName} à ${price}. Pouvez-vous me donner plus d'informations?`,
    )
    window.open(`https://wa.me/212767768007?text=${message}`, "_blank")
  }

  const handleServiceContact = (serviceName: string) => {
    const message = encodeURIComponent(
      `Bonjour! Je suis intéressé par le service ${serviceName}. Pouvez-vous me donner plus d'informations?`,
    )
    window.open(`https://wa.me/212767768007?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-1.5 sm:px-6 sm:py-2">
              <span className="text-cyan-300 font-semibold text-sm sm:text-base">Services Professionnels</span>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
            Mes{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Services</span>
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-blue-200 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Création de sites WordPress professionnels, modernes et optimisés pour votre succès en ligne, ainsi que de
            sites statiques performants avec Next.js.
          </p>
        </motion.div>

        {/* Portfolio Templates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
              Templates{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-blue-200 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              Des templates professionnels optimisés pour CV et LinkedIn
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {portfolioTemplates.map((template, templateIndex) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + templateIndex * 0.2 }}
                onMouseEnter={() => setSelectedTemplate(template.id)}
                onMouseLeave={() => setSelectedTemplate(null)}
                className="relative bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 p-4 sm:p-6 lg:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                  {/* Left: Image */}
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${template.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <template.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{template.name}</h3>
                        <p className="text-blue-200 text-xs sm:text-sm">{template.description}</p>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-lg sm:rounded-xl border border-blue-500/30 group-hover:border-cyan-400/50 transition-all duration-500">
                        <Image
                          src={template.image || "/placeholder.svg"}
                          alt={template.name}
                          width={600}
                          height={400}
                          className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40"></div>
                      </div>

                      {/* Demo Button */}
                      <div className="mt-3 sm:mt-4">
                        <Button
                          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base"
                          onClick={() => window.open(template.demoUrl, "_blank")}
                        >
                          Voir la Démo
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Right: Pricing Packs */}
                  <div className="space-y-4 sm:space-y-6">
                    {template.packs.map((pack, packIndex) => (
                      <motion.div
                        key={pack.id}
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + templateIndex * 0.2 + packIndex * 0.1 }}
                        className={`relative bg-gradient-to-br from-slate-900/90 to-blue-950/60 backdrop-blur-xl rounded-lg sm:rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                          pack.popular
                            ? "border-cyan-400/50 shadow-lg shadow-cyan-400/20"
                            : "border-blue-500/20 hover:border-blue-400/40"
                        }`}
                      >
                        {/* Popular badge */}
                        {pack.popular && (
                          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
                            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold flex items-center">
                              <Star className="h-3 w-3 mr-1" />
                              RECOMMANDÉ
                            </div>
                          </div>
                        )}

                        <div className="p-4 sm:p-6">
                          {/* Pack Header */}
                          <div className="mb-3 sm:mb-4">
                            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{pack.name}</h4>
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{pack.price}</div>
                            <div className="text-cyan-300 text-xs">Paiement unique</div>
                          </div>

                          {/* Features */}
                          <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                            {pack.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-blue-100 text-xs sm:text-sm">
                                <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          {/* CTA Button */}
                          <Button
                            className={`w-full font-semibold py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300 group ${
                              pack.popular
                                ? "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg shadow-cyan-400/25"
                                : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                            }`}
                            onClick={() => handleWhatsAppContact(template.name, pack.name, pack.price)}
                          >
                            Choisir ce Service
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>

                        {/* Glow effect for popular */}
                        {pack.popular && (
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 pointer-events-none" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <AnimatePresence>
                  {selectedTemplate === template.id && (
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
              Autres{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-blue-200 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              Solutions complètes pour votre présence en ligne
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {otherServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                onMouseEnter={() => setSelectedService(service.id)}
                onMouseLeave={() => setSelectedService(null)}
                className={`group relative bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${
                  service.popular
                    ? "border-cyan-400/50 shadow-lg shadow-cyan-400/20"
                    : "border-blue-500/20 hover:border-blue-400/40"
                }`}
              >
                {service.popular && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      POPULAIRE
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-6 lg:p-8">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-blue-200 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-blue-100 text-xs sm:text-sm">
                        <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-cyan-300 text-xs sm:text-sm">{service.deliveryTime}</div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300"
                    onClick={() => handleServiceContact(service.title)}
                  >
                    Demander un devis
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
              Nos{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-blue-200 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              Des formules complètes adaptées à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                className={`group relative bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${
                  pkg.popular
                    ? "border-cyan-400/50 shadow-2xl shadow-cyan-400/20 sm:scale-105"
                    : "border-blue-500/20 hover:border-blue-400/40"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      RECOMMANDÉ
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-6 lg:p-8 pt-8 sm:pt-10 lg:pt-12">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${pkg.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}
                  >
                    <pkg.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>

                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-blue-200 text-xs sm:text-sm mb-3 sm:mb-4">{pkg.description}</p>
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{pkg.price}</div>
                    <div className="text-cyan-300 text-xs sm:text-sm">Paiement unique</div>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-blue-100 text-xs sm:text-sm">
                        <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full font-semibold py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg shadow-cyan-400/25"
                        : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                    }`}
                    onClick={() => handleServiceContact(pkg.name)}
                  >
                    {pkg.popular ? "Choisir ce package" : "Commencer"}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {pkg.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 pointer-events-none" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-blue-500/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
              Technologies{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Utilisées
              </span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:border-blue-400/40 hover:bg-blue-500/20 transition-all duration-300 group"
                >
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{tech.icon}</div>
                  <div className="text-white font-medium text-xs sm:text-sm mb-0.5 sm:mb-1">{tech.name}</div>
                  <div className="text-blue-300 text-xs">{tech.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-green-400/20 text-center"
        >
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mr-2 sm:mr-3" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">Garantie Satisfaction</h3>
          </div>
          <p className="text-green-200 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 px-4">
            Satisfait ou remboursé sous 30 jours. Votre succès est ma priorité.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-green-300">
            <div className="flex items-center justify-center">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
              Révisions illimitées
            </div>
            <div className="flex items-center justify-center">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
              Support technique inclus
            </div>
            <div className="flex items-center justify-center">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
              Livraison dans les délais
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-2xl shadow-green-400/50 hover:scale-110 transition-transform duration-300"
          onClick={() => {
            const message = encodeURIComponent("Bonjour! J'ai une question concernant vos services.")
            window.open(`https://wa.me/212767768007?text=${message}`, "_blank")
          }}
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        </Button>
      </motion.div>
      {/* Popup Offre spéciale */}
<AnimatePresence>
  {showPopup && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => setShowPopup(false)}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="relative bg-gradient-to-br from-slate-900/90 to-blue-950/70 border border-cyan-400/30 rounded-2xl p-6 sm:p-8 text-center max-w-md mx-4 shadow-lg shadow-cyan-400/20"
      >
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 text-cyan-300 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          🔥 Offre spéciale !
        </h2>
        <p className="text-blue-200 mb-6">
          -20% sur ton site web si tu demandes un devis <span className="text-cyan-300 font-semibold">aujourd’hui</span>.
        </p>

        <Button
          onClick={() =>
            window.open(
              "https://wa.me/212767768007?text=Bonjour! Je veux profiter de l'offre -20% pour la création de mon site web.",
              "_blank"
            )
          }
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 rounded-xl shadow-md shadow-cyan-400/30 transition-all"
        >
          Demander mon devis maintenant 🚀
        </Button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
    
  )
}
