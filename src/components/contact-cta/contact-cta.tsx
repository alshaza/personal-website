import { Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useViewerContext } from '../../context/viewer-context'
import { ctaContent } from '../../data/content'
import {
  CTABookBlock,
  CTAButton,
  CTAContainer,
  CTAContent,
  CTADescription,
  CTAFooter,
  CTALinkedInBlock,
  CTALinkedInLink,
} from './contact-cta.styles'

export function ContactCTA() {
  const { viewer } = useViewerContext()
  const { calendarUrl } = ctaContent[viewer]

  return (
    <CTAContainer as="section">
      <CTAContent>
        <CTABookBlock>
          <Typography variant="h2" color="inherit">
            Let's Connect
          </Typography>
          <CTADescription variant="body1">
            Interested in working together? Book a time that works for you and let's
            have a conversation.
          </CTADescription>
          <CTAButton
            variant="contained"
            size="large"
            startIcon={<CalendarMonthIcon />}
            href={calendarUrl}
            rel="noopener noreferrer"
          >
            Book a Call
          </CTAButton>
        </CTABookBlock>

        <CTALinkedInBlock>
          <CTALinkedInLink
            href="https://www.linkedin.com/in/rami-alshaza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rami Alshaza LinkedIn profile"
            underline="always"
          >
            <LinkedInIcon />
            <Typography component="span" variant="body1" color="inherit">
              Let's Connect
            </Typography>
          </CTALinkedInLink>
        </CTALinkedInBlock>
      </CTAContent>
      <CTAFooter variant="body2">
        Created by Rami © 2026
      </CTAFooter>
    </CTAContainer>
  )
}
