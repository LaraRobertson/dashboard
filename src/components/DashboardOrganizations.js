import * as React from 'react';
import { useGetList, Loading, Error,useStore } from 'react-admin';
import authConfig from "../utils/authConfig";
import MenuItemOrg from "./MenuItemOrg";


const DashboardOrganizations = () => {
        console.log("dashboard org");
        /* get user from auth0 */
        const key = "@@auth0spajs@@::" + authConfig.clientID + "::default::openid profile email offline_access";
        console.log("mykey: "+ key);
        const token = JSON.parse(localStorage.getItem(key));
        console.log("token: " + token);
        let user_id = "";
        if (token !== null) {
            console.log("mytoken[body][client_id]: " + token["body"]["decodedToken"]["user"]["sub"]);
            user_id = token["body"]["decodedToken"]["user"]["sub"].replace("auth0|", '');
            console.log("user_id: " + user_id);
        }
        /* end get user from auth0 */

        /* get org info */
        let payload = {
            filter: {user_id: user_id}
        };
        const {data: organizations, isLoading, error} = useGetList('organizations', payload);
        if (isLoading) return <Loading/>;
        if (error) return <Error/>;
        if (!organizations) return null;
        /* end get org info */

    return (
        <MenuItemOrg
            organizations={organizations}
            user_id={user_id}
        />
    );

};

export default DashboardOrganizations;