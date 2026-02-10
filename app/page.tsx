import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { LinhaTempo } from "@/components/procedimento"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { AboutSection } from "@/components/about-section"
import { BenefitsSection } from "@/components/benefits-section"
import { VideoSection } from "@/components/video-section"
import { ContactSection } from "@/components/contact-section"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"
import { BeforeAfterSection } from "@/components/antesedepois"
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsBar />
      <LinhaTempo />
      <TestimonialsCarousel />
      <BeforeAfterSection />
      <AboutSection />
      <BenefitsSection />
      <GoogleReviewsSection />
      <VideoSection />
      <ContactSection />
      <WhatsAppFloatButton />
    </main>
  )
}
