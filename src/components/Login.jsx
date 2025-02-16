import React, { useState, useRef } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'
import MuiCard from '@mui/material/Card'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/store/userSlice'
import { USER_IMG } from '../utils/constants'
import { backgroundImage } from '../utils/constants'
import langConstants from '../utils/langConstants'

const SignUpContainer = styled(Stack)(() => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
}))

const BackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
`

const Card = styled(MuiCard)(() => ({
  width: '30%',
  borderRadius: '16px !important',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  padding: 30,
  margin: '20px auto',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8) !important',
}))

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [emailError, setEmailError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [nameError, setNameError] = useState(false)
  const [nameErrorMessage, setNameErrorMessage] = useState('')
  const [signInError, setSignInError] = useState('')
  const [signUpError, setSignUpError] = useState('')

  const selectedLang = useSelector((state) => state.language.selectedLang)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const nameRef = useRef(null)

  const dispatch = useDispatch()

  const validateInputs = () => {
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    const name = nameRef.current?.value

    let isValid = true

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true)
      setEmailErrorMessage('Please enter a valid email address.')
      isValid = false
    } else {
      setEmailError(false)
      setEmailErrorMessage('')
    }

    if (!password || password.length < 6) {
      setPasswordError(true)
      setPasswordErrorMessage('Password must be at least 6 characters long.')
      isValid = false
    } else {
      setPasswordError(false)
      setPasswordErrorMessage('')
    }

    if (!isSignIn && (!name || name.length < 1)) {
      setNameError(true)
      setNameErrorMessage('Full name is required.')
      isValid = false
    } else {
      setNameError(false)
      setNameErrorMessage('')
    }

    return isValid
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validateInputs()) {
      return
    }
    const data = new FormData(event.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const password = data.get('password')
    if (!isSignIn) {
      //signUp logic
      createUserWithEmailAndPassword(auth, email, password, name)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          updateProfile(user, {
            displayName: name,
            photoURL: USER_IMG,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser
              dispatch(
                addUser({
                  user: {
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  },
                })
              )
            })
            .catch((error) => {
              // An error occurred
              setSignUpError(error.message)
            })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setSignUpError('Email already exists.')
          console.log(errorCode, errorMessage)
        })
    } else {
      //signIn logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          dispatch(
            addUser({
              user: {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
              },
            })
          )
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setSignInError('Invalid email or password.')
          console.log(errorCode, errorMessage)
        })
    }
  }

  const handleSignUpForm = () => {
    setIsSignIn(!isSignIn)
    setEmailError(false)
    setPasswordError(false)
    setNameError(false)
  }

  return (
    <BackgroundImage>
      <SignUpContainer direction="column" justifyContent="center">
        <Card sx={{ minWidth: 275 }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <Typography
              gutterBottom
              sx={{
                color: 'text.secondary',
                fontWeight: 'bold',
                fontFamily: 'Inter, sans-serif',
                padding: '8px',
              }}
              component="h6"
              variant="h4"
            >
              {isSignIn
                ? langConstants.signIn[selectedLang]
                : langConstants.signUp[selectedLang]}
            </Typography>

            {!isSignIn && (
              <FormControl fullWidth>
                <TextField
                  autoComplete="name"
                  name="name"
                  fullWidth
                  inputRef={nameRef}
                  placeholder="Full name"
                  error={nameError}
                  helperText={nameErrorMessage}
                  label={langConstants.fullName[selectedLang]}
                />
              </FormControl>
            )}

            <FormControl fullWidth>
              <TextField
                fullWidth
                name="email"
                inputRef={emailRef}
                autoComplete="email"
                placeholder="your@email.com"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                label={langConstants.email[selectedLang]}
              />
            </FormControl>

            <FormControl fullWidth>
              <TextField
                fullWidth
                name="password"
                inputRef={passwordRef}
                placeholder="••••••"
                type="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                label={langConstants.password[selectedLang]}
              />
            </FormControl>
            {signInError && (
              <Typography sx={{ color: 'error.main' }}>
                {signInError}
              </Typography>
            )}
            {signUpError && (
              <Typography sx={{ color: 'error.main' }}>
                {signUpError}
              </Typography>
            )}
            <Button fullWidth variant="contained" type="submit">
              {isSignIn
                ? langConstants.signIn[selectedLang]
                : langConstants.signUp[selectedLang]}
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: 14,
                padding: '8px',
                textAlign: 'center',
              }}
              variant="body2"
            >
              {!isSignIn
                ? langConstants.alreadyHaveAccount[selectedLang]
                : langConstants.newToNetflix[selectedLang]}
              <Button
                variant="contained"
                color="success"
                onClick={handleSignUpForm}
                sx={{ textTransform: 'none', marginLeft: '6px' }}
              >
                {!isSignIn
                  ? langConstants.signIn[selectedLang]
                  : langConstants.signUp[selectedLang]}
              </Button>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </BackgroundImage>
  )
}

export default Login
