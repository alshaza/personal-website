import { Button, Typography } from '@mui/material'
import { bookingFunnelContent } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_BUTTON_VALUES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
import {
  BookingProcessContainer,
  BookingProcessCard,
  BookingProcessActions,
  ProcessList,
  ProcessStep,
} from './booking-process.styles'

function trackScrollCta(buttonName: string, targetId: string) {
  trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
    [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: buttonName,
    [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.CONTACT_CTA,
    [ANALYTICS_PARAM_KEYS.TARGET_URL]: `#${targetId}`,
  })
}

export function BookingProcess() {
  const { processHeading, processSteps } = bookingFunnelContent

  return (
    <BookingProcessContainer as="section" aria-labelledby="booking-process-heading">
      <BookingProcessCard>
        <Typography id="booking-process-heading" variant="h2" sx={{ fontSize: '1.75rem', mb: 1.5 }}>
          How working together works
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, mb: 3 }}>
          Have a short question? Use the contact form below. Want to talk it through together and find a
          solution? Book a free call.
        </Typography>

        <BookingProcessActions>
          <Button variant="outlined" href="#contact-form" onClick={() => trackScrollCta('use_contact_form', 'contact-form')}>
            Ask a quick question
          </Button>
          <Button
            variant="contained"
            href="#calendar-booking"
            onClick={() => trackScrollCta(ANALYTICS_BUTTON_VALUES.BOOK_CALL, 'calendar-booking')}
          >
            Book a free call
          </Button>
        </BookingProcessActions>

        <Typography variant="subtitle1" component="p" sx={{ mt: 4, mb: 1.5, fontWeight: 600 }}>
          {processHeading}
        </Typography>
        <ProcessList>
          {processSteps.map((step) => (
            <ProcessStep key={step.title}>
              <Typography variant="subtitle2" component="p" fontWeight={600}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {step.description}
              </Typography>
            </ProcessStep>
          ))}
        </ProcessList>
      </BookingProcessCard>
    </BookingProcessContainer>
  )
}
