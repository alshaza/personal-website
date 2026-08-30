import { Box, IconButton, Stack, styled } from '@mui/material'

export const HeaderContainer = styled(Stack)({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '16px',
  paddingLeft: '16px',
  gap: 8,
  position: 'sticky',
  top: 0,
  zIndex: 1100,
  backdropFilter: 'blur(4px)',
  background: 'rgba(var(--color-cream-rgb), 0.7)',
  paddingTop: 'calc(8px + env(safe-area-inset-top, 0px))',
  paddingBottom: '8px',
})

export const HeaderLogoLink = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  lineHeight: 0,
  flexShrink: 0,
  borderRadius: 12,
  textDecoration: 'none',
  color: 'inherit',
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
}))

export const HeaderLogo = styled('img')({
  height: '72px',
  width: '72px',
  display: 'block',
  '@media (min-width: 600px)': {
    height: '88px',
    width: '88px',
  },
  '@media (min-width: 900px)': {
    height: '100px',
    width: '100px',
  },
})

export const HeaderRightSection = styled(Box)({
  position: 'relative',
  minHeight: 40,
  display: 'flex',
  alignItems: 'center',
})

export const HeaderNavSection = styled(Box)({
  position: 'relative',
})

export const HeaderNavLinks = styled('nav')(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: 4,
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}))

export const HeaderNavLink = styled('a')(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  borderRadius: 8,
  color: theme.palette.text.primary,
  fontSize: '0.84rem',
  fontWeight: 600,
  padding: '8px 12px',
  whiteSpace: 'nowrap',
  transition: 'background-color 180ms ease, color 180ms ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.active': {
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 2,
      height: 3,
      borderRadius: 1,
      backgroundColor: theme.palette.primary.main,
    },
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.05rem',
    padding: '6px 10px',
  },
}))

export const HeaderMobileMenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: 0,
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))
