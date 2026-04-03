import { Typography } from '@mui/material'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { sliderImages, ctaContent } from '../../data/content'
import { useLazyInit } from '../../hooks/use-lazy-init'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_BUTTON_VALUES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
import {
  SliderContainer,
  SliderSectionHeading,
  SliderEmblaViewport,
  SliderEmblaTrack,
  SliderSlide,
  SliderCard,
  SliderCardImage,
  SliderCardContent,
  SliderCardTitle,
  SliderCardDescription,
  SliderCTASlide,
  SliderCTAButton,
} from './image-slider.styles'

export function ImageSlider() {
  const { ref: lazyRef, isNearViewport } = useLazyInit()
  const [emblaRef] = useEmblaCarousel(
    { loop: true, active: isNearViewport },
    isNearViewport ? [Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })] : [],
  )

  return (
    <SliderContainer as="section" ref={lazyRef}>
      <SliderSectionHeading variant="h2">
        Highlights
      </SliderSectionHeading>
      <SliderEmblaViewport ref={emblaRef}>
        <SliderEmblaTrack>
          {sliderImages.map((image) => (
            <SliderSlide key={image.alt}>
              <SliderCard>
                <SliderCardContent>
                  <SliderCardTitle variant="h3">
                    {image.title}
                  </SliderCardTitle>
                  <SliderCardDescription variant="body1">
                    {image.description}
                  </SliderCardDescription>
                </SliderCardContent>
                <SliderCardImage>
                  <img src={image.src} alt={image.alt} />
                </SliderCardImage>
              </SliderCard>
            </SliderSlide>
          ))}
          <SliderSlide sx={{
            display: 'flex'
          }}>
            <SliderCTASlide>
              <Typography variant="h2">
                Let's Build Together
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
                Have an idea? I'd love to collaborate and bring it to life.
              </Typography>
              <SliderCTAButton
                variant="contained"
                size="large"
                startIcon={<CalendarMonthIcon />}
                href={ctaContent.calendarUrl}
                onClick={() => {
                  trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
                    [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: ANALYTICS_BUTTON_VALUES.LETS_TALK,
                    [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.IMAGE_SLIDER,
                    [ANALYTICS_PARAM_KEYS.TARGET_URL]: ctaContent.calendarUrl,
                  })
                }}
                {...{ target: '_blank', rel: 'noopener noreferrer nofollow' }}
              >
                Let's Talk!
              </SliderCTAButton>
            </SliderCTASlide>
          </SliderSlide>
        </SliderEmblaTrack>
      </SliderEmblaViewport>
    </SliderContainer>
  )
}
