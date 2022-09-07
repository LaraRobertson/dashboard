import * as React from 'react';
import {Error, Loading, useGetList, useStore} from "react-admin";
import {CardContent, MenuItem, Box} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import OrgH2 from "./OrgH2";

const MenuItemOrg = ({organizations,user_id}) => {
    const [orgName, setOrgName] = useStore("org_name", "org not chosen");
    const [orgID, setOrgID] = useStore("org_id", "");
    const handleClick = (orginfo) => {
        /* set up store for organization id */

        console.log("set up org");
        console.log("organizations: " + typeof orginfo);
        for (const key in orginfo) {
            console.log(`${key}: ${orginfo[key]}`);
        }
        setOrgID(orginfo['id']);
        setOrgName(orginfo['name']);
    };

    console.log("1. orgID: " + orgID);
    console.log("2. orgName: " + orgName);

    let backgroundColor = "white";
    return (
        <div>
            <OrgH2 user_id={user_id} />
            <p>click Location to select organization</p>
            <Box sx={{ display: 'flex' }}>
                {organizations.map((organization, index) => {
                    if (organization.id === orgID) {
                        backgroundColor = "LightBlue";
                    } else {
                        backgroundColor = "white";
                    }
                    return (
                        <Card key={index} sx={{backgroundColor:backgroundColor}}>
                            <CardHeader title={organization.name}/>
                            <CardContent>
                            <MenuItem
                                key={index}
                                sx={{color: "darkgray"}}
                                onClick={() => handleClick({id: organization.id, name: organization.name})}
                            >
                                Location: {organization.location}
                            </MenuItem>
                            </CardContent>
                        </Card>

                    );

                })}
            </Box>
        </div>

    )
};
export default MenuItemOrg