import { useNavigate } from 'react-router-dom';

import { AppBar, Divider, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Assessment } from '@mui/icons-material';

import LoginMenu from './LoginMenu';

const Banner = () => {
  const isAuthenticated = true;
  const navigate = useNavigate();

  return (
    <AppBar position="relative" sx={{ background: "linear-gradient(to right bottom, #00498D, #02386E)" }}  >
      <Toolbar variant='dense' disableGutters >
        <IconButton onClick={() => { navigate("/") }} color="inherit" sx={{mx:0}} >
          <Assessment  />
          <Typography variant="h6" sx={{ml:1}} >MUI React TS SPA Starter</Typography>
        </IconButton>
        <Divider orientation='vertical' flexItem sx={{mx:1}} />
        {isAuthenticated && (
          <>
             <Button onClick={()=>{navigate("/workspaces")}} sx={{color:"white"}} >Reports</Button>
             <Divider orientation='vertical' flexItem sx={{mx:1}} />
             <Button onClick={()=>{navigate("/profile")}} sx={{color:"white"}} >User Profile</Button>
             <Divider orientation='vertical' flexItem sx={{mx:1}} />
          </>
        )}
        <LoginMenu />
      </Toolbar>
    </AppBar>
  )
}

export default Banner;