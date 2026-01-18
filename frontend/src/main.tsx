import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import routes from './routes.tsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme/ThemeProvider.tsx'
import ToastProvider from './contexts/toast/ToastProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <RouterProvider router={routes} />
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>,
)
