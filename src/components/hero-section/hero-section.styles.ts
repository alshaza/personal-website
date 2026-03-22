import { Box, Typography, styled } from '@mui/material'

export const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: 64,
  },
}))

export const HeroImageWrapper = styled(Box)(({ theme }) => ({
  display: 'none',
  width: '100%',
  maxWidth: 320,
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 16,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    maxWidth: 420,
    animation: 'heroImageLeftIn 700ms ease-out both',
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
  animation: 'heroTextTopIn 650ms ease-out both',
  animationDelay: '120ms',
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
