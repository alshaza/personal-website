import { Typography } from '@mui/material'
import { useViewerContext } from '../../context/viewer-context'
import { heroContent } from '../../data/content'
import heroImage from '../../images/main-image.png'
import { HeroContainer, HeroImageWrapper, HeroTextWrapper } from './hero-section.styles'

export function HeroSection() {
  const { viewer } = useViewerContext()
  const content = heroContent[viewer]

  return (
    <HeroContainer as="section">
      <HeroImageWrapper>
        <img src={heroImage} alt="Rami Alshaza" />
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
