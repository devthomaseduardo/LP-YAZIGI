import { AreaDoAlunoButton } from '@/components/AreaDoAlunoButton'
import { HeroSection } from '@/components/HeroSection'
import { EnrollmentModal } from '@/components/EnrollmentModal'
import { AudienceCards } from '@/components/AudienceCards'
import { BenefitsSection } from '@/components/BenefitsSection'
import { DiagnosticSection } from '@/components/DiagnosticSection'
import { CoursesSection } from '@/components/CoursesSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { GallerySection } from '@/components/GallerySection'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { ImageCarousel } from '@/components/ImageCarousel'



const Index = () => {
  return (
    <div className='min-h-screen'>
      <AreaDoAlunoButton />
      <EnrollmentModal />
       <FloatingWhatsApp />
      <HeroSection />
   

      <BenefitsSection />
         
  <ImageCarousel />

      <AudienceCards />
      <TestimonialsSection />
      <CoursesSection />
      <GallerySection />
      <DiagnosticSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Index
