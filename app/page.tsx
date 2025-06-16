import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
// Ajouter l'import de ServicesSection
import ServicesSection from "@/components/services-section"
import EducationSection from "@/components/education-section"
import TestimonialsSection from "@/components/testimonials-section"



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
         <ExperienceSection />
         <ProjectsSection />
         <SkillsSection />
        <EducationSection />
        
        {/* Ajouter ServicesSection après SkillsSection et avant ProjectsSection */}
       
        <ServicesSection />
        {/* <TestimonialsSection /> */}
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
