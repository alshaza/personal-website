import type { ReactNode } from 'react'
import { Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { bookingFunnelContent, ctaContent } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_BUTTON_VALUES, ANALYTICS_CONTENT_TYPES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
import { externalNewTabLinkProps } from '../../lib/external-link-props'
import { FadeSection } from '../fade-section'
import {
  CTABookBlock,
  CTAButton,
  CTAContainer,
  CTAContent,
  CTADescription,
  CTAMicroLine,
  ProcessBlock,
  ProcessList,
  ProcessStep,
  CTAFooter,
  CTALinkedInBlock,
  CTALinkedInLink,
} from './contact-cta.styles'

function FadeMaybe({
  off,
  direction,
  children,
}: {
  off: boolean
  direction: 'left' | 'right'
  children: ReactNode
}) {
  if (off) return children
  return <FadeSection direction={direction}>{children}</FadeSection>
}

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
  const { calendarUrl, linkedInUrl } = ctaContent
  const {
    primaryCtaLabel,
    ctaMicroCopy,
    processHeading,
    processSteps,
  } = bookingFunnelContent

  return (
    <CTAContainer as="section" role={'contentinfo'}>
      <CTAContent>
        <FadeMaybe off={disableFade} direction="left">
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
              {...externalNewTabLinkProps}
            >
              {primaryCtaLabel}
            </CTAButton>
            <CTAMicroLine variant="body2">
              {ctaMicroCopy}
            </CTAMicroLine>
            <ProcessBlock>
              <Typography variant="subtitle1" component="p" sx={{ mb: 1.5, fontWeight: 600 }}>
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
            </ProcessBlock>
          </CTABookBlock>
        </FadeMaybe>

        <FadeMaybe off={disableFade} direction="right">
          <CTALinkedInBlock>
            <CTALinkedInLink
              href={linkedInUrl}
              {...externalNewTabLinkProps}
              aria-label="Rami Alshaza LinkedIn profile"
              onClick={() => {
                trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
                  [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: ANALYTICS_BUTTON_VALUES.LINKEDIN_PROFILE,
                  [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.CONTACT_CTA,
                  [ANALYTICS_PARAM_KEYS.TARGET_URL]: linkedInUrl,
                })
                trackEvent(ANALYTICS_EVENTS.SELECT_CONTENT, {
                  [ANALYTICS_PARAM_KEYS.CONTENT_TYPE]: ANALYTICS_CONTENT_TYPES.LINKEDIN_LINK,
                  [ANALYTICS_PARAM_KEYS.ITEM_ID]: 'linkedin_profile',
                  [ANALYTICS_PARAM_KEYS.TARGET_URL]: linkedInUrl,
                  [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.CONTACT_CTA,
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
        </FadeMaybe>
      </CTAContent>
      <CTAFooter variant="body2">
        Created by Rami © 2026
      </CTAFooter>
    </CTAContainer>
  )
}
