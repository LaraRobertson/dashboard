import React from "react";
import { UserMenu, MenuItemLink } from "react-admin";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import { useProfile } from "./profile";

const MyUserMenu = (props) => {
    const { profileVersion } = useProfile();
    console.log("profile version: " + profileVersion);
    return (
        <UserMenu key={profileVersion} {...props}>
            <MenuItemLink
                to="/my-profile"
                primaryText="My Profile"
                leftIcon={<SettingsIcon />}
            />
            <MenuItemLink
                to="/home"
                primaryText="Home"
                leftIcon={<HomeIcon />}
            />
        </UserMenu>
    );
};

export default MyUserMenu;