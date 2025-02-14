import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import PersonIcon from '@mui/icons-material/Person'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import styled from 'styled-components'
import IconText from '../utils/IconText'

const StyledHeader = styled(AppBar)`
  box-shadow: none !important;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 10%,
    transparent
  );
`

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selection = useSelector((store) => store.user)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    })

    return () => {
      unsubscribe()
    }
  }, [dispatch, navigate])

  const settings = [
    {
      id: 1,
      name: selection.user?.displayName,
      icon: <PersonIcon />,
      onClick: () => {
        navigate('/profile')
      },
    },
    {
      id: 2,
      name: 'Account',
      icon: <ManageAccountsIcon />,
      onClick: () => {
        navigate('/account')
      },
    },
    {
      id: 3,
      name: 'Sign out of Netflix',
      icon: <LogoutIcon />,
      onClick: () => {
        signOut(auth)
          .then(() => {})
          .catch((error) => {})
      },
    },
  ]

  return (
    <StyledHeader
      position="sticky"
      color="white"
      style={{
        ...(selection.user && {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backgroundImage:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 100%, transparent)',
        }),
      }}
    >
      <Container maxWidth="2560px">
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <img src="./netflix-logo.svg" alt="netflix" width={90} height={90} />

          {selection.user && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Travis Howard" src={selection.user?.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                    <IconText
                      icon={setting.icon}
                      text={setting.name}
                      onClick={setting.onClick}
                    />
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </StyledHeader>
  )
}
export default Header
