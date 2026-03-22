import { Box, Card, Typography, styled } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

export const TestimonialsContainer = styled(Box)(({ theme }) => ({
  marginTop: 'var(--section-spacing)',
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: 16,
  padding: '40px 24px',
  boxShadow: 'var(--shadow-blue)',
}))

export const SectionHeading = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: 32,
  [theme.breakpoints.up('md')]: {
    marginBottom: 48,
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
  boxShadow: 'var(--shadow-blue)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: 'var(--shadow-blue), 0 8px 32px rgba(0,0,0,0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: 24,
  },
}))

export const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  fontSize: 40,
  color: theme.palette.primary.main,
  opacity: 0.6,
}))

export const QuoteText = styled(Typography)({
  flex: 1,
  fontStyle: 'italic',
})