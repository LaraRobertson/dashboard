import * as React from 'react';
import DashboardOrganizations from "./DashboardOrganizations";
import getUser from "../utils/getUser";

const userID = getUser();
console.log("userID: " + userID.user_id);

export default () => (
        <DashboardOrganizations userID= {userID} />
);
