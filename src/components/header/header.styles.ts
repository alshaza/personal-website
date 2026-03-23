import { Box, Stack, ToggleButtonGroup, styled } from '@mui/material'

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
  minHeight: 36,
  display: 'flex',
  alignItems: 'center',
})

export const HeaderToggleSection = styled(Box)({
  position: 'relative',
})

export const HeaderToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  maxWidth: '100%',
  '& .MuiToggleButton-root': {
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: '0.84rem',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 18,
      paddingRight: 18,
      fontSize: '0.95rem',
    },
  },
}))
