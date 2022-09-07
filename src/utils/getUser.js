import React from "react";
import authConfig from "../utils/authConfig";
import {useGetList} from "react-admin";

/* get userID */
const asyncLocalStorage = {
    setItem: function (key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    getItem: function (key) {
        return Promise.resolve().then(function () {
            console.log("test")
            return localStorage.getItem(key);
        });
    }
};
const getUser = () => {
    const key = "@@auth0spajs@@::" + authConfig.clientID + "::default::openid profile email offline_access";
    console.log("mykey: "+ key);
    const token = JSON.parse(localStorage.getItem(key));
    console.log("token: " + token);
    let user_id = "";
    let user_name = "";
    let user_sysid = "";
    if (token !== null) {
        console.log("mytoken[body][client_id]: " + token["body"]["decodedToken"]["user"]["sub"]);
        user_id = token["body"]["decodedToken"]["user"]["sub"].replace("auth0|",'');
        user_name = token["body"]["decodedToken"]["user"]["name"];
        console.log("user_id: "+ user_id);
        console.log("user_id: "+ user_name);
        /* get data user id */
        const payload = {
            filter:{user_id: user_id}
        };
        const { data: users, isLoading, error } = useGetList('users', payload);
        if (users!= null) {
            user_sysid = users[0]["id"];
            console.log("usersysid: " + user_sysid);
        }
    }
    return {user_id:user_id,user_name:user_name, user_sysid: user_sysid}
};

export default getUser;


