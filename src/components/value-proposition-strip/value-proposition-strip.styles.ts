import { Box, Typography, styled } from '@mui/material'

export const StripContainer = styled(Box)(({ theme }) => ({
  marginTop: 'var(--section-spacing)',
  padding: '32px 24px',
  borderRadius: 16,
  border: `2px solid ${theme.palette.primary.main}`,
  boxShadow: 'var(--shadow-blue)',
  maxWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  [theme.breakpoints.up('md')]: {
    padding: '40px 48px',
  },
}))

export const StripBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

export const StripHeading = styled(Typography)({
  fontWeight: 700,
})
