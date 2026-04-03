import {
  HeaderContainer,
  HeaderLogo,
  HeaderRightSection,
  HeaderNavSection,
  HeaderNavLinks,
  HeaderNavLink,
} from './header.styles'
import { navigationItems } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_BUTTON_VALUES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src="/logo.svg" alt="Rami Alshaza" fetchPriority="high" />
      <HeaderRightSection>
        <HeaderNavSection>
          <HeaderNavLinks aria-label="Primary navigation">
            {navigationItems.map((item) => (
              <HeaderNavLink
                key={item.path}
                to={item.path}
                onClick={() => {
                  trackEvent(ANALYTICS_EVENTS.CUSTOM_BUTTON_CLICK, {
                    [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: ANALYTICS_BUTTON_VALUES.HEADER_NAVIGATION,
                    [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.HEADER,
                    [ANALYTICS_PARAM_KEYS.TARGET_PAGE]: item.path,
                  })
                }}
              >
                {item.label}
              </HeaderNavLink>
            ))}
          </HeaderNavLinks>
        </HeaderNavSection>
      </HeaderRightSection>
    </HeaderContainer>
  )
}
