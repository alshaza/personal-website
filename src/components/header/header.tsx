import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {
  HeaderContainer,
  HeaderLogo,
  HeaderLogoLink,
  HeaderRightSection,
  HeaderNavSection,
  HeaderNavLinks,
  HeaderNavLink,
} from './header.styles'
import type { NavigationItem } from '../../data/content'
import { navigationItems } from '../../data/content'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_CONTENT_TYPES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'

function trackHeaderNav(item: NavigationItem) {
  const itemId = `nav_${item.path === '/' ? 'home' : item.path.replace(/^\//, '').replace(/-/g, '_')}`
  trackEvent(ANALYTICS_EVENTS.CUSTOM_BUTTON_CLICK, {
    [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: itemId,
    [ANALYTICS_PARAM_KEYS.BUTTON_LABEL]: item.label,
    [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.HEADER,
    [ANALYTICS_PARAM_KEYS.TARGET_PAGE]: item.path,
  })
  trackEvent(ANALYTICS_EVENTS.SELECT_CONTENT, {
    [ANALYTICS_PARAM_KEYS.CONTENT_TYPE]: ANALYTICS_CONTENT_TYPES.NAV_LINK,
    [ANALYTICS_PARAM_KEYS.ITEM_ID]: itemId,
    [ANALYTICS_PARAM_KEYS.TARGET_PAGE]: item.path,
    [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.HEADER,
  })
}

export function Header() {
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileOpen(false)
  }

  const homeNavItem = navigationItems.find((item) => item.path === '/')

  return (
    <HeaderContainer>
      <HeaderLogoLink
        to="/"
        aria-label="Home"
        onClick={() => {
          if (homeNavItem) trackHeaderNav(homeNavItem)
        }}
      >
        <HeaderLogo src="/logo.svg" alt="Rami Alshaza" fetchPriority="high" />
      </HeaderLogoLink>
      <HeaderRightSection>
        <HeaderNavSection>
          <HeaderNavLinks aria-label="Primary navigation">
            {navigationItems.map((item) => (
              <HeaderNavLink
                key={item.path}
                to={item.path}
                onClick={() => {
                  trackHeaderNav(item)
                }}
              >
                {item.label}
              </HeaderNavLink>
            ))}
          </HeaderNavLinks>

          {!isMdUp && (
            <>
              <IconButton
                color="inherit"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation-drawer"
                edge="end"
                onClick={() => {
                  setMobileOpen(true)
                }}
                sx={{ marginRight: 0 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                id="mobile-navigation-drawer"
                anchor="right"
                open={mobileOpen}
                onClose={closeMobileMenu}
                ModalProps={{ keepMounted: true }}
                slotProps={{
                  backdrop: {
                    invisible: true,
                    sx: {
                      backgroundColor: 'transparent',
                    },
                  },
                  paper: {
                    sx: {
                      width: 'min(280px, 78vw)',
                      height: 'auto',
                      maxHeight: 'min(480px, calc(100vh - 24px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px)))',
                      alignSelf: 'flex-start',
                      mt: 'calc(12px + env(safe-area-inset-top, 0px))',
                      mr: 'calc(12px + env(safe-area-inset-right, 0px))',
                      mb: 'calc(12px + env(safe-area-inset-bottom, 0px))',
                      ml: 'auto',
                      borderRadius: 2,
                      boxShadow: theme.shadows[12],
                      backgroundColor: 'rgba(var(--color-cream-rgb), 0.98)',
                      overflow: 'hidden',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    minHeight: 48,
                    pr: 2,
                    pl: 2,
                    pt: 1.5,
                    pb: 0.5,
                  }}
                >
                  <IconButton
                    aria-label="Close menu"
                    onClick={closeMobileMenu}
                    size="medium"
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List
                  component="nav"
                  aria-label="Primary navigation"
                  sx={{
                    px: 2,
                    pb: 2,
                    pt: 0,
                  }}
                >
                  {navigationItems.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemButton
                        component={HeaderNavLink}
                        to={item.path}
                        onClick={() => {
                          trackHeaderNav(item)
                          closeMobileMenu()
                        }}
                        sx={{
                          borderRadius: 2,
                          '&.active': {
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          sx={{ fontWeight: 600 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          )}
        </HeaderNavSection>
      </HeaderRightSection>
    </HeaderContainer>
  )
}
