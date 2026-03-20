import { useState, useCallback, useEffect } from 'react'
import { Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { helpItems } from '../../data/content'
import {
  HelpContainer,
  HelpSliderViewport,
  HelpSliderTrack,
  HelpSlide,
  HelpSlideImage,
  HelpSlideContent,
  HelpSliderArrow,
  HelpDots,
  HelpDot,
} from './how-can-i-help.styles'

export function HowCanIHelp() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const totalSlides = helpItems.length

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }, [totalSlides])

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }, [totalSlides])

  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    }, 5000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [isPaused, totalSlides])

  return (
    <HelpContainer as="section" id="how-can-i-help">
      <Typography variant="h2" textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
        How Can I Help You
      </Typography>
      <HelpSliderViewport
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <HelpSliderTrack sx={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {helpItems.map((item) => (
            <HelpSlide key={item.title}>
              <HelpSlideImage>
                <img src={item.image} alt={item.title} />
              </HelpSlideImage>
              <HelpSlideContent>
                <Typography variant="h3" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </HelpSlideContent>
            </HelpSlide>
          ))}
        </HelpSliderTrack>
        <HelpSliderArrow onClick={goPrev} sx={{ left: 12 }}>
          <ChevronLeftIcon />
        </HelpSliderArrow>
        <HelpSliderArrow onClick={goNext} sx={{ right: 12 }}>
          <ChevronRightIcon />
        </HelpSliderArrow>
      </HelpSliderViewport>
      <HelpDots>
        {helpItems.map((item, index) => (
          <HelpDot
            key={item.title}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </HelpDots>
    </HelpContainer>
  )
}
