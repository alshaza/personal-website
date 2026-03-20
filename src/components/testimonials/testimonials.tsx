import { Box, Typography } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { useViewer } from '../../context/viewer-context'
import { testimonials } from '../../data/content'
import {
  TestimonialsContainer,
  TestimonialsGrid,
  TestimonialCard,
} from './testimonials.styles'

export function Testimonials() {
  const { viewer } = useViewer()
  const items = testimonials[viewer]

  return (
    <TestimonialsContainer as="section">
      <Typography variant="h2" textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
        What People Say
      </Typography>
      <TestimonialsGrid>
        {items.map((item) => (
          <TestimonialCard key={item.name}>
            <FormatQuoteIcon
              sx={{ fontSize: 40, color: 'primary.main', opacity: 0.6 }}
            />
            <Typography variant="body1" sx={{ flex: 1, fontStyle: 'italic' }}>
              "{item.quote}"
            </Typography>
            <Box>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.role}
              </Typography>
            </Box>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  )
}
