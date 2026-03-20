import { createContext, useContext, useState, type ReactNode } from 'react'

export type ViewerType = 'engineer' | 'recruiter'

interface ViewerContextValue {
  viewer: ViewerType
  setViewer: (v: ViewerType) => void
}

const ViewerContext = createContext<ViewerContextValue | undefined>(undefined)

export function ViewerProvider({ children }: { children: ReactNode }) {
  const [viewer, setViewer] = useState<ViewerType>('engineer')

  return (
    <ViewerContext value={{ viewer, setViewer }}>
      {children}
    </ViewerContext>
  )
}

export function useViewerContext() {
  const context = useContext(ViewerContext)
  if (!context) {
    throw new Error('useViewer must be used within a ViewerProvider')
  }
  return context
}
