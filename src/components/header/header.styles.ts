import { Stack, styled } from '@mui/material'

export const HeaderContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: 'calc(12px + env(safe-area-inset-top, 0px))',
  paddingRight: '16px',
  paddingBottom: '12px',
  paddingLeft: '16px',
  gap: 8,
  position: 'sticky',
  top: 0,
  zIndex: 1100,
  backdropFilter: 'blur(12px)',
  background: 'rgba(255, 255, 255, 0.9)',
  [theme.breakpoints.up('sm')]: {
    paddingTop: 'calc(16px + env(safe-area-inset-top, 0px))',
    paddingRight: '32px',
    paddingBottom: '16px',
    paddingLeft: '32px',
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: 'calc(16px + env(safe-area-inset-top, 0px))',
    paddingRight: '64px',
    paddingBottom: '16px',
    paddingLeft: '64px',
  },
}))

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

export const HeaderToggleSection = styled('div', {
  shouldForwardProp: (prop) => prop !== 'scrolledPast',
})<{scrolledPast: boolean}>(({ scrolledPast }) => ({
  opacity: scrolledPast ? 0 : 1,
  transform: scrolledPast ? 'translateY(-8px)' : 'translateY(0)',
  transition: 'opacity 0.25s ease, transform 0.25s ease',
  pointerEvents: scrolledPast ? 'none' : 'auto',
  position: scrolledPast ? 'absolute' : 'relative',
}))
