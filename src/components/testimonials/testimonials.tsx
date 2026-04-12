import { Box, Typography } from '@mui/material'
import { testimonials, testimonialSectionCopy, transformationStories } from '../../data/content'
import {
  TestimonialsContainer,
  SectionHeading,
  TestimonialsGrid,
  TestimonialCard,
  QuoteIcon,
  QuoteText,
  SubSectionIntro,
  OutcomesBlock,
  OutcomesGrid,
  OutcomeCard,
} from './testimonials.styles'

export function Testimonials() {
  const { sectionTitle, outcomesHeading, leadersIntro } = testimonialSectionCopy
  const hasOutcomes = transformationStories.length > 0

  return (
    <TestimonialsContainer as="section">
      <SectionHeading variant="h2">
        {sectionTitle}
      </SectionHeading>

      {hasOutcomes && (
        <OutcomesBlock>
          <Typography variant="h3" component="h3" textAlign="center" sx={{ mb: 2, fontSize: '1.35rem' }}>
            {outcomesHeading}
          </Typography>
          <OutcomesGrid>
            {transformationStories.map((story) => (
              <OutcomeCard key={`${story.attribution}-${story.before.slice(0, 24)}`} elevation={0}>
                <Box>
                  <Typography
                    variant="caption"
                    component="p"
                    sx={{
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'primary.main',
                      mb: 0.75,
                    }}
                  >
                    Before
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {story.before}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    component="p"
                    sx={{
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'primary.main',
                      mb: 0.75,
                    }}
                  >
                    After
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {story.after}
                  </Typography>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 'auto' }}>
                  {story.attribution}
                </Typography>
              </OutcomeCard>
            ))}
          </OutcomesGrid>
        </OutcomesBlock>
      )}

      <SubSectionIntro variant="body1">
        {leadersIntro}
      </SubSectionIntro>
      <TestimonialsGrid>
        {testimonials.map((item) => (
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
