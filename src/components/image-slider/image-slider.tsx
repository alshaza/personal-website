import { useCallback, useEffect, useMemo, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  collaborateSliderCtaContent,
  ctaContent,
  heroContent,
  sliderImages,
} from '../../data/content'
import { useLazyInit } from '../../hooks/use-lazy-init'
import { trackEvent } from '../../lib/analytics'
import { ANALYTICS_EVENTS } from '../../lib/analytics-events'
import { ANALYTICS_PARAM_KEYS } from '../../lib/analytics-event-params'
import { ANALYTICS_BUTTON_VALUES, ANALYTICS_CONTENT_TYPES, ANALYTICS_LOCATION_VALUES } from '../../lib/analytics-event-values'
import { externalNewTabLinkProps } from '../../lib/external-link-props'
import { CTAButton } from '../hero-section/hero-section.styles'
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
  SliderPreviews,
  SliderPreviewItem,
} from './image-slider.styles'

type HighlightPreview = {
  key: string
  src: string
  alt: string
  itemTitle: string
}

export function ImageSlider() {
  const { ref: lazyRef, isNearViewport } = useLazyInit()
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, active: isNearViewport },
    isNearViewport ? [Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })] : [],
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const previewSlides = useMemo<HighlightPreview[]>(
    () => [
      ...sliderImages.map((image) => ({
        key: image.alt,
        src: image.src,
        alt: image.alt,
        itemTitle: image.title,
      })),
      {
        key: 'highlights-cta-slide',
        src: collaborateSliderCtaContent.previewImageSrc,
        alt: collaborateSliderCtaContent.previewImageAlt,
        itemTitle: collaborateSliderCtaContent.title,
      },
    ],
    [],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('reInit', onSelect)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const handlePreviewClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  return (
    <SliderContainer as="section" ref={lazyRef} aria-labelledby="highlights-heading">
      <SliderSectionHeading id="highlights-heading" variant="h2">
        Highlights
      </SliderSectionHeading>
      <Box>
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
            <SliderSlide sx={{ display: 'flex' }}>
              <SliderCTASlide>
                <Typography variant="h2">
                  {collaborateSliderCtaContent.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480 }}>
                  {collaborateSliderCtaContent.description}
                </Typography>
                <Stack
                  alignItems="center"
                  spacing={1}
                  sx={{ width: '100%', mt: 1 }}
                >
                  <CTAButton
                    variant="contained"
                    size="large"
                    href={ctaContent.calendarUrl}
                    onClick={() => {
                      trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
                        [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: ANALYTICS_BUTTON_VALUES.LETS_TALK,
                        [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.IMAGE_SLIDER,
                        [ANALYTICS_PARAM_KEYS.TARGET_URL]: ctaContent.calendarUrl,
                      })
                      trackEvent(ANALYTICS_EVENTS.SELECT_CONTENT, {
                        [ANALYTICS_PARAM_KEYS.CONTENT_TYPE]: ANALYTICS_CONTENT_TYPES.IMAGE_SLIDER_CTA,
                        [ANALYTICS_PARAM_KEYS.ITEM_ID]: 'image_slider_book_call',
                        [ANALYTICS_PARAM_KEYS.TARGET_URL]: ctaContent.calendarUrl,
                        [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.IMAGE_SLIDER,
                      })
                    }}
                    {...externalNewTabLinkProps}
                  >
                    {collaborateSliderCtaContent.buttonLabel}
                  </CTAButton>
                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420, textAlign: 'center' }}>
                    {heroContent.ctaMicroCopy}
                  </Typography>
                </Stack>
              </SliderCTASlide>
            </SliderSlide>
          </SliderEmblaTrack>
        </SliderEmblaViewport>
        <SliderPreviews role="group" aria-label="Highlight thumbnails">
          {previewSlides.map((item, index) => (
            <SliderPreviewItem
              key={item.key}
              active={index === selectedIndex}
              onClick={() => {
                handlePreviewClick(index)
                trackEvent(ANALYTICS_EVENTS.CUSTOM_BUTTON_CLICK, {
                  [ANALYTICS_PARAM_KEYS.BUTTON_NAME]: `${ANALYTICS_BUTTON_VALUES.HIGHLIGHTS_PREVIEW_ITEM}_${String(index)}`,
                  [ANALYTICS_PARAM_KEYS.BUTTON_LABEL]: item.itemTitle,
                  [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.IMAGE_SLIDER,
                  [ANALYTICS_PARAM_KEYS.ITEM_TITLE]: item.itemTitle,
                })
                trackEvent(ANALYTICS_EVENTS.SELECT_CONTENT, {
                  [ANALYTICS_PARAM_KEYS.CONTENT_TYPE]: ANALYTICS_CONTENT_TYPES.HIGHLIGHTS_PREVIEW,
                  [ANALYTICS_PARAM_KEYS.ITEM_ID]: `highlights_preview_${String(index)}`,
                  [ANALYTICS_PARAM_KEYS.ITEM_TITLE]: item.itemTitle,
                  [ANALYTICS_PARAM_KEYS.LOCATION]: ANALYTICS_LOCATION_VALUES.IMAGE_SLIDER,
                })
              }}
            >
              <img src={item.src} alt={item.alt} />
            </SliderPreviewItem>
          ))}
        </SliderPreviews>
      </Box>
    </SliderContainer>
  )
}
