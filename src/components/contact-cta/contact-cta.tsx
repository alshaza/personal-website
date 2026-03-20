import { Button, Link, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { calendarUrl } from '../../data/content'
import {
  CTABookBlock,
  CTAContainer,
  CTAContent,
  CTALinkedInBlock,
} from './contact-cta.styles'

export function ContactCTA() {
  return (
    <CTAContainer as="section">
      <CTAContent>
        <CTABookBlock>
          <Typography variant="h2" color="inherit">
            Let's Connect
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 520, color: 'text.secondary' }}
          >
            Interested in working together? Book a time that works for you and let's
            have a conversation.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<CalendarMonthIcon />}
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: 1,
              fontSize: '1rem',
              px: 4,
              py: 1.5,
            }}
          >
            Book a Call
          </Button>
        </CTABookBlock>

        <CTALinkedInBlock>
          <Link
            href="https://www.linkedin.com/in/rami-alshaza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rami Alshaza LinkedIn profile"
            underline="always"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              color: 'primary.main',
              textDecorationColor: 'primary.main',
              '&:hover': {
                color: 'primary.main',
                textDecorationColor: 'primary.main',
              },
            }}
          >
            <LinkedInIcon />
            <Typography component="span" variant="body1" color="inherit">
              Let's Connect
            </Typography>
          </Link>
        </CTALinkedInBlock>
      </CTAContent>
      <Typography
        component="footer"
        variant="body2"
        textAlign="center"
        sx={{ mt: 5, mb: 3, color: 'text.secondary' }}
      >
        Generated with love by Rami © 2026
      </Typography>
    </CTAContainer>
  )
}
