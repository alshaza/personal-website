import { Box, Card, styled } from '@mui/material'

export const TestimonialsContainer = styled(Box)(({ theme }) => ({
  padding: '48px 16px',
  [theme.breakpoints.up('sm')]: {
    padding: '64px 32px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '80px 64px',
  },
}))

export const TestimonialsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 24,
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}))

export const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: 24,
  },
}))
