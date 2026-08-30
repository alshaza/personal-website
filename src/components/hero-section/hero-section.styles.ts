import { Box, Button, Link, Stack, Typography, styled } from '@mui/material'

export const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 150px)',
  gap: 32,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: 64,
    minHeight: 'calc(100vh - 150px)',
  },
}))

export const HeroTextWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
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

export const HeroSecondaryLink = styled(Link)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  fontWeight: 600,
})) as typeof Link