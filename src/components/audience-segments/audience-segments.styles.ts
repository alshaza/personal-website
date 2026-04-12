import { Box, Typography, styled } from '@mui/material'

export const SegmentsContainer = styled(Box)({
  marginTop: 'var(--section-spacing)',
})

export const SegmentsHeading = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: 12,
  fontSize: '2rem',
  lineHeight: 1.25,
  fontWeight: 700,
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem',
    lineHeight: 1.22,
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: 16,
    fontSize: '3rem',
    lineHeight: 1.2,
  },
}))

export const SegmentsIntro = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 720,
  margin: '0 auto 32px',
  [theme.breakpoints.up('md')]: {
    marginBottom: 48,
  },
}))

export const SegmentsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 20,
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
  },
}))

export const SegmentCard = styled(Box)(({ theme }) => ({
  borderRadius: 16,
  border: `2px solid ${theme.palette.primary.main}`,
  boxShadow: 'var(--shadow-blue)',
  backgroundColor: theme.palette.background.paper,
  padding: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  height: '100%',
  minHeight: 280,
  transition: 'box-shadow 0.25s ease',
  '&:hover': {
    boxShadow: 'var(--shadow-blue), 0 10px 32px rgba(0,0,0,0.08)',
  },
  [theme.breakpoints.up('sm')]: {
    padding: 28,
  },
}))

export const segmentLevelSx = {
  color: 'primary.main',
  fontWeight: 700,
  fontSize: '0.8125rem',
  letterSpacing: '0.04em',
  textTransform: 'uppercase' as const,
}

export const segmentHeadlineSx = {
  fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem' },
  lineHeight: 1.35,
  fontWeight: 700,
}
