import { Box, Button, Link, Typography, styled } from '@mui/material'

export const CTAContainer = styled(Box)(({ theme }) => ({
  marginTop: 'var(--section-spacing)',
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
}))

export const CTAContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  maxWidth: 1100,
  width: '100%',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 48,
  },
}))

export const CTABookBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: 24,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    textAlign: 'left',
    maxWidth: 560,
  },
}))

export const CTADescription = styled(Typography)({
  maxWidth: 520,
  color: 'text.secondary',
})

export const CTAMicroLine = styled(Typography)(({ theme }) => ({
  maxWidth: 520,
  color: theme.palette.text.secondary,
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}))

export const ProcessBlock = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 520,
  marginTop: 8,
  paddingTop: 20,
  borderTop: `1px solid ${theme.palette.divider}`,
}))

export const ProcessList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
})

export const ProcessStep = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
})

export const CTAButton = styled(Button)({
  marginTop: 8,
  fontSize: '1rem',
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 12,
  paddingBottom: 12,
})

export const CTALinkedInBlock = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    width: 'auto',
    justifyContent: 'flex-end',
    flex: '0 0 auto',
  },
}))

export const CTALinkedInLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  color: theme.palette.primary.main,
  textDecorationColor: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.primary.main,
    textDecorationColor: theme.palette.primary.main,
  },
}))

export const CTAFooter = styled(Typography)(({ theme }) => ({
  marginTop: 40,
  marginBottom: 24,
  color: theme.palette.text.secondary,
  textAlign: 'center',
}))
