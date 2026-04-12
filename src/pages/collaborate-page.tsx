import { Box, Typography } from '@mui/material'
import { CollaborateOpportunities } from '../components/collaborate-opportunities/collaborate-opportunities'
import { ContactCTA } from '../components/contact-cta/contact-cta'
import { Seo } from '../components/seo/seo'
import { collaborateContent, collaboratePageFooterCta } from '../data/content'
import { MainContainer } from './home-page.styles'

export function CollaboratePage() {
  return (
    <MainContainer role="main">
      <Seo path="/collaborate" />
      <Box component="section" sx={{ mt: 4 }}>
        <Typography variant="h1" gutterBottom>
          {collaborateContent.heading}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
          {collaborateContent.description}
        </Typography>
      </Box>

      <CollaborateOpportunities />
      <ContactCTA
        title={collaboratePageFooterCta.title}
        description={collaboratePageFooterCta.description}
      />
    </MainContainer>
  )
}
