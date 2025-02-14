import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Account from './Account'
import Profile from './Profile'
import Error from './Error'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path: '/account',
      element: <Account />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/error',
      element: <Error />,
    },
  ])

  return <RouterProvider router={appRouter} />
}

export default Body
