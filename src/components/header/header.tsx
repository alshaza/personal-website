import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material'
import { HeaderContainer, HeaderLogo, HeaderToggleSection } from './header.styles'
import { useViewerContext, type ViewerType } from '../../context/viewer-context'
import logo from '../../images/logo.svg'

export function Header() {
  const { viewer, setViewer } = useViewerContext()

  const handleChange = (_: React.MouseEvent<HTMLElement>, value: ViewerType | null) => {
    if (value) setViewer(value)
  }

  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="Rami Alshaza" />
      <Box sx={{ position: 'relative', minHeight: 36, display: 'flex', alignItems: 'center' }}>
        <HeaderToggleSection>
          <ToggleButtonGroup
            value={viewer}
            exclusive
            onChange={handleChange}
            size="small"
            sx={{
              maxWidth: '100%',
              '& .MuiToggleButton-root': {
                px: { xs: 1.5, sm: 2.25 },
                fontSize: { xs: '0.84rem', sm: '0.95rem' },
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
