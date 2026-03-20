import { Box } from '@mui/material'
import { HeroSection } from '../components/hero-section/hero-section'
import { Testimonials } from '../components/testimonials/testimonials'
import { HowCanIHelp } from '../components/how-can-i-help/how-can-i-help'
import { Timeline } from '../components/timeline/timeline'
import { ImageSlider } from '../components/image-slider/image-slider'
import { ContactCTA } from '../components/contact-cta/contact-cta'

export function HomePage() {
  return (
    <Box component="main">
      <HeroSection />
      <Testimonials />
      <HowCanIHelp />
      <Timeline />
      <ImageSlider />
      <ContactCTA />
    </Box>
  )
}
