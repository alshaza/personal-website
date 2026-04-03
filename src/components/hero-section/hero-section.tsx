import { Stack, Typography } from '@mui/material'
import { ctaContent, heroContent } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_BUTTON_VALUES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
import { HeroContainer, HeroImageWrapper, HeroTextWrapper, HeroSubheading, CTAButton } from './hero-section.styles'

export function HeroSection() {
  const { calendarUrl } = ctaContent

  return (
    <HeroContainer as="section">
      <HeroImageWrapper>
        <img src="/main-image.webp" alt="Rami Alshaza" fetchPriority="high" />
      </HeroImageWrapper>
      <HeroTextWrapper>
        <Typography variant="h1" gutterBottom>
          {heroContent.heading}
        </Typography>
        <HeroSubheading variant="h3" {...{ component: 'h2' }} color="primary">
          {heroContent.subheading}
        </HeroSubheading>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {heroContent.body}
        </Typography>
        <Stack alignItems={"center"}>
          <CTAButton
            variant="contained"
            size="large"
            href={calendarUrl}
            onClick={() => {
              trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
                [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: ANALYTICS_BUTTON_VALUES.BOOK_CALL,
                [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.HERO,
                [ANALYTICS_PARAM_KEYS.TARGET_URL]: calendarUrl,
              })
            }}
            {...{ target: '_blank', rel: 'noopener noreferrer nofollow' }}
          >
            Book a Call
          </CTAButton>
        </Stack>
      </HeroTextWrapper>
    </HeroContainer>
  )
}
