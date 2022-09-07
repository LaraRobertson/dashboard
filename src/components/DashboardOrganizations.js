import { useGetList, Loading, Error } from 'react-admin';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import * as React from "react";
import {CardContent, MenuItem, Box} from "@mui/material";
import getUser from "../utils/getUser";
import { useRefresh } from 'react-admin';

const DashboardOrganizations = () => {
    const userID = getUser();
    const currentOrg = localStorage.getItem("organization_id");
    const payload = {
        pagination: { page: 1, perPage: 10 },
        sort: { field: 'name', order: 'ASC' },
        filter:{user_id: userID["user_id"]}
    };
    const refresh = useRefresh();
    const handleClick = (organization_id) => {
        console.log("set org: " + typeof organization_id);
        //check if set and then remove
        if (localStorage.getItem("organization_id") === "") {
            console.log("blank");
        } else {
            localStorage.removeItem("organization_id");
        }
        refresh();
        localStorage.setItem("organization_id",organization_id);
    };
    const { data: organizations, isLoading, error } = useGetList('organizations', payload);
    if (isLoading) return <Loading />;
    if (error) return <Error />;
    if (!organizations) return null;

    return (
        <div>
        <h2>Organizations for User: {userID["user_name"]}</h2>
            <p>click Location to select organanization</p>
        <Box sx={{ display: 'flex' }}>

            <br />
        {organizations.map((organization, index) => {
            if (organization.organization_id == currentOrg) {
                return (
                    <Card key={organization.organization_id} sx={{backgroundColor:"lightblue"}}>
                        <CardHeader title={organization.name} />
                        <CardContent>
                            <MenuItem
                                key={index}
                                sx={{color: "darkgray"}}
                                onClick={() => handleClick(organization.organization_id)}
                            >
                                Location: {organization.location}
                            </MenuItem>

                        </CardContent>
                    </Card>
                );
            } else {
                return (
                    <Card key={organization.organization_id}>
                        <CardHeader title={organization.name}/>
                        <CardContent>
                            <MenuItem
                                key={index}
                                sx={{color: "darkgray"}}
                                onClick={() => handleClick(organization.organization_id)}
                            >
                                Location: {organization.location}
                            </MenuItem>

                        </CardContent>
                    </Card>
                );
            }
            })}
        </Box>
        </div>
    );
};

export default DashboardOrganizations;