import { Typography } from '@mui/material'
import { timelineEntries } from '../../data/content'
import {
  TimelineContainer,
  TimelineSectionHeading,
  TimelineTrack,
  TimelineItem,
  TimelineCard,
} from './timeline.styles'

export function Timeline() {
  return (
    <TimelineContainer as="section">
      <TimelineSectionHeading variant="h2">
        Career Journey
      </TimelineSectionHeading>
      <TimelineTrack>
        {timelineEntries.map((entry, index) => (
          <TimelineItem key={entry.year} side={index % 2 === 0 ? 'left' : 'right'}>
            <TimelineCard>
              <Typography
                variant="body2"
                color="primary"
                fontWeight={600}
                gutterBottom
              >
                {entry.year}
              </Typography>
              <Typography variant="subtitle1" component="p" fontWeight={600} gutterBottom>
                {entry.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {entry.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {entry.description}
              </Typography>
            </TimelineCard>
          </TimelineItem>
        ))}
      </TimelineTrack>
    </TimelineContainer>
  )
}
