import { ToggleButton } from '@mui/material'
import {
  HeaderContainer,
  HeaderLogo,
  HeaderRightSection,
  HeaderToggleSection,
  HeaderToggleButtonGroup,
} from './header.styles'
import { useViewerContext, type ViewerType } from '../../context/viewer-context'

export function Header() {
  const { viewer, setViewer } = useViewerContext()

  const handleChange = (_: React.MouseEvent<HTMLElement>, value: ViewerType | null) => {
    if (value) setViewer(value)
  }

  return (
    <HeaderContainer>
      <HeaderLogo src="/logo.svg" alt="Rami Alshaza" fetchPriority="high" />
      <HeaderRightSection>
        <HeaderToggleSection>
          <HeaderToggleButtonGroup
            value={viewer}
            exclusive
            onChange={handleChange}
            size="small"
          >
            <ToggleButton value="engineer">For Engineers</ToggleButton>
            <ToggleButton value="recruiter">For Recruiters</ToggleButton>
          </HeaderToggleButtonGroup>
        </HeaderToggleSection>
      </HeaderRightSection>
    </HeaderContainer>
  )
}
