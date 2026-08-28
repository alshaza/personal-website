import { Box } from '@mui/material'
import { Providers } from '../Providers'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { AppContainer, MainContainer } from '../layout.styles'
import { HeroSection } from '../hero-section/hero-section'
import { ImpactStats } from '../impact-stats/impact-stats'
import { AudienceSegments } from '../audience-segments/audience-segments'
import { HowCanIHelp } from '../how-can-i-help/how-can-i-help'
import { Testimonials } from '../testimonials/testimonials'
import { ContactCTA } from '../contact-cta/contact-cta'
import { InterestSignup } from '../interest-signup/interest-signup'
import { bookingFunnelContent } from '../../data/content'

export function HomePage() {
  return (
    <Providers>
      <AppContainer>
        <Header currentPath="/" />
        <MainContainer role="main">
          <HeroSection />
          <ImpactStats />
          <AudienceSegments />
          <HowCanIHelp />
          <Testimonials />
          <Box sx={{ maxWidth: 720, mx: 'auto', width: '100%' }}>
            <InterestSignup />
          </Box>
          <ContactCTA
            title={bookingFunnelContent.defaultFooterTitle}
            description={bookingFunnelContent.defaultFooterDescription}
          />
        </MainContainer>
        <Footer />
      </AppContainer>
    </Providers>
  )
}
