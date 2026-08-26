import { Fragment } from 'react'
import { Typography } from '@mui/material'
import { ctaContent, heroContent } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_BUTTON_VALUES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
import { externalNewTabLinkProps } from '../../lib/external-link-props'
import {
  CTAButton,
  HeroContainer,
  HeroCTAStack,
  HeroCtaMicroCopy,
  HeroCtaMicroCopySegment,
  HeroHeading,
  HeroHeadingLine,
  HeroImageWrapper,
  HeroSubheading,
  HeroTextWrapper,
} from './hero-section.styles'

const CTA_MICRO_COPY_SEPARATOR = ' · '

export function HeroSection() {
  const { calendarUrl } = ctaContent
  const ctaMicroSegments = heroContent.ctaMicroCopy.split(CTA_MICRO_COPY_SEPARATOR)

  return (
    <HeroContainer as="section">
      <HeroImageWrapper>
        <img src="/main-image.webp" alt="Rami Alshaza" fetchPriority="high" />
      </HeroImageWrapper>
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
            href={calendarUrl}
            onClick={() => {
              trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
                [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: ANALYTICS_BUTTON_VALUES.BOOK_CALL,
                [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.HERO,
                [ANALYTICS_PARAM_KEYS.TARGET_URL]: calendarUrl,
              })
            }}
            {...externalNewTabLinkProps}
          >
            {heroContent.ctaLabel}
          </CTAButton>
          <HeroCtaMicroCopy variant="body2" color="text.secondary">
            {ctaMicroSegments.map((segment, index) => (
              <Fragment key={segment}>
                {index > 0 ? CTA_MICRO_COPY_SEPARATOR : null}
                <HeroCtaMicroCopySegment phrase={index < ctaMicroSegments.length - 1}>
                  {segment}
                </HeroCtaMicroCopySegment>
              </Fragment>
            ))}
          </HeroCtaMicroCopy>
        </HeroCTAStack>
      </HeroTextWrapper>
    </HeroContainer>
  )
}
