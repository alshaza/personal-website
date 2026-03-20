import { Typography } from '@mui/material'
import { useViewer } from '../../context/viewer-context'
import { heroContent } from '../../data/content'
import { HeroContainer, HeroImageWrapper, HeroTextWrapper } from './hero-section.styles'

export function HeroSection() {
  const { viewer } = useViewer()
  const content = heroContent[viewer]

  return (
    <HeroContainer as="section">
      <HeroImageWrapper>
        <img src="/images/rami.png" alt="Rami Alshaza" />
      </HeroImageWrapper>
      <HeroTextWrapper>
        <Typography variant="h1" gutterBottom>
          {content.heading}
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          gutterBottom
          sx={{ mb: 2 }}
        >
          {content.subheading}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {content.body}
        </Typography>
      </HeroTextWrapper>
    </HeroContainer>
  )
}
