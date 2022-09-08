/**
 * Created by lara on 6/5/2021.
 * gets data from mysql table on local server
 */

const data2 = {
    users:[]
};
const userID = {};
const campusID = {};
const authUserUID = localStorage.getItem('UID');
let zoneIndex = 0;
let endpointIndex = 0;
console.log("authUserUID: " + authUserUID);

//available test apis
//https://gq08pbwrg8.execute-api.us-east-1.amazonaws.com/Stage/organizations
//https://gq08pbwrg8.execute-api.us-east-1.amazonaws.com/Stage/organizations/1
//https://gq08pbwrg8.execute-api.us-east-1.amazonaws.com/Stage/organizationRoles
//https://gq08pbwrg8.execute-api.us-east-1.amazonaws.com/Stage/organizationRoles/1
//https://gq08pbwrg8.execute-api.us-east-1.amazonaws.com/Stage/permissions
//https://gq08pbwrg8.execute-api.us-east-1.amazonaws.com/Stage/permissions/1
//https://gq08pbwrg8.execute-api.us-east-1.amazonaws.com/Stage/users

async function getUsers() {
    let url = 'https://gq08pbwrg8.execute-api.us-east-1.amazonaws.com/Stage/users';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    const users = "";
    users = await getUsers();
    console.log("users - from data2: " + users);
    if (users !=""){
   // data2.users = JSON.parse(JSON.stringify(users));
        for (let i = 0; i < users.length; i++) {
            data2.users[i] = {
                id: users[i].id,
                auth0ID: users[i].auth0ID,
                isActive: users[i].isActive,
                email: users[i].email,
                organizationId: users[i].organizationId,
                name:  users[i].name

            };
        }
    } data2.users = [{id:1, name:2}]
}

renderUsers();

export default data2;