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
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import styled from 'styled-components'
import IconText from '../utils/IconText'
// import { Input } from 'antd'
import { Button } from '@mui/material'
import { toggleGptSearch } from '../utils/useGptSlice'
import langConstants from '../utils/langConstants'
import { Dropdown, Space } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import { setLanguage } from '../utils/languageSlice'

// const { Search } = Input

const StyledHeader = styled(AppBar)`
  box-shadow: none !important;
`

const AvatarStyled = styled(Avatar)`
  width: 24px !important;
  height: 24px !important;
`

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selection = useSelector((store) => store.user)
  const selectedLang = useSelector((state) => state.language.selectedLang)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch())
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
      icon: <AvatarStyled src={selection.user?.photoURL} />,
      onClick: () => {
        navigate('/profile')
      },
    },
    {
      id: 2,
      name: langConstants.account[selectedLang],
      icon: <ManageAccountsIcon />,
      onClick: () => {
        navigate('/account')
      },
    },
    {
      id: 3,
      name: langConstants.signOutNetflix[selectedLang],
      icon: <LogoutIcon />,
      onClick: () => {
        signOut(auth)
          .then(() => {})
          .catch((error) => {})
      },
    },
  ]

  const handleMenuClick = ({ key }) => {
    dispatch(setLanguage(key))
  }

  const items = [
    {
      key: 'en',
      label: langConstants.en,
    },
    {
      key: 'es',
      label: langConstants.es,
    },
    {
      key: 'fr',
      label: langConstants.fr,
    },
    {
      key: 'de',
      label: langConstants.de,
    },
    {
      key: 'it',
      label: langConstants.it,
    },
    {
      key: 'ja',
      label: langConstants.ja,
    },
    {
      key: 'ko',
      label: langConstants.ko,
    },
    {
      key: 'pt',
      label: langConstants.pt,
    },
    {
      key: 'ru',
      label: langConstants.ru,
    },
    {
      key: 'zh',
      label: langConstants.zh,
    },
    {
      key: 'hi',
      label: langConstants.hi,
    },
    {
      key: 'ta',
      label: langConstants.ta,
    },
    {
      key: 'kn',
      label: langConstants.kn,
    },
    {
      key: 'te',
      label: langConstants.te,
    },
    {
      key: 'ml',
      label: langConstants.ml,
    },
  ]

  const selectedLanguageLabel =
    items.find((item) => item.key === selectedLang)?.label || 'English'

  return (
    <StyledHeader position="sticky" color="white">
      <Container maxWidth="2560px">
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <img src="./netflix-logo.svg" alt="netflix" width={90} height={90} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Dropdown
              menu={{ items, onClick: handleMenuClick }}
              trigger={['click']}
              arrow={{ pointAtCenter: true }}
              placement="bottom"
            >
              <Button
                variant="contained"
                sx={{ textTransform: 'none' }}
              >
                <Space>
                  {selectedLanguageLabel} <CaretDownOutlined />
                </Space>
              </Button>
            </Dropdown>
            {selection.user && (
              <Button
                type="button"
                variant="contained"
                onClick={handleGptSearchClick}
                sx={{ textTransform: 'none' }}
              >
                {langConstants.gptSearch[selectedLang]}
              </Button>
            )}
            {selection.user && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Travis Howard"
                      src={selection.user?.photoURL}
                    />
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
          </Box>
        </Toolbar>
      </Container>
    </StyledHeader>
  )
}
export default Header
