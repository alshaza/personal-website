import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { sliderImages } from '../../data/content'
import {
  SliderContainer,
  SliderSectionHeading,
  SliderLayout,
  SliderLeft,
  SliderEmblaViewport,
  SliderEmblaTrack,
  SliderSlide,
} from './image-slider.styles'

export function ImageSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false }),
  ])

  return (
    <SliderContainer as="section">
      <SliderSectionHeading variant="h2">
        Highlights
      </SliderSectionHeading>
      <SliderLayout>
        <SliderLeft>
          <SliderEmblaViewport ref={emblaRef}>
            <SliderEmblaTrack>
              {sliderImages.map((image) => (
                <SliderSlide key={image.alt}>
                  <img src={image.src} alt={image.alt} />
                </SliderSlide>
              ))}
            </SliderEmblaTrack>
          </SliderEmblaViewport>
        </SliderLeft>
      </SliderLayout>
    </SliderContainer>
  )
}
