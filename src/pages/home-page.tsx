import { HeroSection } from '../components/hero-section/hero-section'
import { Testimonials } from '../components/testimonials/testimonials'
import { HowCanIHelp } from '../components/how-can-i-help/how-can-i-help'
import { ContactCTA } from '../components/contact-cta/contact-cta'
import { Seo } from '../components/seo/seo'
import { AudienceSegments } from '../components/audience-segments/audience-segments'
import { ImpactStats } from '../components/impact-stats/impact-stats'
import { bookingFunnelContent } from '../data/content'
import { MainContainer } from './home-page.styles'

export function HomePage() {
  return (
    <MainContainer role={'main'}>
      <Seo path="/" />
      <HeroSection />
      <ImpactStats />
      <AudienceSegments />
      <HowCanIHelp />
      <Testimonials />
      <ContactCTA
        title={bookingFunnelContent.defaultFooterTitle}
        description={bookingFunnelContent.defaultFooterDescription}
      />
    </MainContainer>
  )
}
