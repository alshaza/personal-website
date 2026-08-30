import { Typography } from '@mui/material'
import { heroContent } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_BUTTON_VALUES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
import {
  CTAButton,
  HeroContainer,
  HeroCTAStack,
  HeroHeading,
  HeroHeadingLine,
  HeroSubheading,
  HeroTextWrapper,
} from './hero-section.styles'

const CONTACT_PATH = '/contact'

export function HeroSection() {
  return (
    <HeroContainer as="section">
      <HeroTextWrapper>
        <HeroHeading variant="h1" gutterBottom>
          {heroContent.headingLines.map((line) => (
            <HeroHeadingLine key={line}>{line}</HeroHeadingLine>
          ))}
        </HeroHeading>
        <HeroSubheading variant="h3" {...{ component: 'h2' }} color="primary">
          {heroContent.subheading}
        </HeroSubheading>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {heroContent.body}
        </Typography>
        <HeroCTAStack spacing={1}>
          <CTAButton
            variant="contained"
            size="large"
            href={CONTACT_PATH}
            onClick={() => {
              trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
                [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: ANALYTICS_BUTTON_VALUES.BOOK_CALL,
                [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.HERO,
                [ANALYTICS_PARAM_KEYS.TARGET_URL]: CONTACT_PATH,
              })
            }}
          >
            {heroContent.ctaLabel}
          </CTAButton>
        </HeroCTAStack>
      </HeroTextWrapper>
    </HeroContainer>
  )
}
