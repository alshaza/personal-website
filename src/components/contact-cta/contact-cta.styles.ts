import { Box, styled } from '@mui/material'

export const CTAContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: 24,
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
