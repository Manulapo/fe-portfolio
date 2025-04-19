import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import AppProviders from './app/providers.tsx'

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <App />
  </AppProviders>
)
