import * as React from 'react';
import { ThemeProvider, makeStyles} from "@mui/styles";
import { useMediaQuery } from '@mui/material';
import {
    List,
    Datagrid,
    SingleFieldList,
    ChipField,
    TextField,
    ReferenceField,
    EditButton,
    TextInput,
    SimpleForm,
    Edit,
    Create,
    ReferenceInput,
    SelectInput,
    SimpleList,
    useQuery, required, ImageInput, ImageField
} from 'react-admin';
import CustomTextField from "./CustomTextField";
import { theme } from "./theme";

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


const MyEditButton = props => {
    const classes = useStyles();
    return <EditButton className={classes.button} {...props} />;
};

const DeviceList = props => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const classes = useStyles();
    const userID= 1;
    const hrefConfig = "#/users";

    return (
        <ThemeProvider theme={theme}>
            <h1>Settings</h1>
            <div><span className={classes.button} ><a href={hrefConfig}>My Profile</a>  | Users</span></div>
            <SimpleForm  resource="users" filter={{id: userID}}>
                <TextInput source="name" validate={required()} />
                <ImageInput source="avatar" validate={required()}>
                    <ImageField />
                </ImageInput>
            </SimpleForm>

        <List {...props} title="users"  basePath={props.path} resource="users" filter={{id: userID}} >

            {isSmall ? (
                <SimpleList
                    primaryText={record => `label: ${record.label}`}
                    secondaryText={record => `active: ${record.active}`}
                    linkType="show"
                />

            ) : (

                <Datagrid  hasCreate={true} bulkActionButtons={false} >
                    <TextField source="id" />
                    <TextField source="name" />
                    <CustomTextField source="email"/>
                    <CustomTextField source="username"/>

                </Datagrid>
            )}
        </List>
        </ThemeProvider>
    );
};
export default DeviceList;