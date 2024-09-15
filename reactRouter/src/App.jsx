
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Root from './pages/Root'
import Product from './pages/Product'
import Error from './pages/Error'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Product />
      }
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
