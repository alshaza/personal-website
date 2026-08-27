import { alpha, Box, styled } from '@mui/material'

export const BookingProcessContainer = styled(Box)({
  marginTop: 'var(--section-spacing)',
})

export const BookingProcessCard = styled(Box)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius),
  border: 'none',
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'var(--shadow-blue)',
  padding: theme.spacing(3, 3, 3, 3.25),
  transition: theme.transitions.create(['border-left-color', 'box-shadow', 'background-color'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4, 4, 4, 4.5),
  },
  '&:hover': {
    borderLeftColor: theme.palette.primary.dark,
    backgroundColor: alpha(theme.palette.primary.main, 0.04),
    boxShadow: 'var(--shadow-blue)',
  },
}))

export const BookingProcessActions = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
})

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
