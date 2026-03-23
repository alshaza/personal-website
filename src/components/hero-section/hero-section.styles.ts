import { Box, Button, Typography, styled } from '@mui/material'

export const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 100px)',
  gap: 32,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: 64,
    minHeight: 'calc(100vh - 100px)',
  },
}))

export const HeroImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 320,
  overflow: 'hidden',
  animation: 'heroImageFadeIn 1000ms ease-out both',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  '@keyframes heroImageFadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(-20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: 487,
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

export const CTAButton = styled(Button)({
  marginTop: 8,
  fontSize: '1rem',
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 12,
  paddingBottom: 12,
})