import { pink } from '@mui/material/colors'
import { useColorScheme } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'

import HomeIcon from '@mui/icons-material/Home'
import LightModeIcon from '@mui/icons-material/LightMode'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='select-dark-light-mode-label'>Mode</InputLabel>
      <Select
        labelId='select-dark-light-mode-label'
        id='select-dark-light-mode'
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize='small' /> Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small' /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <>
      <ModeSelect />

      <div>vinhvinhvinh</div>

      <Typography variant='h1' color='abc'>
        Test Typography Abc color
      </Typography>
      <Typography variant='h1' color='primary.main'>
        Test Typography
      </Typography>
      <Typography variant='h1' color='primary.main2'>
        Test Typography
      </Typography>

      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>

      <br />
      <AccessAlarmIcon fontSize='large' />
      <ThreeDRotation fontSize='large' />
      <HomeIcon fontSize='large' />
      <HomeIcon color='primary' fontSize='large' />
      <HomeIcon color='secondary' fontSize='large' />
      <HomeIcon color='success' fontSize='large' />
      <HomeIcon color='action' fontSize='large' />
      <HomeIcon color='disabled' fontSize='large' />
      <HomeIcon sx={{ color: pink[500] }} fontSize='large' />
    </>
  )
}

export default App
