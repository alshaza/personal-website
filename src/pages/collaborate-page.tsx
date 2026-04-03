import { Box, Typography } from '@mui/material'
import { ContactCTA } from '../components/contact-cta/contact-cta'
import { FadeSection } from '../components/fade-section'
import { Seo } from '../components/seo/seo'
import { HowCanIHelp } from '../components/how-can-i-help/how-can-i-help'
import { ImageSlider } from '../components/image-slider/image-slider'
import { collaborateContent } from '../data/content'
import { MainContainer } from './home-page.styles'

export function CollaboratePage() {
  return (
    <MainContainer role="main">
      <Seo path="/collaborate" />
      <Box component="section" sx={{ mt: 4 }}>
        <Typography variant="h1" gutterBottom>
          {collaborateContent.heading}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {collaborateContent.description}
        </Typography>
      </Box>

      <FadeSection>
        <HowCanIHelp />
      </FadeSection>
      <FadeSection>
        <ImageSlider />
      </FadeSection>
      <ContactCTA
        title="Start a Collaboration"
        description="Book a call and share your goals. We can define a practical collaboration plan for your product and team."
      />
    </MainContainer>
  )
}
