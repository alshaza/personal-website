import { useState, useCallback } from 'react'
import { Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { sliderImages } from '../../data/content'
import {
  SliderContainer,
  SliderViewport,
  SliderTrack,
  SliderArrow,
  SliderDots,
  Dot,
} from './image-slider.styles'

export function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1))
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1))
  }, [])

  return (
    <SliderContainer as="section">
      <Typography variant="h2" textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
        Highlights
      </Typography>
      <SliderViewport>
        <SliderTrack
          sx={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {sliderImages.map((image) => (
            <img key={image.alt} src={image.src} alt={image.alt} />
          ))}
        </SliderTrack>
        <SliderArrow onClick={goPrev} sx={{ left: 12 }}>
          <ChevronLeftIcon />
        </SliderArrow>
        <SliderArrow onClick={goNext} sx={{ right: 12 }}>
          <ChevronRightIcon />
        </SliderArrow>
      </SliderViewport>
      <SliderDots>
        {sliderImages.map((image, index) => (
          <Dot
            key={image.alt}
            active={index === activeIndex}
            onClick={() => goTo(index)}
          />
        ))}
      </SliderDots>
    </SliderContainer>
  )
}
