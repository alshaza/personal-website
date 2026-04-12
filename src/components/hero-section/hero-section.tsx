import { Box, Link as MuiLink, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { ctaContent, heroContent } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_BUTTON_VALUES, ANALYTICS_CONTENT_TYPES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
import { externalNewTabLinkProps } from '../../lib/external-link-props'
import { HeroContainer, HeroImageWrapper, HeroTextWrapper, HeroSubheading, CTAButton } from './hero-section.styles'

export function HeroSection() {
  const { calendarUrl } = ctaContent

  return (
    <HeroContainer as="section">
      <HeroImageWrapper>
        <img src="/main-image.webp" alt="Rami Alshaza" fetchPriority="high" />
      </HeroImageWrapper>
      <HeroTextWrapper>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: { xs: '1.65rem', sm: '1.85rem', md: '2.15rem', lg: '2.35rem' },
            lineHeight: 1.22,
            maxWidth: 640,
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          {heroContent.headingLines.map((line) => (
            <Box component="span" display="block" key={line}>
              {line}
            </Box>
          ))}
        </Typography>
        <HeroSubheading variant="h3" {...{ component: 'h2' }} color="primary">
          {heroContent.subheading}
        </HeroSubheading>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {heroContent.body}
        </Typography>
        <Stack
          alignItems={{ xs: 'center', md: 'flex-start' }}
          spacing={1}
        >
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
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420 }}>
            {heroContent.ctaMicroCopy}
          </Typography>
          <MuiLink
            component={RouterLink}
            to="/find-your-path"
            variant="body2"
            sx={{ mt: 0.5, fontWeight: 600 }}
            onClick={() => {
              trackEvent(ANALYTICS_EVENTS.SELECT_CONTENT, {
                [ANALYTICS_PARAM_KEYS.CONTENT_TYPE]: ANALYTICS_CONTENT_TYPES.HERO_SECONDARY_LINK,
                [ANALYTICS_PARAM_KEYS.ITEM_ID]: 'hero_find_your_path',
                [ANALYTICS_PARAM_KEYS.TARGET_PAGE]: '/find-your-path',
                [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.HERO,
              })
            }}
          >
            Not sure where to start? Take the 3-question check-in.
          </MuiLink>
        </Stack>
      </HeroTextWrapper>
    </HeroContainer>
  )
}
