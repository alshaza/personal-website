import { useState, useCallback } from 'react'
import { Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useViewer } from '../../context/viewer-context'
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
  const { viewer } = useViewer()
  const [activeIndex, setActiveIndex] = useState(0)

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? helpItems.length - 1 : prev - 1))
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev === helpItems.length - 1 ? 0 : prev + 1))
  }, [])

  if (viewer !== 'engineer') return null

  return (
    <HelpContainer as="section">
      <Typography variant="h2" textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
        How Can I Help You
      </Typography>
      <HelpSliderViewport>
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
