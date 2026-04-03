import { Box, Stack, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

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
  background: 'rgba(var(--color-cream-rgb), 0.9)',
  paddingTop: 'calc(16px + env(safe-area-inset-top, 0px))',
  paddingBottom: '16px',
})

export const HeaderLogo = styled('img')({
  height: '72px',
  width: '72px',
  flexShrink: 0,
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
  gap: 6,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    gap: 8,
  },
}))

export const HeaderNavLink = styled(NavLink)(({ theme }) => ({
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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.95rem',
    padding: '10px 16px',
  },
}))
