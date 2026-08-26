import { Box, Typography } from '@mui/material'
import { Providers } from '../Providers'
import { Header } from '../header/header'
import { AppContainer, MainContainer } from '../layout.styles'
import { CollaborateOpportunities } from '../collaborate-opportunities/collaborate-opportunities'
import { ContactCTA } from '../contact-cta/contact-cta'
import { ContactForm } from '../contact-form/contact-form'
import { collaborateContent, collaboratePageFooterCta } from '../../data/content'

export function ContactPage() {
  return (
    <Providers>
      <AppContainer>
        <Header currentPath="/contact" />
        <MainContainer role="main">
          <Box component="section" sx={{ mt: 4 }}>
            <Typography variant="h1" gutterBottom>
              {collaborateContent.heading}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
              {collaborateContent.description}
            </Typography>
          </Box>

          <CollaborateOpportunities />

          <Box component="section" sx={{ mt: 6 }}>
            <Typography variant="h2" sx={{ fontSize: '1.75rem', mb: 2 }}>
              Send a message
            </Typography>
            <ContactForm />
          </Box>

          <ContactCTA
            title={collaboratePageFooterCta.title}
            description={collaboratePageFooterCta.description}
          />
        </MainContainer>
      </AppContainer>
    </Providers>
  )
}
