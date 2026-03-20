import { Stack, styled } from '@mui/material'

export const HeaderContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 16px',
  position: 'sticky',
  top: 0,
  zIndex: 1100,
  backdropFilter: 'blur(12px)',
  background: 'rgba(255, 255, 255, 0.9)',
  [theme.breakpoints.up('sm')]: {
    padding: '16px 32px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '16px 64px',
  },
}))

export const HeaderLogo = styled('img')({
  height: "100px",
  width: '100px',
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
