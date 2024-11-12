import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TodoPage from './pages/TodoPage.jsx'
import CountPage from './pages/CountPage.jsx'
import NotFound from './pages/NotFound.jsx'
import AuthPage from './pages/AuthPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <TodoPage/>
      },
      {
        path: '/count',
        element: <CountPage/>
      }
    ]
  },
  {
    path: '/login',
    element: <AuthPage/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)
