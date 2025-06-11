"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, Mail, Phone, MapPin, Linkedin, Github, Instagram, Video, Calendar, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: '',
  });
  useEffect(() => {
  if (submitStatus.message) {
    const timer = setTimeout(() => {
      setSubmitStatus({ success: false, message: '' })
    }, 2000)
    return () => clearTimeout(timer)
  }
}, [submitStatus])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      const response = await fetch("/api/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: `Sujet: ${formData.subject}\n\nMessage: ${formData.message}\n\nDe: ${formData.name} <${formData.email}>`
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ success: true, message: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ success: false, message: data.message || 'Erreur lors de l\'envoi' });
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus({ 
        success: false, 
        message: error instanceof Error ? error.message : 'Une erreur est survenue' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "elotmani.dev@gmail.com",
      href: "mailto:elotmani.dev@gmail.com",
      color: "from-blue-400 to-cyan-400",
      description: "Réponse sous 24h",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+212 7 67b 76 80 07",
      href: "tel:+212767768007",
      color: "from-cyan-400 to-blue-500",
      description: "Lun-Ven 9h-18h",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Casablanca, Maroc",
      href: "#",
      color: "from-blue-500 to-indigo-500",
      description: "Disponible en remote",
    },
    {
      icon: Calendar,
      title: "Disponibilité",
      value: "Ouvert aux opportunités",
      href: "#",
      color: "from-indigo-500 to-purple-500",
      description: "Freelance & CDI",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hicham-elotmani/",
      color: "hover:text-blue-400",
      followers: "HICHAM ELOTMANI",
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/Elom-DEV",
      color: "hover:text-white",
      followers: "Elom-DEV",
    },
    {
      icon: Instagram,
      name: "hmeott",
      href: "https://www.instagram.com/hmeott/",
      color: "hover:text-pink-400",
      followers: "13k+ abonnés",
    },
    {
      icon: Video,
      name: "TikTok",
      href: "https://www.tiktok.com/@pixcodi?is_from_webapp=1&sender_device=pc",
      color: "hover:text-purple-400",
      followers: "1ok+ abonnés",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Travaillons{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Ensemble</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8"></div>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Vous avez un projet innovant en tête ? Discutons de la façon dont nous pouvons le concrétiser ensemble.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Zap className="h-5 w-5 text-cyan-300 mr-2" />
                Contactez-moi
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center p-4 rounded-xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-400/20 hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-blue-200 text-sm">{method.value}</p>
                      <p className="text-cyan-300 text-xs">{method.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/10">
              <h3 className="text-xl font-bold text-white mb-6">Réseaux Sociaux</h3>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    target="_blank"
                    className={`flex flex-col items-center p-4 rounded-xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-400/20 hover:border-blue-400/40 text-blue-300 ${social.color} transition-all duration-300 group`}
                  >
                    <social.icon className="h-6 w-6 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">{social.name}</span>
                    <span className="text-xs text-blue-400">{social.followers}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-300 font-medium">Site web</span> 
                <span className="text-purple-200 text-sm">5.6k+ Visiteurs</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-cyan-300 font-medium"><a href="https://pixcodi.net/" target="_blank">pixcodi.net</a></span>
                <span className="text-cyan-200 text-sm">Wallpapers gratuits</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/10">
              <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="bg-slate-800/50 border-blue-500/30 focus:border-cyan-400 text-white placeholder:text-blue-300/50 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      required
                      className="bg-slate-800/50 border-blue-500/30 focus:border-cyan-400 text-white placeholder:text-blue-300/50 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-200 mb-2">
                    Sujet *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    required
                    className="bg-slate-800/50 border-blue-500/30 focus:border-cyan-400 text-white placeholder:text-blue-300/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                    required
                    className="bg-slate-800/50 border-blue-500/30 focus:border-cyan-400 text-white placeholder:text-blue-300/50 min-h-[150px] transition-all duration-300"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Send className="h-5 w-5 mr-2" />
                  )}
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
                
                {submitStatus.message && (
                  <div
                    className={`mt-4 p-4 rounded-lg text-sm ${
                      submitStatus.success ? "bg-green-500/10 text-green-300" : "bg-red-500/10 text-red-300"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}