import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../../../components/colors";

const pages = [
  { label: "Search", link: "/" },
  { label: "Career Pathways", link: "/careers" },
];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const currentPage = pages.find(
    (page) => page.link === window.location.pathname
  );

  return (
    <CareersAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CareersLogo src="/CareersLogoSmall.png" alt="Logo" />
          <CurrentPageBox>
            <Typography
              variant="h6"
              color="inherit"
              style={{ width: "100%", textAlign: "center" }}
            >
              {currentPage?.label}
            </Typography>
          </CurrentPageBox>
          <MenuBox sx={{ flexGrow: 1 }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={() => navigate(page.link)}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </MenuBox>
        </Toolbar>
      </Container>
    </CareersAppBar>
  );
};

const MenuBox = styled(Box)`
  float: right;
  flex-direction: row-reverse;
  align-content: flex-start;
  align-self: center;
`;

const CareersAppBar = styled(AppBar)`
  background-color: ${colors.careersBlue}!important;
  box-shadow: none !important;
`;

const CareersLogo = styled.img`
  max-height: 70px;
  max-width: 70px;
`;

const CurrentPageBox = styled(Box)`
  display: flex;
  width: 100%;
`;

export default ResponsiveAppBar;
