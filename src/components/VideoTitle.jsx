import { Button } from '@mui/material'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite'
import InfoIcon from '@mui/icons-material/Info'
import Stack from '@mui/material/Stack'
import { Container } from '@mui/material'
import { Typography } from '@mui/material'

const VideoTitle = ({ title, overview, img }) => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          position: 'absolute',
          width: '100vw',
          aspectRatio: '16 / 9',
          paddingTop: { xs: '5%', sm: '20%' },
          paddingLeft: { xs: '20px', sm: '30px' },
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Typography
          variant="h5"
          color="rgba(255, 255, 255, 0.8)"
          fontSize={{ xs: '12px', sm: '16px', md: '20px' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          width={{ xs: '60%', sm: '40%', md: '30%' }}
          fontSize={{ xs: '10px', sm: '14px', md: '16px' }}
          color="rgba(255, 255, 255, 0.6)"
        >
          {overview}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            variant="outlined"
            startIcon={<PlayCircleFilledWhiteIcon />}
            style={{
              textTransform: 'none',
              color: 'black',
              backgroundColor: 'white',
              borderColor: 'white',
            }}
          >
            Play
          </Button>
          <Button
            variant="outlined"
            startIcon={<InfoIcon />}
            style={{
              textTransform: 'none',
              color: 'white',
              backgroundColor: 'rgba(109, 109, 110, 0.7)',
              borderColor: 'rgba(109, 109, 110, 0.1)',
            }}
          >
            More Info
          </Button>
        </Stack>
      </Container>
    </>
  )
}
export default VideoTitle
