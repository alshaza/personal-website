import { Typography } from '@mui/material'
import { useViewerContext } from '../../context/viewer-context'
import { heroContent } from '../../data/content'
import { HeroContainer, HeroImageWrapper, HeroTextWrapper, HeroSubheading } from './hero-section.styles'

export function HeroSection() {
  const { viewer } = useViewerContext()
  const content = heroContent[viewer]

  return (
    <HeroContainer as="section">
      <HeroImageWrapper>
        <img src="/main-image.png" alt="Rami Alshaza" fetchPriority="high" />
      </HeroImageWrapper>
      <HeroTextWrapper>
        <Typography variant="h1" gutterBottom>
          {content.heading}
        </Typography>
        <HeroSubheading variant="h3" {...{ component: 'h2' }} color="primary" gutterBottom>
          {content.subheading}
        </HeroSubheading>
        <Typography variant="body1" color="text.secondary">
          {content.body}
        </Typography>
      </HeroTextWrapper>
    </HeroContainer>
  )
}
