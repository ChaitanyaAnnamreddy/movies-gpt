import Login from './Login'
import Browse from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { removeUser } from '../utils/userSlice'
import Account from './Account'
import Profile from './Profile'
import Error from './Error'

const Body = () => {
  const dispatch = useDispatch()

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        )
      } else {
        dispatch(removeUser())
      }
    })
  }, [dispatch])

  return <RouterProvider router={appRouter} />
}

export default Body
