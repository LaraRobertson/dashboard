import * as React from 'react';
import {Error, Loading, useGetList, useStore} from "react-admin";

const OrgH2 = ({user_id}) => {
/* get user info */
console.log("get user info");
let payload = {
    filter: {user_id: user_id}
};
const {data: users, isLoading, error} = useGetList('users', payload);
if (isLoading) return <Loading/>;
if (error) return <Error/>;
if (!users) return null;

let userName1 = "";
/* end get org info */
    for (const key in users) {
        console.log(`${key}: ${users[key]}`);
        for(const key2 in users[key]) {
            if (key2 === "name") userName1 = users[key][key2];
            console.log(`${key2}: ${users[key][key2]}`);
        }
    }
return (
        <h2>Organizations for User:{userName1}</h2>
        )
};
export default OrgH2