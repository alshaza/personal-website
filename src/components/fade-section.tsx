import type { ReactNode } from 'react'
import { Box } from '@mui/material'
import { useFadeIn } from '../hooks/use-fade-in'

interface FadeSectionProps {
  children: ReactNode
  direction?: 'down' | 'left' | 'right'
  timeout?: number
}

const transformMap = {
  down: 'translateY(-80px)',
  left: 'translateX(-80px)',
  right: 'translateX(80px)',
} as const

export function FadeSection({ children, direction = 'down', timeout = 500 }: FadeSectionProps) {
  const { ref, isVisible } = useFadeIn()

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : transformMap[direction],
        transition: `opacity ${timeout.toString()}ms ease-out, transform ${timeout.toString()}ms ease-out`,
      }}
    >
      {children}
    </Box>
  )
}
