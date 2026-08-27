import LinkedInIcon from '@mui/icons-material/LinkedIn'
import type { FooterLink as FooterLinkData } from '../../data/content'
import { footerNavLinks, footerSocialLinks } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_CONTENT_TYPES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
import { externalLinkPropsForHref } from '../../lib/external-link-props'
import { FooterContainer, FooterLinks, FooterNav, FooterLink, FooterCopyright } from './footer.styles'

function FooterLinkItem({ link, contentType }: { link: FooterLinkData; contentType: string }) {
  return (
    <FooterLink
      href={link.href}
      {...externalLinkPropsForHref(link.href)}
      underline="hover"
      onClick={() => {
        trackEvent(ANALYTICS_EVENTS.SELECT_CONTENT, {
          [ANALYTICS_PARAM_KEYS.CONTENT_TYPE]: contentType,
          [ANALYTICS_PARAM_KEYS.ITEM_ID]: link.id,
          [ANALYTICS_PARAM_KEYS.TARGET_URL]: link.href,
          [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.FOOTER,
        })
      }}
    >
      {link.id === 'linkedin' && <LinkedInIcon fontSize="small" />}
      {link.label}
    </FooterLink>
  )
}

export function Footer() {
  return (
    <FooterContainer as="footer">
      <FooterNav aria-label="Footer navigation">
        {footerNavLinks.map((link) => (
          <FooterLinkItem key={link.id} link={link} contentType={ANALYTICS_CONTENT_TYPES.NAV_LINK} />
        ))}
      </FooterNav>
      <FooterLinks>
        {footerSocialLinks.map((link) => (
          <FooterLinkItem key={link.id} link={link} contentType={ANALYTICS_CONTENT_TYPES.LINKEDIN_LINK} />
        ))}
      </FooterLinks>
      <FooterCopyright variant="body2">Created by Rami © 2026</FooterCopyright>
    </FooterContainer>
  )
}
