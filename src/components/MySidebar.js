import * as React from 'react';
import {createTheme, Box} from '@mui/material';
import { useStore, MenuItemLink } from "react-admin";


const darkTheme = createTheme({
    palette: { mode: 'dark' },
});

const MySideBar = () => {
        /* get links */
        const [orgName, setOrgName] = useStore("org_name", "");
    let orgNameChosen = "org not chosen";
        if (orgName === "") {
            orgNameChosen = "org not chosen";
        } else {
            orgNameChosen = orgName;
        }
        const profileLink = "/users/";
        return (
                <Box sx={{
                    width: 200
                }}>
                    <Box >
                        <div className={"topNav"}>
                            <h3>{orgNameChosen}</h3>
                            <MenuItemLink
                                to="/"
                                primaryText="Change Organization"
                                className="topNav"
                            />
                        </div>
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