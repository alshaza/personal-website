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
            sx={{ maxWidth: 520, color: 'rgba(255,255,255,0.8)' }}
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
              backgroundColor: '#ffffff',
              color: 'primary.main',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' },
            }}
          >
            Book a Call
          </Button>
        </CTABookBlock>

        <CTALinkedInBlock>
          <Link
            href="https://www.linkedin.com/in/rami-alshaza?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rami Alshaza LinkedIn profile"
            underline="always"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              color: '#ffffff',
              textDecorationColor: '#ffffff',
              '&:hover': {
                color: '#ffffff',
                textDecorationColor: '#ffffff',
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
        sx={{ mt: 4, color: 'rgba(255,255,255,0.82)' }}
      >
        Generated with love by Rami @ 2026
      </Typography>
    </CTAContainer>
  )
}
