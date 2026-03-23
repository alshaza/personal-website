import { Box, Typography } from '@mui/material'
import { useViewerContext } from '../../context/viewer-context'
import { testimonials } from '../../data/content'
import {
  TestimonialsContainer,
  SectionHeading,
  TestimonialsGrid,
  TestimonialCard,
  QuoteIcon,
  QuoteText,
} from './testimonials.styles'

export function Testimonials() {
  const { viewer } = useViewerContext()
  const items = testimonials[viewer]

  return (
    <TestimonialsContainer as="section">
      <SectionHeading variant="h2">
        What People Say
      </SectionHeading>
      <TestimonialsGrid>
        {items.map((item) => (
          <TestimonialCard key={item.name}>
            <QuoteIcon />
            <QuoteText variant="body1">
              "{item.quote}"
            </QuoteText>
            <Box>
              <Typography variant="subtitle1" component="p" fontWeight={600}>{item.name}</Typography>
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
