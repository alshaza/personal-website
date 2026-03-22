import { Box, Button, Typography } from '@mui/material'
import { useViewerContext } from '../../context/viewer-context'
import { testimonials } from '../../data/content'
import {
  TestimonialsContainer,
  SectionHeading,
  TestimonialsGrid,
  TestimonialCard,
  QuoteIcon,
  QuoteText,
  TestimonialsButtonWrapper,
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
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.role}
              </Typography>
            </Box>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
      <TestimonialsButtonWrapper>
        <Button variant="outlined" color="primary" href="#how-can-i-help">
          See how can I benfit you
        </Button>
      </TestimonialsButtonWrapper>
    </TestimonialsContainer>
  )
}
