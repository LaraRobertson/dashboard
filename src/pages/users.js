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
    Filter, ImageInput, required, ImageField,
} from 'react-admin';

import {theme} from "../components/theme";
import {useMediaQuery} from "@mui/material";
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

export const UserList = props => (
    <List {...props} filters={<UserFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="username" />
            <ShowButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.title}"` : ''}</span>;
};

export const UserEdit = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const classes = useStyles();
    const userID = 1;
    const hrefConfig = "/users";

    return (
        <ThemeProvider theme={theme}>
            <h1>Settings</h1>
            <div><span className={classes.button}>My Profile  | <a href={hrefConfig}>Users</a></span></div>
            <Edit title={<UserTitle/>} {...props}>
                <SimpleForm>
                    <TextInput disabled source="id"/>
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
