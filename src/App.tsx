import { HomePage } from './pages/home-page'
import { Header } from './components/header/header'
import { ViewerProvider } from './context/viewer-context'
import { AppContainer } from './App.styles'

export function App() {
  return (
    <ViewerProvider>
      <AppContainer>
        <Header />
        <HomePage />
      </AppContainer>
    </ViewerProvider>
  )
}
