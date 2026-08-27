import { Button, Typography } from '@mui/material'
import { bookingFunnelContent } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_BUTTON_VALUES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
import { FadeSection } from '../fade-section'
import { CTAContainer, CTAContent, CTADescription, CTAMicroLine } from './contact-cta.styles'

interface ContactCTAProps {
  title?: string
  description?: string
  disableFade?: boolean
}

export function ContactCTA({
  title = bookingFunnelContent.defaultFooterTitle,
  description = bookingFunnelContent.defaultFooterDescription,
  disableFade = false,
}: ContactCTAProps) {
  const { ctaMicroCopy } = bookingFunnelContent

  const content = (
    <CTAContent>
      <Typography variant="h2" color="inherit">
        {title}
      </Typography>
      <CTADescription variant="body1">{description}</CTADescription>
      <CTAMicroLine variant="body2">{ctaMicroCopy}</CTAMicroLine>
      <Button
        variant="contained"
        href="/contact"
        onClick={() => {
          trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
            [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: ANALYTICS_BUTTON_VALUES.LETS_TALK,
            [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.CONTACT_CTA,
            [ANALYTICS_PARAM_KEYS.TARGET_URL]: '/contact',
          })
        }}
      >
        Let's talk
      </Button>
    </CTAContent>
  )

  return <CTAContainer as="section">{disableFade ? content : <FadeSection direction="left">{content}</FadeSection>}</CTAContainer>
}
