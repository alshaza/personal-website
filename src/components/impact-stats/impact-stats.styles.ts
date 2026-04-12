import { Box, styled } from '@mui/material'

export const StatsSection = styled(Box)({
  marginTop: 'var(--section-spacing)',
})

export const statsHeadingSx = {
  textAlign: 'center',
  marginBottom: { xs: 2, md: 2.5 },
  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
  lineHeight: { xs: 1.25, sm: 1.22, md: 1.2 },
  fontWeight: 700,
}

export const ImpactSummaryProse = styled(Box)(({ theme }) => ({
  margin: '0 auto 28px',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    marginBottom: 32,
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: 40,
  },
}))

export const StatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 28,
  justifyItems: 'center',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
    alignItems: 'start',
  },
}))

export const StatColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: 220,
  width: '100%',
})

export const StatCircle = styled(Box)(({ theme }) => ({
  width: 'min(118px, 36vw)',
  aspectRatio: '1',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.primary.main}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'var(--shadow-blue)',
  flexShrink: 0,
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    width: 'min(128px, 20vw)',
  },
  [theme.breakpoints.up('md')]: {
    width: 140,
  },
}))

export const statValueSx = {
  fontWeight: 800,
  fontSize: { xs: '1.35rem', sm: '2rem', md: '2rem' },
  lineHeight: 1.1,
  color: 'primary.main',
  fontVariantNumeric: 'tabular-nums',
  textAlign: 'center',
}

export const statLabelSx = {
  marginTop: 1.5,
  fontWeight: 700,
  fontSize: { xs: '1.0625rem', sm: '1.125rem', md: '1.1875rem' },
  lineHeight: 1.35,
}

export const statNoteSx = {
  marginTop: 0.75,
  color: 'text.secondary',
  fontSize: '0.75rem',
  lineHeight: 1.45,
}
