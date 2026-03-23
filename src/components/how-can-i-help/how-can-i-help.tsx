import { useState, useEffect, useCallback } from 'react'
import { Typography } from '@mui/material'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { helpItems } from '../../data/content'
import {
  HelpContainer,
  HelpSectionHeading,
  HelpEmblaViewport,
  HelpEmblaTrack,
  HelpSlide,
  HelpSlideImage,
  HelpSlideContent,
  HelpPreviews,
  HelpPreviewItem,
} from './how-can-i-help.styles'

export function HowCanIHelp() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false }),
  ])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi, onSelect])

  const handlePreviewClick = useCallback((index: number) => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
  }, [emblaApi])

  return (
    <HelpContainer as="section" id="how-can-i-help">
      <HelpSectionHeading variant="h2">
        How Can I Help You
      </HelpSectionHeading>
      <HelpEmblaViewport ref={emblaRef}>
        <HelpEmblaTrack>
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
        </HelpEmblaTrack>
      </HelpEmblaViewport>
      <HelpPreviews>
        {helpItems.map((item, index) => (
          <HelpPreviewItem
            key={item.title}
            active={index === selectedIndex}
            onClick={() => {
              handlePreviewClick(index)
            }}
          >
            <img src={item.image} alt={item.title} />
          </HelpPreviewItem>
        ))}
      </HelpPreviews>
    </HelpContainer>
  )
}
