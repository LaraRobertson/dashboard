/**
 * Created by lara on 3/26/2021.
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textStyle: {
        color:'#3A3A3C',
    },

});

const CustomLinkField = ({ record = {}, source }) => {
    const classes = useStyles();
    const hrefZones = "#/endpoint-zones/" + record[source] + "/zones";
    const hrefConfig = "#/endpoint-details/" + record[source] + "/config";
    return (
        <span className={classes.textStyle}><a href={hrefZones}>Zones</a> | <a href={hrefConfig}>Config</a></span>
    );
};

export default CustomLinkField;