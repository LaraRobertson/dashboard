import React from "react";
import authConfig from "../utils/authConfig";

/* get userID */
const getUser = () => {
    const key = "@@auth0spajs@@::" + authConfig.clientID + "::default::openid profile email offline_access";
    console.log("mykey: "+ key);
    const token = JSON.parse(localStorage.getItem(key));
    let user_id = "";
    let user_name = "";
    if (token !== null) {
        console.log("mytoken[body][client_id]: " + token["body"]["decodedToken"]["user"]["sub"]);
        user_id = token["body"]["decodedToken"]["user"]["sub"].replace("auth0|",'');
        user_name = token["body"]["decodedToken"]["user"]["name"];
        console.log("user_id: "+ user_id);
        console.log("user_id: "+ user_name);
    }
    return {user_id:user_id,user_name:user_name}
};

export default getUser;
