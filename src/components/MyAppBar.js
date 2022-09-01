import React from "react";
import { defaultTheme, Layout, AppBar } from 'react-admin';
import { createTheme, Box, Typography } from '@mui/material';
import MyUserMenu from "./MyUserMenu";
import { UserMenu, MenuItemLink } from "react-admin";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";

const darkTheme = createTheme({
    palette: { mode: 'dark' },
});

const MyAppBar = props => (
    <AppBar {...props} userMenu={<MyUserMenu />}>
        <Box flex="1">
            <Typography variant="h6" id="react-admin-title">test</Typography>
        </Box>
        <MenuItemLink
            to="/home"
            primaryText="Home"
            leftIcon={<HomeIcon />}
        />
        <MenuItemLink
            to="/my-profile"
            primaryText="My Profile"
            leftIcon={<SettingsIcon />}
        />
    </AppBar>
);

export default MyAppBar;