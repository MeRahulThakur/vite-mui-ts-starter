import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Menu, MenuItem, Divider } from '@mui/material';
import { AccountCircle, Login, Logout, KeyboardArrowDown } from '@mui/icons-material';

const LoginMenu = () => {
  const isAuthenticated = true;
  const account = {name:"Rahul Thakur"};
  const [anchorElementLoginMenu, setAnchorElementLoginMenu] = React.useState<HTMLElement | null>(null);
  const navigate = useNavigate();

  const loginUser = () => {
    console.log("login code logic")
  };

  const logoutUser = () => {
    navigate("/");
    console.log("logout code logic")
  };

  if (!isAuthenticated) {
    return (
      <Box sx={{ marginLeft: "auto", marginRight: "12px" }}>
        <Button onClick={loginUser} color="inherit" startIcon={<Login />}  >Login</Button>
      </Box>
    );
  }
  else {
    return (
      <Box sx={{ marginLeft: "auto" }}>
        <Button
          onClick={(event: React.MouseEvent<HTMLElement>) => { setAnchorElementLoginMenu(event.currentTarget); }}
          startIcon={<AccountCircle />}
          endIcon={<KeyboardArrowDown />}
          sx={{ color: "white", marginRight: "12px;" }} >
          {account?.name}
        </Button>
        <Menu
          anchorEl={anchorElementLoginMenu}
          open={Boolean(anchorElementLoginMenu)}
          onClose={() => setAnchorElementLoginMenu(null)}
        >
          <MenuItem disableRipple sx={{ width: 1 }} onClick={() => {
            setAnchorElementLoginMenu(null);
            navigate("profile")
          }}>
            <AccountCircle sx={{ mr: 1 }} />
            User Profile
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem disableRipple onClick={() => {
            setAnchorElementLoginMenu(null);
            logoutUser();
          }} >
            <Logout sx={{ mr: 1 }} />
            Logout
          </MenuItem>
        </Menu>
      </Box>
    );
  }
}

export default LoginMenu;