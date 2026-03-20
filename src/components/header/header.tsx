import { useState, useEffect } from 'react'
import { ToggleButton, ToggleButtonGroup, Button, Box } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { HeaderContainer, HeaderLogo } from './header.styles'
import { useViewer, type ViewerType } from '../../context/viewer-context'
import { calendarUrl } from '../../data/content'

const SCROLL_THRESHOLD = 300

export function Header() {
  const { viewer, setViewer } = useViewer()
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolledPast(window.scrollY > SCROLL_THRESHOLD)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleChange = (_: React.MouseEvent<HTMLElement>, value: ViewerType | null) => {
    if (value) setViewer(value)
  }

  return (
    <HeaderContainer>
      <HeaderLogo src="/logo.png" alt="Rami Alshaza" />
      <Box sx={{ position: 'relative', minHeight: 36, display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            opacity: scrolledPast ? 0 : 1,
            transform: scrolledPast ? 'translateY(-8px)' : 'translateY(0)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
            pointerEvents: scrolledPast ? 'none' : 'auto',
            position: scrolledPast ? 'absolute' : 'relative',
          }}
        >
          <ToggleButtonGroup
            value={viewer}
            exclusive
            onChange={handleChange}
            size="small"
          >
            <ToggleButton value="engineer">For Engineers</ToggleButton>
            <ToggleButton value="recruiter">For Recruiters</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box
          sx={{
            opacity: scrolledPast ? 1 : 0,
            transform: scrolledPast ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
            pointerEvents: scrolledPast ? 'auto' : 'none',
            position: scrolledPast ? 'relative' : 'absolute',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<CalendarMonthIcon />}
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a free 1:1
          </Button>
        </Box>
      </Box>
    </HeaderContainer>
  )
}
