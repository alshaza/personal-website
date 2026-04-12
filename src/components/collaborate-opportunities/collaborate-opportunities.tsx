import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Typography } from '@mui/material'
import { collaborateOpportunities } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_CONTENT_TYPES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
import { externalLinkPropsForHref } from '../../lib/external-link-props'
import {
  OpportunitiesSection,
  OpportunitiesGrid,
  OpportunityBody,
  OpportunityCta,
  OpportunityPanel,
  OpportunityTitle,
} from './collaborate-opportunities.styles'

export function CollaborateOpportunities() {
  return (
    <OpportunitiesSection as="section" aria-labelledby="collaborate-opportunities-heading">
      <Typography id="collaborate-opportunities-heading" variant="h2" sx={{ mb: 3, textAlign: 'center' }}>
        Ways to work together
      </Typography>
      <OpportunitiesGrid>
        {collaborateOpportunities.map((item) => (
          <OpportunityPanel key={item.id}>
            <OpportunityTitle>{item.title}</OpportunityTitle>
            <OpportunityBody>{item.body}</OpportunityBody>
            <OpportunityCta
              variant="text"
              color="primary"
              size="medium"
              href={item.ctaHref}
              endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem !important' }} aria-hidden />}
              onClick={() => {
                trackEvent(ANALYTICS_EVENTS.SELECT_CONTENT, {
                  [ANALYTICS_PARAM_KEYS.CONTENT_TYPE]: ANALYTICS_CONTENT_TYPES.COLLABORATE_OPPORTUNITY,
                  [ANALYTICS_PARAM_KEYS.ITEM_ID]: item.id,
                  [ANALYTICS_PARAM_KEYS.TARGET_URL]: item.ctaHref,
                  [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.COLLABORATE_PAGE,
                })
              }}
              {...externalLinkPropsForHref(item.ctaHref)}
            >
              {item.ctaLabel}
            </OpportunityCta>
          </OpportunityPanel>
        ))}
      </OpportunitiesGrid>
    </OpportunitiesSection>
  )
}
