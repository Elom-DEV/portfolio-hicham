"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Marie Dubois",
    role: "CTO",
    company: "TechCorp Solutions",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Jean est un développeur exceptionnel. Sa capacité à résoudre des problèmes complexes et à livrer des solutions de qualité dans les délais est remarquable. Il a été un atout précieux pour notre équipe.",
    rating: 5,
  },
  {
    name: "Pierre Martin",
    role: "Product Manager",
    company: "StartupXYZ",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Travailler avec Jean a été un plaisir. Il comprend parfaitement les besoins business et sait les traduire en solutions techniques élégantes. Son expertise en React et Node.js est impressionnante.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Lead Designer",
    company: "Digital Agency Pro",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Jean a une excellente compréhension du design et de l'UX. Il sait parfaitement intégrer nos maquettes en respectant chaque détail. La collaboration avec lui est toujours fluide et productive.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="testimonials" className="py-20 relative">
      {/* Même background dégradé que dans les autres sections */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-indigo-950/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Témoignages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8"></div>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Ce que disent mes collègues et clients sur notre collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-slate-900/80 to-blue-950/50 backdrop-blur-xl p-6 rounded-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/10 relative hover:shadow-cyan-500/40 transition-shadow"
            >
              <div className="absolute top-4 right-4 text-cyan-300">
                <Quote className="h-6 w-6" />
              </div>

              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border border-cyan-500/30 shadow-md shadow-cyan-500/20">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-cyan-300">{testimonial.role}</p>
                  <p className="text-sm text-blue-400">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-blue-200 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
