
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
import { Paper } from "@mui/material";

const pages = ['Products', 'Pricing', 'Blog', "housing"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Footer(){
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
        <Paper
            sx={{bgcolor:"black", position:"static", bottom:0, width:"100%", borderRadius: '0%'}}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                  <Typography
                  variant="h8"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  2024 Oliver Baumgartner. All right reserver.
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                </Box>
                <Box sx={{ flexGrow: 0 }}>

                    <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="https://www.linkedin.com/in/oliver-baumgartner-301487103/"
                    sx={{
                      mr: 2,
                      mt:2,
                      display: { xs: 'flex', md: 'flex' },
                      flexGrow: 1,
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    linkedin
                  </Typography>

                  <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="https://github.com/OliverBaumgartner"
                  sx={{
                    mr: 2,
                    mb:2,
                    display: { xs: 'flex', md: 'flex' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  Github
                </Typography>
                </Box>
              </Toolbar>
            </Container>
        </Paper>
    )
}

export default Footer;