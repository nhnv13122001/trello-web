import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import BoltIcon from '@mui/icons-material/Bolt'
import AvatarGroup from '@mui/material/AvatarGroup'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AddtoDriveIcon from '@mui/icons-material/AddtoDrive'
import FilterListIcon from '@mui/icons-material/FilterList'

const MENU_STYLE = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderTop: '1px solid #00bfa5',
        px: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip sx={MENU_STYLE} icon={<DashboardIcon />} label='Sasori' clickable />
        <Chip sx={MENU_STYLE} icon={<VpnLockIcon />} label='Public/Private Workspace' clickable />
        <Chip sx={MENU_STYLE} icon={<AddtoDriveIcon />} label='Add to Google Drive' clickable />
        <Chip sx={MENU_STYLE} icon={<BoltIcon />} label='Automation' clickable />
        <Chip sx={MENU_STYLE} icon={<FilterListIcon />} label='Filters' clickable />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant='outlined' startIcon={<PersonAddIcon />}>
          Invite
        </Button>

        <AvatarGroup
          max={6}
          total={6}
          sx={{
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px'
            }
          }}
        >
          <Tooltip title='Sasori'>
            <Avatar
              alt='Sasori'
              src='https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/import/images/naruto02/221%EF%BD%9E300/241/NRT_241_286_H2_0048_0070.jpg '
            />
          </Tooltip>
          <Tooltip title='Sasori'>
            <Avatar
              alt='Sasori'
              src='https://cdna.artstation.com/p/assets/images/images/073/193/602/large/mikhail-voroshylov-1200.jpg?1709116647'
            />
          </Tooltip>
          <Tooltip title='Sasori'>
            <Avatar
              alt='Sasori'
              src='https://lh5.googleusercontent.com/proxy/JcJLGrsK2D_ng58C17ldOctT59neUO5zSGcaZ7qA4vujDaw7G3i6uJqhqIc1X53obmAbTbgL13PQm6iNb0rhLfey-9bNtWl_Y88Ah8QyMZymcAoVedtB68JQxdY'
            />
          </Tooltip>
          <Tooltip title='Sasori'>
            <Avatar
              alt='Sasori'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5eNLPDWeFhRtzPSxoc_-y7wXdQqf0mEIHA&s'
            />
          </Tooltip>
          <Tooltip title='Sasori'>
            <Avatar
              alt='Sasori'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MHaRd4K3fKF-_C0JitGdGBSHOVgcqhJi8w&s'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
