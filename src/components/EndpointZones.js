import React, {Fragment, useEffect, useState} from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';
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
    useQuery
} from 'react-admin';
import CustomTextField from "./CustomTextField";
import CustomNumberField from "./CustomNumberField";
import { makeStyles } from '@material-ui/core/styles';
import { theme } from "./theme";
import {materialCells, materialRenderers} from "@jsonforms/material-renderers";
import ratingControlTester from "./ratingControlTester";
import RatingControl from "./RatingControl";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {JsonForms} from "@jsonforms/react";
import schema from "./schema.json";
import uischema from "./uischema.json";

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
    const pageURL = window.location.href;


    /* get zone ids that are associated with this endpoint */
    const [zoneIDs, setZoneIDs] = useState([]);
    const { data: zoneId } = useQuery({
        type: 'getList',
        resource: 'users',
        payload: {
            pagination: { page: 1, perPage: 600 },
            filter: {endpoint_id: endpointID},
        },
    });
    console.log(" ______________________ start zone __________________________");
    console.log("zoneId: " + zoneId);
    for (const key in zoneId) {
        console.log(`${key}: ${zoneId[key]}`);
        for (const key2 in zoneId[key]) {
            console.log(`${key2}: ${zoneId[key][key2]}`);
        }
    }
    useEffect(() => {
            if (zoneId) {console.log('set zone useeffect');setZoneIDs(zoneId.map((d) => ([d.zone_id])));}
        }, [zoneId]
    );
    console.log("zoneIDs: " + zoneIDs);
    for (const key in zoneIDs) {
        console.log(`${key}: ${zoneIDs[key]}`);
    }
    console.log(" ______________________ end zone __________________________");

    return (
        <ThemeProvider theme={theme}>
            <h1>{endpointTitle}</h1>
            <div><span className={classes.button} >Zones  | <a href={hrefConfig}>Config</a></span></div>
        <List {...props} title="Zones"  basePath={props.path} resource="zones" filter={{id: zoneIDs}} >

            {isSmall ? (
                <SimpleList
                    primaryText={record => `label: ${record.label}`}
                    secondaryText={record => `active: ${record.active}`}
                    linkType="show"
                />

            ) : (
                <Datagrid  hasCreate={false} bulkActionButtons={false} >
                    <CustomTextField source="label"/>
                    <CustomTextField source="active"/>
                </Datagrid>
            )}
        </List>
        </ThemeProvider>
    );
};
export default DeviceList;