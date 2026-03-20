import { Box, styled } from '@mui/material'

export const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,
  padding: '48px 16px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: 64,
    padding: '80px 64px',
  },
}))

export const HeroImageWrapper = styled(Box)(({ theme }) => ({
  display: 'none',
  width: '100%',
  maxWidth: 280,
  aspectRatio: '1',
  borderRadius: '50%',
  overflow: 'hidden',
  flexShrink: 0,
  backgroundColor: theme.palette.grey[200],
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    maxWidth: 380,
  },
}))

export const HeroTextWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    flex: 1,
  },
}))
