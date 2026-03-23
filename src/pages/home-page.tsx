import { HeroSection } from '../components/hero-section/hero-section'
import { Testimonials } from '../components/testimonials/testimonials'
import { HowCanIHelp } from '../components/how-can-i-help/how-can-i-help'
import { Timeline } from '../components/timeline/timeline'
import { ImageSlider } from '../components/image-slider/image-slider'
import { ContactCTA } from '../components/contact-cta/contact-cta'
import { FadeSection } from '../components/fade-section'
import { MainContainer } from './home-page.styles'

export function HomePage() {
  return (
    <MainContainer role={'main'}>
      <HeroSection />
      <FadeSection>
        <HowCanIHelp />
      </FadeSection>
      <FadeSection>
        <Testimonials />
      </FadeSection>
      <FadeSection>
        <ImageSlider />
      </FadeSection>
      <FadeSection>
        <Timeline />
      </FadeSection>
      <ContactCTA />
    </MainContainer>
  )
}
