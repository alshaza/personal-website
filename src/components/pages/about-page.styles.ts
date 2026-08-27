import { Box, Typography, styled } from '@mui/material'

export const AboutIntro = styled(Box)({
  marginTop: 32,
  maxWidth: 720,
})

export const AboutIntroLead = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '1.125rem',
  marginBottom: 16,
}))

export const TimelineSection = styled(Box)({
  marginTop: 'var(--section-spacing)',
})

export const TimelineList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  maxWidth: 720,
})

export const TimelineEntryCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '16px 20px',
  borderLeft: `3px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.paper,
  borderRadius: 8,
}))

export const TimelineYear = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
}))
