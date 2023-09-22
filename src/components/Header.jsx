import { Block, Height } from "@mui/icons-material";
import { AppBar, Container, Toolbar, Grid, Tooltip, IconButton, Avatar, MenuItem, Button, Box, Typography, Menu } from "@mui/material";
import { useState } from "react";
import MenuIcone from "@mui/icons-material/Menu";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container sx={{ alignItems: "center" }}>

          <Grid item sx={{ display:"center"}}>
            <Grid item md={3} xs={3} sx={{display: { lg:"none", xs:"block", md:"block"}}}>
          <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit">
            <MenuIcone/>
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
            display: { xs: 'block', md: 'none' },
          }}
          >
            <MenuItem>
            <Button sx={{color:"Black"}} href="/Dashbord">Dashbord</Button>
            </MenuItem>
            <MenuItem>
            <Button sx={{color:"Black"}} href="/Dashbord/produtos">Produtos</Button>
            </MenuItem>
          </Menu>
          </Grid>
          </Grid>

            <Grid item lg={2} xs={6} md={4}>
              <img width={180} src="https://static.wixstatic.com/media/636c23_fcd75cd0ca4441f1b4b7bac21b138b7b.png/v1/fill/w_600,h_298,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/636c23_fcd75cd0ca4441f1b4b7bac21b138b7b.png"/>
            </Grid>
            <Grid item lg={8} sx={{display: { lg:"block", xs:"none", md:"none"}}}>
              <Box>
                <Button variant="contained" color="secondary">Dashbord</Button>
                <Button variant="contained" color="secondary">Produtos</Button>
              </Box>
            </Grid>
            <Grid item lg={2} xs={3} md={5} sx={{ textAlign: "right" }}>
              <Tooltip title="Account settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"></Avatar>
                </IconButton>
              </Tooltip>
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
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Perfil</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">Configurações</Typography>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;