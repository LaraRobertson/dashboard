import React from "react";
import {defaultTheme, Layout, Resource} from 'react-admin';
import {createTheme, Box, Typography, MenuItem} from '@mui/material';
import MyUserMenu from "./MyUserMenu";
import { UserMenu, MenuItemLink } from "react-admin";
import { Link } from '@mui/material';
import ExitIcon from "@mui/icons-material/PowerSettingsNew";
import UserIcon from "@mui/icons-material/Group";
import {UserList} from "../pages/users";

const darkTheme = createTheme({
    palette: { mode: 'dark' },
});
/* get links */
const organization = "org 1";
const userID = "1";
const profileLink = "/users/" + userID;
/* end get links */

const Box2 = () => {

    if (organization != "") {
    return (
        <div className={"topNav"}>
            <h3>{organization}</h3>
            <MenuItemLink
                to="/"
                primaryText="Change Organization"
                className="topNav"
            />
        </div>

    ) } else {
        return (
            <div className={"topNav"}>
                <h3>Choose Organization</h3>
                <MenuItemLink
                    to="/"
                    primaryText="Change Organization"
                    className="topNav"
                />
            </div>)
    }
};
const MySideBar = props => (

        <Box sx={{
            width: 200
        }}>
            <Box >


                <Box2></Box2>

                <Box >

                    <Link href="/users" sx={{ textDecoration: 'none', color:"#ffffff"}}>
                        Users
                    </Link>
                    <Link href="/users/1" sx={{ textDecoration: 'none', color:"#ffffff"}}>
                        Settings
                    </Link>
                    <MenuItemLink
                        to={profileLink}
                        primaryText="Settings"
                        className="topNav"
                    />

                </Box>

            </Box>
        </Box>

);

export default MySideBar;