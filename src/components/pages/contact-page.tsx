import { Box, Typography } from '@mui/material'
import { Providers } from '../Providers'
import { Header } from '../header/header'
import { AppContainer, MainContainer } from '../layout.styles'
import { CollaborateOpportunities } from '../collaborate-opportunities/collaborate-opportunities'
import { ContactCTA } from '../contact-cta/contact-cta'
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

          {/* Phase 5: contact form (name/email/message + Turnstile) → POST /api/contact → D1 */}

          <ContactCTA
            title={collaboratePageFooterCta.title}
            description={collaboratePageFooterCta.description}
          />
        </MainContainer>
      </AppContainer>
    </Providers>
  )
}
