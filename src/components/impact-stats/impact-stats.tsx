import { Typography } from '@mui/material'
import { funnelNarrativeContent, impactStatsContent } from '../../data/content'
import {
  StatsSection,
  statsHeadingSx,
  ImpactSummaryProse,
  StatsGrid,
  StatColumn,
  StatCircle,
  statValueSx,
  statLabelSx,
  statNoteSx,
} from './impact-stats.styles'

export function ImpactStats() {
  const { impactHeading, impactBullets } = funnelNarrativeContent
  const { stats } = impactStatsContent

  return (
    <StatsSection as="section" aria-labelledby="impact-stats-heading">
      <Typography id="impact-stats-heading" variant="h2" sx={statsHeadingSx}>
        {impactHeading}
      </Typography>
      <ImpactSummaryProse>
        {impactBullets.map((sentence, index) => (
          <Typography
            key={sentence}
            variant="body1"
            component="p"
            color="text.secondary"
            sx={{
              m: 0,
              mb: index < impactBullets.length - 1 ? 2 : 0,
              lineHeight: 1.75,
              fontSize: { xs: '1rem', sm: '1.0625rem' },
            }}
          >
            {sentence}
          </Typography>
        ))}
      </ImpactSummaryProse>
      <StatsGrid>
        {stats.map((stat) => (
          <StatColumn key={stat.label}>
            <StatCircle>
              <Typography component="div" sx={statValueSx}>
                {stat.value}
              </Typography>
            </StatCircle>
            <Typography component="div" color="text.primary" sx={statLabelSx}>
              {stat.label}
            </Typography>
            {stat.note && (
              <Typography variant="caption" component="div" sx={statNoteSx}>
                {stat.note}
              </Typography>
            )}
          </StatColumn>
        ))}
      </StatsGrid>
    </StatsSection>
  )
}
