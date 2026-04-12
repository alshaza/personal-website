import { useRef, useState, useEffect } from 'react'

export function useLazyInit(
  rootMargin = '200px',
  threshold: number | number[] = 0,
) {
  const ref = useRef<HTMLDivElement>(null)
  const [isNearViewport, setIsNearViewport] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true)
          observer.unobserve(el)
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [rootMargin, threshold])

  return { ref, isNearViewport }
}
