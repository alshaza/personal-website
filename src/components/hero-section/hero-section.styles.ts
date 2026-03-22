import { Box, Typography, styled } from '@mui/material'

export const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 104px)',
  padding: '32px 0',
  gap: 32,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: 64,
    minHeight: 'calc(100vh - 132px)',
  },
}))

export const HeroImageWrapper = styled(Box)(({ theme }) => ({
  display: 'none',
  width: '100%',
  maxWidth: 420,
  overflow: 'hidden',
  flexShrink: 0,
  flex: 2,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    maxWidth: 500,
    animation: 'heroImageLeftIn 1000ms ease-out both',
  },
  '@keyframes heroImageLeftIn': {
    from: {
      opacity: 0,
      transform: 'translateX(-36px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}))

export const HeroTextWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  animation: 'heroTextTopIn 950ms ease-out both',
  animationDelay: '120ms',
  flex: 1,
  '@keyframes heroTextTopIn': {
    from: {
      opacity: 0,
      transform: 'translateY(-22px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes heroTextRightIn': {
    from: {
      opacity: 0,
      transform: 'translateX(36px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    flex: 1,
    animation: 'heroTextRightIn 700ms ease-out both',
    animationDelay: '420ms',
  },
  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}))

export const HeroSubheading = styled(Typography)({
  marginBottom: 16,
})
