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
      // Utilisation de FormSubmit au lieu de l'API personnalisée
      const form = e.currentTarget;
      const originalAction = form.action;
      
      // Configuration des paramètres supplémentaires pour FormSubmit
      form.action = `https://formsubmit.co/elotmani.dev@gmail.com`;
      
      // Ajout des champs cachés pour la configuration FormSubmit
      const hiddenInputs = [
        { name: '_subject', value: `Nouveau message de portfolio: ${formData.subject}` },
        { name: '_template', value: 'table' },
        { name: '_next', value: `${window.location.origin}${window.location.pathname}?contact=success` },
        { name: '_captcha', value: 'false' }
      ];
      
      // Ajout des champs cachés au formulaire
      hiddenInputs.forEach(input => {
        let hiddenInput = form.querySelector(`input[name="${input.name}"]`) as HTMLInputElement;
        if (!hiddenInput) {
          hiddenInput = document.createElement('input');
          hiddenInput.type = 'hidden';
          hiddenInput.name = input.name;
          form.appendChild(hiddenInput);
        }
        hiddenInput.value = input.value;
      });
      
      // Soumission traditionnelle du formulaire
      form.submit();
      
      // Réinitialiser le formulaire après soumission
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus({ success: true, message: 'Message envoyé avec succès!' });
      
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Une erreur est survenue lors de l\'envoi' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@elotmani-hicham.com",
      href: "mailto:contact@elotmani-hicham.com",
      color: "from-blue-400 to-cyan-400",
      description: "Réponse sous 24h",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+212 7 67 76 80 07",
      href: "tel:+212767768007",
      color: "from-cyan-400 to-blue-500",
      description: "Lun-Sam 9h-18h",
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
      followers: "elotmani hicham",
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
      name: "Instagram",
      href: "https://www.instagram.com/elom.hicham/",
      color: "hover:text-pink-400",
      followers: "elom.hicham",
    },
    {
      icon: Video,
      name: "TikTok",
      href: "https://www.tiktok.com/@elom_dev?is_from_webapp=1&sender_device=pc",
      color: "hover:text-purple-400",
      followers: "1ok+ abonnés",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      {/* Background effects */}
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

              <form 
                onSubmit={handleSubmit} 
                action={`https://formsubmit.co/elotmani.dev@gmail.com`}
                method="POST"
                className="space-y-6"
              >
                {/* Champs cachés pour FormSubmit */}
                <input type="hidden" name="_subject" value="Nouveau message de portfolio" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/#contact?contact=success`} />
                <input type="hidden" name="_captcha" value="false" />
                
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

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-lg">
                <p className="text-blue-200 text-sm">
                  <span className="font-medium text-cyan-300">💡 Astuce:</span> Plus vous serez spécifique sur votre projet, mieux je pourrai vous aider. N'hésitez pas à mentionner votre budget et votre calendrier.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}