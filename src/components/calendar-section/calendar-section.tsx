import { Typography } from '@mui/material'
import { bookingFunnelContent, ctaContent } from '../../data/content'
import { CalendarSectionContainer, CalendarBackground, CalendarFrame } from './calendar-section.styles'

export function CalendarSection() {
  const { calendarEmbedUrl } = ctaContent
  const { primaryCtaLabel } = bookingFunnelContent

  return (
    <CalendarSectionContainer as="section" id="calendar-booking" sx={{ scrollMarginTop: 96 }}>
      <Typography variant="h2" sx={{ fontSize: '1.5rem', textAlign: 'center', mb: 2 }}>
        Book a free call
      </Typography>
      <CalendarBackground>
        <CalendarFrame>
          <iframe src={calendarEmbedUrl} title={primaryCtaLabel} />
        </CalendarFrame>
      </CalendarBackground>
    </CalendarSectionContainer>
  )
}
