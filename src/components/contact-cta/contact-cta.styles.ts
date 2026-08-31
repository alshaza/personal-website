import { Box, Typography, styled } from '@mui/material'

export const CTAContainer = styled(Box)(({ theme }) => ({
  marginTop: 'var(--section-spacing)',
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
}))

export const CTAContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: 20,
  width: '100%',
})

export const CTADescription = styled(Typography)(({ theme }) => ({
  maxWidth: 520,
  color: theme.palette.text.secondary,
}))

export const CTAMicroLine = styled(Typography)(({ theme }) => ({
  maxWidth: 520,
  color: theme.palette.text.secondary,
}))
