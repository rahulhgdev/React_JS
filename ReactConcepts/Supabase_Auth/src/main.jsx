import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <AuthProvider>
        <h1 className='text-center pt-4 text-3xl'>React + Supabase Authentication</h1>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  </StrictMode>,
)
