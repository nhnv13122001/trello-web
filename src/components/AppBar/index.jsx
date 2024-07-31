import Box from '@mui/material/Box'

import ModeSelect from '~/components/ModeSelect'

function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.100',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <ModeSelect />
    </Box>
  )
}

export default AppBar
