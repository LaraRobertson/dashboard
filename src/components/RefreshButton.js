import React from "react";
import { useRefresh } from 'react-admin';
import Button from '@mui/material/Button';

const RefreshButton = () => {
    console.log("refresh");
    const refresh = useRefresh();
    const handleClick = () => {
        refresh();
    }
    return
    (<Button onClick={handleClick}>Refresh</Button>);
}

export default RefreshButton;