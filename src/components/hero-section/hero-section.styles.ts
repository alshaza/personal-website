import { Box, Button, Link, Stack, Typography, styled } from '@mui/material'

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

export const HeroHeading = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.75),
  fontSize: '1.65rem',
  lineHeight: 1.22,
  maxWidth: 640,
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.85rem',
  },
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(1),
    fontSize: '2.15rem',
    marginLeft: 0,
    marginRight: 0,
    textAlign: 'left',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.35rem',
  },
}))

export const HeroHeadingLine = styled('span')({
  display: 'block',
  // Block spans stretch to the column width by default, so long clauses wrap
  // mid-sentence; keep each heading line as a single row.
  whiteSpace: 'nowrap',
})

export const HeroCTAStack = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
  },
}))

export const HeroCtaMicroCopy = styled(Typography)(({ theme }) => ({
  maxWidth: 'min(100%, 420px)',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    maxWidth: 'none',
    whiteSpace: 'nowrap',
  },
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}))

export const HeroCtaMicroCopySegment = styled('span', {
  shouldForwardProp: (prop) => prop !== 'phrase',
})<{ phrase: boolean }>(({ phrase }) => ({
  whiteSpace: phrase ? 'nowrap' : 'normal',
}))

export const HeroSecondaryLink = styled(Link)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  fontWeight: 600,
})) as typeof Link