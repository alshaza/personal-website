import { Box, Typography } from '@mui/material'
import { ContactCTA } from '../components/contact-cta/contact-cta'
import { Seo } from '../components/seo/seo'
import { contactPageContent } from '../data/content'
import { MainContainer } from './home-page.styles'

export function ContactPage() {
  return (
    <MainContainer role="main">
      <Seo path="/contact" />
      <Box component="section" sx={{ mt: 4 }}>
        <Typography variant="h1" gutterBottom>
          {contactPageContent.heading}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {contactPageContent.description}
        </Typography>
      </Box>
      <ContactCTA
        title="Ready to Connect?"
        description="Use one of the options below and I will get back to you quickly."
      />
    </MainContainer>
  )
}
