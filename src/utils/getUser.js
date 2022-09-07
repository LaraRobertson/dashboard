import * as React from 'react';
import authConfig from "../utils/authConfig";
import {Error, Loading, useGetList, useStore} from "react-admin";

const getUser = () => {
        /* set user variables */
        const key = "@@auth0spajs@@::" + authConfig.clientID + "::default::openid profile email offline_access";
        console.log("mykey: "+ key);
        const token = JSON.parse(localStorage.getItem(key));
        console.log("token: " + token);
        let user_id = "";
        let user_name = "";
        if (token !== null) {
            console.log("mytoken[body][client_id]: " + token["body"]["decodedToken"]["user"]["sub"]);
            user_id = token["body"]["decodedToken"]["user"]["sub"].replace("auth0|", '');
            console.log("user_id: " + user_id);
            /*
            if (user_id !== "") {
            const payload = {
                filter: {user_id: user_id}
            };
            const {data: users, isLoading, error} = useGetList('users', payload);
            if (isLoading) return <Loading />;
            if (error) return <Error />;
            if (!users) return null;
            for (const key in users) {
                 console.log(`${key}: ${users[key]}`);
                for (const key2 in users[key]) {
                    if (key2 === "id") user_id = users[0]['id'];
                    if (key2 === "name") user_name = users[0]['name'];
                    console.log(`${key2}: ${users[key][key2]}`);
                }
             }
            console.log("1. userID: " + user_id);
            console.log("2. userName: " + user_name);
            }*/
        }

    return {getUserID: user_id}
};

export default getUser;


