import * as React from 'react';
import { forwardRef } from 'react';
import { UserMenu, MenuItemLink, useLogout } from "react-admin";
import {Link, MenuItem, Box} from '@mui/material';
import SettingsIcon from "@mui/icons-material/Settings";
import ExitIcon from '@mui/icons-material/PowerSettingsNew';
import authConfig from "../utils/authConfig";
import {Auth0Client} from '@auth0/auth0-spa-js';

const auth0 = new Auth0Client({
    domain: authConfig.domain,
    client_id: authConfig.clientID,
    redirect_uri: authConfig.redirectURI,
    cacheLocation: 'localstorage',
    useRefreshTokens: true
});
/* get links */
const organization = "org 1";
const userID = "1";
const profileLink = "/users/" + userID;
/* end get links */

const MyLogoutButton = forwardRef((props, ref) => {
    //const logout = useLogout();
    const handleClick = () => {
        auth0.logout({
            returnTo: process.env.REACT_APP_AUTH0_REDIRECT_URI
        });
    };

    return (
        <Box>
            <MenuItem
            sx={{ color:"darkgray"}}
            onClick={handleClick}
            ref={ref}
        >
            <ExitIcon sx={{ paddingRight:"5px"}}/> Logout
        </MenuItem>
        </Box>

    );
});

const MyUserMenu = (props) => {
    return (
        <UserMenu {...props}>
            <MyLogoutButton />
        </UserMenu>
    );
};

export default MyUserMenu;