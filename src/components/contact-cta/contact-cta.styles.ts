import { Box, styled } from '@mui/material'

export const CTAContainer = styled(Box)(({ theme }) => ({
  padding: '64px 16px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  [theme.breakpoints.up('sm')]: {
    padding: '80px 32px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '100px 64px',
  },
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
    gap: 40,
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

export const CTALinkedInBlock = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  '& .badge-base': {
    margin: '0 auto',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    flex: '0 0 auto',
  },
}))
