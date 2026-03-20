import { Button, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { calendarUrl } from '../../data/content'
import { CTAContainer } from './contact-cta.styles'

export function ContactCTA() {
  return (
    <CTAContainer as="section">
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
    </CTAContainer>
  )
}
