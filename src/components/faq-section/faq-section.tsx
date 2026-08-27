import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { contactFaqContent } from '../../data/content'
import { FaqContainer } from './faq-section.styles'

export function FaqSection() {
  return (
    <FaqContainer as="section" id="faq" aria-labelledby="faq-heading">
      <Typography id="faq-heading" variant="h2" sx={{ fontSize: '1.75rem', mb: 2 }}>
        {contactFaqContent.heading}
      </Typography>
      {contactFaqContent.items.map((item) => (
        <Accordion key={item.question} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="h3" variant="subtitle1" fontWeight={600}>
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </FaqContainer>
  )
}
