import { Stack } from '@mui/material'
import { HomePage } from './pages/home-page'
import { Header } from './components/header/header'
import { ViewerProvider } from './context/viewer-context'

export function App() {
  return (
    <ViewerProvider>
      <Stack
        width="100%"
        minHeight="100vh"
        maxWidth="1024px"
        mx="auto"
        sx={{ overflowX: 'clip' }}
      >
        <Header />
        <HomePage />
      </Stack>
    </ViewerProvider>
  )
}

