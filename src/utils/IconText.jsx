import { Box, Typography } from '@mui/material'

const IconText = ({ icon, text, onClick }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={onClick}>
      {icon}
      <Typography sx={{ ml: 1 }}>{text}</Typography>
    </Box>
  )
}

export default IconText
