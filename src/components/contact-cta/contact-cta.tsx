import { Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { ctaContent } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_BUTTON_VALUES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
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

interface ContactCTAProps {
  title?: string
  description?: string
}

export function ContactCTA({
  title = "Let's Connect",
  description = "Interested in working together? Book a time that works for you and let's have a conversation.",
}: ContactCTAProps) {
  const { calendarUrl, linkedInUrl } = ctaContent

  return (
    <CTAContainer as="section" role={'contentinfo'}>
      <CTAContent>
        <FadeSection direction="left">
          <CTABookBlock>
            <Typography variant="h2" color="inherit">
              {title}
            </Typography>
            <CTADescription variant="body1">
              {description}
            </CTADescription>
            <CTAButton
              variant="contained"
              size="large"
              startIcon={<CalendarMonthIcon />}
              href={calendarUrl}
              onClick={() => {
                trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
                  [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: ANALYTICS_BUTTON_VALUES.BOOK_CALL,
                  [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.CONTACT_CTA,
                  [ANALYTICS_PARAM_KEYS.TARGET_URL]: calendarUrl,
                })
              }}
              {...{ target: '_blank', rel: 'noopener noreferrer nofollow' }}
            >
              Book a Call
            </CTAButton>
          </CTABookBlock>
        </FadeSection>

        <FadeSection direction="right">
          <CTALinkedInBlock>
            <CTALinkedInLink
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Rami Alshaza LinkedIn profile"
              onClick={() => {
                trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
                  [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: ANALYTICS_BUTTON_VALUES.LINKEDIN_PROFILE,
                  [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.CONTACT_CTA,
                  [ANALYTICS_PARAM_KEYS.TARGET_URL]: linkedInUrl,
                })
              }}
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
