import React from "react";
import { defaultTheme, Layout, AppBar } from 'react-admin';
import { createTheme, Box, Typography } from '@mui/material';
import MyUserMenu from "./MyUserMenu";
import { UserMenu, MenuItemLink } from "react-admin";

const darkTheme = createTheme({
    palette: { mode: 'dark' },
});


/* get links */
const organization = "org 1";
const orgID = "1";
const eventsLink = "/events/" + orgID;
/* end get links */

const MyAppBar = props => (
    <AppBar {...props} userMenu={<MyUserMenu />}>
        <Box flex={1}>
        <Box display="flex" alignItems="center">
            <Box
                component="img"
                sx={{ marginRight: '1em', height: 30 }}
                src={
                    'https://wahsega.com/wp-content/uploads/Wahsega-Logo-White-1-1.png'
                }
                alt="Wahsega Logo"
            />
            <Box >
            <MenuItemLink
                to={eventsLink}
                primaryText="Events"
                className="topNav"
            />
            </Box>
            <Box >
                <MenuItemLink
                    to="/bell-scheduler"
                    primaryText="Bell Scheduler"
                    className="topNav"
                />
            </Box>
            <Box >
                <MenuItemLink
                    to="/event-triggers"
                    primaryText="Event Triggers"
                    className="topNav"
                />
            </Box>
            <Box >
                <MenuItemLink
                    to="/zones"
                    primaryText="Zones"
                    className="topNav"
                />
            </Box>
            <Box >
                <MenuItemLink
                    to="/endpoints"
                    primaryText="Endpoints"
                    className="topNav"
                />
            </Box>
        </Box>
        </Box>

    </AppBar>
);

export default MyAppBar;