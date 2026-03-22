import { useState, useEffect, useCallback } from 'react'
import { Typography } from '@mui/material'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useViewerContext } from '../../context/viewer-context'
import { sliderImages, ctaContent } from '../../data/content'
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
  const { viewer } = useViewerContext()
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false }),
  ])

  return (
    <SliderContainer as="section">
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
          <SliderSlide>
            <SliderCTASlide>
              <Typography variant="h2">
                Let's Build the Next Project Together
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
                Have an idea or a challenge? I'd love to collaborate and bring it to life.
              </Typography>
              <SliderCTAButton
                variant="contained"
                size="large"
                startIcon={<CalendarMonthIcon />}
                href={ctaContent[viewer].calendarUrl}
                rel="noopener noreferrer"
              >
                Book a Call
              </SliderCTAButton>
            </SliderCTASlide>
          </SliderSlide>
        </SliderEmblaTrack>
      </SliderEmblaViewport>
    </SliderContainer>
  )
}
