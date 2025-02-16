import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Account from './Account'
import Profile from './Profile'
import Error from './Error'
import { Provider } from 'react-redux'
import appStore from '../utils/store/appStore'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout wraps all these pages
    children: [
      {
        path: '/',
        element: <Login />, // No Header on Login Page
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
    ],
  },
])

const Body = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default Body
