import Header from './Header'
import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import styled from 'styled-components'
import Typography from '@mui/material/Typography'

const BackgroundImage = styled.div`
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh; /* Ensures it takes full viewport height */
  width: 100vw; /* Ensures it takes full viewport width */
  align-items: center;
  justify-content: center;
`

const LoginCard = styled(Card)`
  width: 600px;
  height: 500px;
  margin: 50px auto;
  border-radius: 20px !important;
  background-color: rgba(0, 0, 0, 0.7) !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 80%;
    margin: 50px auto;
  }
`

const TextFieldStyled = styled(TextField)`
  background-color: rgba(255, 255, 255, 0.8) !important;
`

const StyledTypography = styled(Typography)`
  color: #ffffff !important;
  font-size: 20px !important;
  font-weight: bold !important;
  margin: 0px 0px 0px -125px !important;
`

const SignUpTypography = styled(Typography)`
  margin-top: 10px !important;
  color: #ffffff !important;
  font-size: 14px !important;
  font-weight: bold !important;
  //   margin: 0px 0px 0px -125px !important;
`

const FullWidthButton = styled(Button)`
  padding: 8px 70px !important;
  background-color: rgb(229, 9, 20) !important;
  text-transform: none !important;

  &:hover {
    background-color: rgb(193, 17, 25) !important;
  }
`

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  const handleSignUpForm = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <BackgroundImage>
      <Header />
      <LoginCard sx={{ minWidth: 275 }}>
        <StyledTypography
          gutterBottom
          sx={{ color: 'text.secondary', fontSize: 14 }}
          variant="body2"
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </StyledTypography>
        <CardActions style={{ backgroundColor: 'transparent' }}>
          {!isSignIn && (
            <TextFieldStyled
              id="filled-password-input"
              label="Full name"
              type="input"
              variant="filled"
            />
          )}
        </CardActions>
        <CardActions style={{ backgroundColor: 'transparent' }}>
          <TextFieldStyled
            id="filled-password-input"
            label="Email"
            type="email"
            variant="filled"
          />
        </CardActions>
        <CardActions style={{ backgroundColor: 'transparent' }}>
          <TextFieldStyled
            required
            id="outlined-basic"
            label="Password"
            type="password"
            variant="filled"
          />
        </CardActions>
        <CardActions>
          <FullWidthButton variant="contained">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </FullWidthButton>
        </CardActions>
        <SignUpTypography
          gutterBottom
          sx={{ color: 'text.secondary', fontSize: 14 }}
          variant="body2"
        >
          {!isSignIn ? 'Already a user?' : 'New to Netflix?'}
          <Button
            variant="contained"
            color="success"
            onClick={handleSignUpForm}
            style={{ textTransform: 'none', marginLeft: '6px' }}
          >
            {!isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
        </SignUpTypography>
      </LoginCard>
    </BackgroundImage>
  )
}
export default Login
