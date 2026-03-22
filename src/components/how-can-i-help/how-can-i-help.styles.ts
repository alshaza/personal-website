import { Box, IconButton, styled } from '@mui/material'

export const HelpContainer = styled(Box)(({ theme }) => ({
  padding: '48px 16px',
  [theme.breakpoints.up('sm')]: {
    padding: '64px 32px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '80px 64px',
  },
}))

export const HelpSliderViewport = styled(Box)({
  position: 'relative',
  maxWidth: 1000,
  margin: '0 auto',
  overflow: 'hidden',
})

export const HelpSliderTrack = styled(Box)({
  display: 'flex',
  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
})

export const HelpSlide = styled(Box)(({ theme }) => ({
  flex: '0 0 100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: "center",
  gap: 16,
  padding: '0 8px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: 32,
    alignItems: 'center',
  },
}))

export const HelpSlideImage = styled(Box)({
  overflow: 'hidden',
  width: '300px',
  height: '300px',
  '& img': {
    objectFit: 'cover',
    width: '300px',
    height: '300px',
  },
})

export const HelpSlideContent = styled(Box)(({ theme }) => ({
  padding: '8px 0',
  [theme.breakpoints.up('md')]: {
    flex: 1,
  },
}))

export const HelpSliderArrow = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(var(--color-cream-rgb), 0.85)',
  backdropFilter: 'blur(4px)',
  zIndex: 2,
  '&:hover': {
    backgroundColor: 'rgba(var(--color-cream-rgb), 0.95)',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

export const HelpDots = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: 8,
  marginTop: 16,
})

export const HelpDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[300],
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
}))
