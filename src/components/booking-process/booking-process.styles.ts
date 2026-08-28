import { Box, styled } from '@mui/material'

export const BookingProcessContainer = styled(Box)({
  marginTop: 32,
})

export const BookingProcessCard = styled(Box)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius),
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'var(--shadow-blue)',
  padding: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}))

export const OptionsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 16,
  marginTop: 8,
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
  },
}))

export const OptionCard = styled('a')(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  padding: theme.spacing(3),
  borderRadius: Number(theme.shape.borderRadius),
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'var(--shadow-blue)',
  transition: theme.transitions.create(['border-color', 'box-shadow'], {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[4],
  },
}))

export const ProcessList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  maxWidth: 560,
})

export const ProcessStep = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
})
