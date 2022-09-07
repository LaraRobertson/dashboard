import React from "react";
import {defaultTheme, Error, Layout, Loading, Resource, useGetList} from 'react-admin';
import {createTheme, Box, Typography, MenuItem} from '@mui/material';
import MyUserMenu from "./MyUserMenu";
import { UserMenu, MenuItemLink } from "react-admin";
import { Link } from '@mui/material';
import ExitIcon from "@mui/icons-material/PowerSettingsNew";
import UserIcon from "@mui/icons-material/Group";
import {UserList} from "../pages/users";
import getUser from "../utils/getUser";


const darkTheme = createTheme({
    palette: { mode: 'dark' },
});


const Box2 = ({organization}) => {

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
const MySideBar = () => {
        /* get links */
        const organization_id  = localStorage.getItem("organization_id");
        const userID = getUser();
        const profileLink = "/users/" + userID["user_sysid"];
        const payload = {
            filter:{organization_id: organization_id,user_id: userID["user_id"]}
        };
        const { data: organizations, isLoading, error } = useGetList('organizations', payload);
        if (isLoading) return <Loading />;
        if (error) return <Error />;
        if (!organizations) return null;
        let orgName = "not chosen";
        if (organizations != null) {
            orgName = organizations[0]["name"];
            console.log("orgName: " + orgName);
        }
        return (
                <Box sx={{
                    width: 200
                }}>
                    <Box >
                        <Box2 organization={orgName}></Box2>
                        <Box >
                            <MenuItemLink
                                to={profileLink}
                                primaryText="Settings"
                                className="topNav"
                            />
                            <MenuItemLink
                                to="./users"
                                primaryText="Users"
                                className="topNav"
                            />


                        </Box>

                    </Box>
                </Box>

        );
}

export default MySideBar;