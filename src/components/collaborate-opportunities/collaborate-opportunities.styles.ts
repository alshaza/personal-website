import { alpha, Box, Button, styled } from '@mui/material'

export const OpportunitiesSection = styled(Box)({
  marginTop: 'var(--section-spacing)',
})

export const OpportunitiesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2.5),
  maxWidth: 920,
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(3),
    alignItems: 'stretch',
    '& > :last-child:nth-child(odd)': {
      gridColumn: '1 / -1',
      maxWidth: 560,
      marginInline: 'auto',
      width: '100%',
    },
  },
}))

export const OpportunityPanel = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.75),
  padding: theme.spacing(3, 3, 3, 3.25),
  borderRadius: Number(theme.shape.borderRadius),
  border: 'none',
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'var(--shadow-blue)',
  transition: theme.transitions.create(['border-left-color', 'box-shadow', 'background-color'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3.5, 3.5, 3.5, 3.75),
  },
  '&:hover': {
    borderLeftColor: theme.palette.primary.dark,
    backgroundColor: alpha(theme.palette.primary.main, 0.04),
    boxShadow: 'var(--shadow-blue)',
  },
}))

export const OpportunityTitle = styled('h3')(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.0625rem',
  fontWeight: 700,
  lineHeight: 1.35,
  letterSpacing: '-0.01em',
  color: theme.palette.text.primary,
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.125rem',
  },
}))

export const OpportunityBody = styled('p')(({ theme }) => ({
  margin: 0,
  flex: 1,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.body2.fontSize,
  lineHeight: theme.typography.body2.lineHeight,
  color: theme.palette.text.secondary,
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.9375rem',
    lineHeight: 1.65,
  },
}))

export const OpportunityCta = styled(Button)(({ theme }) => ({
  marginTop: 'auto',
  alignSelf: 'flex-start',
  paddingInline: 0,
  minWidth: 0,
  fontWeight: 700,
  gap: theme.spacing(0.5),
  '&:hover': {
    backgroundColor: 'transparent',
  },
  [theme.breakpoints.down('sm')]: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
}))
