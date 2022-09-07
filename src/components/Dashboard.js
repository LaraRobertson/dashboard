import * as React from 'react';
import DashboardOrganizations from "./DashboardOrganizations";
import getUser from "../utils/getUser";

/*getUser();
const userID = getUser();
<DashboardOrganizations userID= {userID} />*/
const Dashboard = () => <DashboardOrganizations />;

export default Dashboard;