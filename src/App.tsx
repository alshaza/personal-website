import { Stack } from '@mui/material'
import { HomePage } from './pages/home-page'
import { Header } from './components/header/header'

export function App() {
  return (
    <Stack width="100%" height="100vh">
     <Header />
     <HomePage />
    </Stack>
  )
}

