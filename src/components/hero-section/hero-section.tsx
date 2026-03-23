import { Stack, Typography } from '@mui/material'
import { useViewerContext } from '../../context/viewer-context'
import { ctaContent, heroContent } from '../../data/content'
import { HeroContainer, HeroImageWrapper, HeroTextWrapper, HeroSubheading, CTAButton } from './hero-section.styles'

export function HeroSection() {
  const { viewer } = useViewerContext()
  const content = heroContent[viewer]
  const { calendarUrl } = ctaContent[viewer]

  return (
    <HeroContainer as="section">
      <HeroImageWrapper>
        <img src="/main-image.webp" alt="Rami Alshaza" fetchPriority="high" />
      </HeroImageWrapper>
      <HeroTextWrapper>
        <Typography variant="h1" gutterBottom>
          {content.heading}
        </Typography>
        <HeroSubheading variant="h3" {...{ component: 'h2' }} color="primary">
          {content.subheading}
        </HeroSubheading>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {content.body}
        </Typography>
        <Stack alignItems={"center"}>
          <CTAButton
            variant="contained"
            size="large"
            href={calendarUrl}
            {...{ target: '_blank', rel: 'noopener noreferrer' }}
          >
            Book a Call
          </CTAButton>
        </Stack>
      </HeroTextWrapper>
    </HeroContainer>
  )
}
