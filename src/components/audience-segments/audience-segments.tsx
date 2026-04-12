import { Typography } from '@mui/material'
import { audienceSegmentsContent } from '../../data/content'
import {
  SegmentsContainer,
  SegmentsHeading,
  SegmentsIntro,
  SegmentsGrid,
  SegmentCard,
  segmentLevelSx,
  segmentHeadlineSx,
} from './audience-segments.styles'

export function AudienceSegments() {
  const { heading, intro, segments } = audienceSegmentsContent

  return (
    <SegmentsContainer as="section" aria-labelledby="audience-segments-heading">
      <SegmentsHeading id="audience-segments-heading" variant="h2">
        {heading}
      </SegmentsHeading>
      <SegmentsIntro variant="body1">
        {intro}
      </SegmentsIntro>
      <SegmentsGrid>
        {segments.map((segment) => (
          <SegmentCard key={segment.level}>
            <Typography component="p" sx={segmentLevelSx}>
              {segment.level}
            </Typography>
            <Typography variant="h6" component="h3" sx={segmentHeadlineSx}>
              {segment.headline}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {segment.pain}
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{ pt: 1 }}>
              <strong style={{ fontWeight: 700, textDecoration: 'underline' }}>Focus:</strong>
              {' '}
              {segment.focus}
            </Typography>
          </SegmentCard>
        ))}
      </SegmentsGrid>
    </SegmentsContainer>
  )
}
