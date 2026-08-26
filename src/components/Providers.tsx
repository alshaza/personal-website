import type { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme'

/** Wraps a page's React island tree in the MUI theme. */
export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
