import { Box, Typography } from '@mui/material'
import { ContactCTA } from '../components/contact-cta/contact-cta'
import { Seo } from '../components/seo/seo'
import { ImageSlider } from '../components/image-slider/image-slider'
import { ValuePropositionStrip } from '../components/value-proposition-strip/value-proposition-strip'
import { Testimonials } from '../components/testimonials/testimonials'
import { Timeline } from '../components/timeline/timeline'
import { aboutMeContent } from '../data/content'
import { MainContainer } from './home-page.styles'

export function AboutMePage() {
  return (
    <MainContainer role="main">
      <Seo path="/about-me" />
      <Box component="section" sx={{ mt: 4 }}>
        <Typography variant="h1" gutterBottom>
          {aboutMeContent.heading}
        </Typography>
        <Typography variant="h3" color="primary" gutterBottom>
          {aboutMeContent.intro}
        </Typography>
        {aboutMeContent.paragraphs.map((paragraph) => (
          <Typography key={paragraph} variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {paragraph}
          </Typography>
        ))}
      </Box>

      <ValuePropositionStrip />
      <ImageSlider />
      <Timeline />
      <Testimonials />
      <Box id="contact" sx={{ mt: { xs: 5, md: 6 } }}>
        <ContactCTA />
      </Box>
    </MainContainer>
  )
}
