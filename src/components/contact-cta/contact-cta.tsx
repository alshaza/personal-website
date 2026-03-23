import { Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useViewerContext } from '../../context/viewer-context'
import { ctaContent } from '../../data/content'
import { FadeSection } from '../fade-section'
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
    <CTAContainer as="section" role={'contentinfo'}>
      <CTAContent>
        <FadeSection direction="left">
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
              {...{ target: '_blank', rel: 'noopener noreferrer' }}
            >
              Book a Call
            </CTAButton>
          </CTABookBlock>
        </FadeSection>

        <FadeSection direction="right">
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
                Rami Alshaza
              </Typography>
            </CTALinkedInLink>
          </CTALinkedInBlock>
        </FadeSection>
      </CTAContent>
      <CTAFooter variant="body2">
        Created by Rami © 2026
      </CTAFooter>
    </CTAContainer>
  )
}
