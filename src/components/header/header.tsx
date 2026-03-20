import { useState, useEffect } from 'react'
import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material'
import { HeaderContainer, HeaderLogo, HeaderToggleSection } from './header.styles'
import { useViewerContext, type ViewerType } from '../../context/viewer-context'
import logo from '../../images/logo.svg'

const SCROLL_THRESHOLD = 300

export function Header() {
  const { viewer, setViewer } = useViewerContext()
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
      <HeaderLogo src={logo} alt="Rami Alshaza" />
      <Box sx={{ position: 'relative', minHeight: 36, display: 'flex', alignItems: 'center' }}>
        <HeaderToggleSection scrolledPast={scrolledPast}>
          <ToggleButtonGroup
            value={viewer}
            exclusive
            onChange={handleChange}
            size="small"
            sx={{
              maxWidth: '100%',
              '& .MuiToggleButton-root': {
                px: { xs: 1.25, sm: 1.75 },
                fontSize: { xs: '0.72rem', sm: '0.8125rem' },
                whiteSpace: 'nowrap',
              },
            }}
          >
            <ToggleButton value="engineer">For Engineers</ToggleButton>
            <ToggleButton value="recruiter">For Recruiters</ToggleButton>
          </ToggleButtonGroup>
        </HeaderToggleSection>
      </Box>
    </HeaderContainer>
  )
}
