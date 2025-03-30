import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import { GlobalProvider } from './context/GlobalStore.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <GlobalProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </GlobalProvider>
    </AuthProvider>
  </StrictMode>,
)
