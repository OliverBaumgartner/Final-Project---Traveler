
import {Link, useNavigate} from "react-router-dom"
import{jwtDecode} from "jwt-decode";
import Login from "./Login";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog', "housing"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar(){
    let token;
    let decoded;
    const navigate = useNavigate("")

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    if(localStorage.getItem("token")){
        token = localStorage.getItem("token")
        decoded = jwtDecode(token);
        console.log(decoded);
    }

    function handleLogout(){
        if(token){
            if(window.confirm("Are you sure you want to logout?")){
                localStorage.removeItem("token");
                console.log("logout successfull")
            }
        }else {
            navigate ("/");
        }
    }
    return(
        <AppBar position="static" sx={{bgcolor:"black"}}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h4"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  TRVLR
                </Typography>
              
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'block' },
                    }}
                  >
                    {token ? ( //if you have a token and therefore are logged in
                    <div>
                        <MenuItem key="1" onClick={handleCloseNavMenu}>
                            <Link to="/login">Login</Link>
                        </MenuItem>
                        <MenuItem key="2" onClick={handleCloseNavMenu}>
                            <Link to="/newdaytrip">New Daytrip</Link>
                        </MenuItem>
                        <MenuItem key="2" onClick={handleCloseNavMenu}>
                            <Link to="/daytrips">Daytrips</Link>
                        </MenuItem>
                        <MenuItem key="2" onClick={handleCloseNavMenu}>
                            <Link to="/Owner">My Daytrips</Link>
                        </MenuItem>
                        <MenuItem key="2" onClick={handleCloseNavMenu}>
                            <Link onClick={handleLogout} to="/">Logout</Link>
                        </MenuItem>
                    </div>
                ):( // if you don' t have a token and therefore are not logged in
                    <div>
                        <MenuItem key="1" onClick={handleCloseNavMenu}>
                            <Link to="/login">
                                <Typography textAlign="center">Login</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem key="2" onClick={handleCloseNavMenu}>
                            <Link to="/register">Register</Link>
                        </MenuItem>
                        <MenuItem key="2" onClick={handleCloseNavMenu}>
                            <Link to="/daytrips">Daytrips</Link>
                        </MenuItem>
                    </div>
                )}
                    {/* {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))} */}
                  </Menu>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  TRVLR
                </Typography>
                {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none' } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box> */}
              
                <Box sx={{ flexGrow: 0 }}>
                {token ? ( //if you have a token and therefore are logged in
                    <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: 'flex', md: 'flex' },
                      flexGrow: 1,
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    Hello {decoded.username}
                  </Typography>
                ):( // if you don' t have a token and therefore are not logged in
                    <Box>
                        <Login/>
                    </Box>
                )}
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
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;