import * as React from 'react';
import {makeStyles, ThemeProvider} from "@mui/styles";
import {
    Show,
    ShowButton,
    SimpleShowLayout,
    RichTextField,
    DateField,
    List,
    Edit,
    Create,
    Datagrid,
    ReferenceField,
    TextField,
    EditButton,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    Filter, ImageInput, required, ImageField, useStore, useGetList, Loading, Error
} from 'react-admin';

import {theme} from "../components/theme";
import {useMediaQuery} from "@mui/material";
import authConfig from "../utils/authConfig";

const useStyles = makeStyles({
    button: {
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& svg': { color: 'orange' }
    },
    table: {
        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& .MuiToolbar-regular-308 ': { color: 'orange' }
    },
    title: {
        textAlign: 'center',
        padding: '0.25em',
    },
});
const UserFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput
            label="User"
            source="userId"
            reference="users"
            allowEmpty
        >
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const UserList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const classes = useStyles();
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
    /* get user info */
    console.log("get user info");
    let payload = {
        filter: {user_id: user_id}
    };
    const {data: users, isLoading, error} = useGetList('users', payload);
    if (isLoading) return <Loading/>;
    if (error) return <Error/>;
    if (!users) return null;
    let userID = "";
    for (const key in users) {
        console.log(`${key}: ${users[key]}`);
        for(const key2 in users[key]) {
            if (key2 === "id") userID = users[key][key2];
            console.log(`${key2}: ${users[key][key2]}`);
        }
    }
    const profileLink = "#/users/" + userID;
    return (
        <ThemeProvider theme={theme}>
            <h1>Settings</h1>
            <div><span className={classes.button}>Users | <a href={profileLink}>My Profile</a></span></div>
            <List {...props} filters={<UserFilter/>}>
                <Datagrid rowClick="edit">
                    <TextField source="name"/>
                    <TextField source="email"/>
                    <TextField source="username"/>
                    <ShowButton/>
                </Datagrid>
            </List>
        </ThemeProvider>
    )
};

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.title}"` : ''}</span>;
};

export const UserEdit = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const classes = useStyles();
    const hrefConfig = "#/users";

    return (
        <ThemeProvider theme={theme}>
            <h1>Settings</h1>
            <div><span className={classes.button}>My Profile  | <a href={hrefConfig}>Users</a></span></div>
            <Edit title={<UserTitle/>} {...props}>
                <SimpleForm>
                    <TextInput source="name"/>
                    <TextInput source="email"/>
                    <ImageInput source="avatar">
                        <ImageField />
                    </ImageInput>
                </SimpleForm>
            </Edit>
        </ThemeProvider>
    );
};

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="email"/>
            <ImageInput source="avatar">
                <ImageField />
            </ImageInput>
        </SimpleForm>
    </Create>
);

export const UserShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name"/>
            <TextField source="email"/>
        </SimpleShowLayout>
    </Show>
);
