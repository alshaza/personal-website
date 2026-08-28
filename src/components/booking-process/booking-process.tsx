import { Typography } from '@mui/material'
import { bookingFunnelContent } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
import { BookingProcessContainer, BookingProcessCard, OptionCard, OptionsGrid, ProcessList, ProcessStep } from './booking-process.styles'

function trackScrollCta(buttonName: string, targetId: string) {
  trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
    [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: buttonName,
    [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.CONTACT_CTA,
    [ANALYTICS_PARAM_KEYS.TARGET_URL]: `#${targetId}`,
  })
}

export function BookingProcess() {
  const { processHeading, processSteps, contactOptions } = bookingFunnelContent

  return (
    <BookingProcessContainer as="section" aria-labelledby="booking-process-heading">
      <BookingProcessCard>
        <Typography
          id="booking-process-heading"
          variant="h1"
          component="h1"
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, mb: 3 }}
        >
          How working together works
        </Typography>

        <OptionsGrid>
          {contactOptions.map((option) => (
            <OptionCard
              key={option.targetId}
              href={`#${option.targetId}`}
              onClick={() => {
                trackScrollCta(option.title, option.targetId)
              }}
            >
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>
                {option.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {option.description}
              </Typography>
            </OptionCard>
          ))}
        </OptionsGrid>

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
