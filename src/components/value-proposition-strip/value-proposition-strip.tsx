import { Typography } from '@mui/material'
import { funnelNarrativeContent } from '../../data/content'
import {
  StripContainer,
  StripBlock,
  StripHeading,
} from './value-proposition-strip.styles'

export function ValuePropositionStrip() {
  const { problemHeading, problemBody } = funnelNarrativeContent

  return (
    <StripContainer as="section" aria-labelledby="funnel-problem-heading">
      <StripBlock>
        <StripHeading id="funnel-problem-heading" variant="h2">
          {problemHeading}
        </StripHeading>
        <Typography variant="body1" color="text.secondary">
          {problemBody}
        </Typography>
      </StripBlock>
    </StripContainer>
  )
}
