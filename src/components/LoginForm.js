import * as React from 'react';
import { useState,useEffect } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';

import { withStyles, createStyles } from '@mui/styles';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import authConfig from "../utils/authConfig";
import {Auth0Client} from '@auth0/auth0-spa-js';

const auth0 = new Auth0Client({
    domain: authConfig.domain,
    client_id: authConfig.clientID,
    redirect_uri: authConfig.redirectURI,
    cacheLocation: 'localstorage',
    useRefreshTokens: true
});

const styles = ({ spacing }) =>
    createStyles({
        button: {
            width: '100%',
        },
        icon: {
            marginRight: spacing.unit,
        },
    });
const MyLoginPage = ({ theme }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        e.preventDefault();
        // will call authProvider.login({ email, password })
        auth0.loginWithRedirect({
            redirect_uri: process.env.REACT_APP_AUTH0_REDIRECT_URI
        });
        //logged in. you can get the user profile like this:
        //doesn't return anything
        //const user = auth0.getUser();
        //console.log(user);
        //localStorage.setItem('userId', user);
    };

    useEffect(() => {
        console.log("login form rendered")
        const location = window.location.href;
        console.log("location: " + location);
        const url = new URL(window.location.href);
        const { searchParams } = url ;
        const code = searchParams.get('code');
        console.log("code" + code);
        const state = searchParams.get('state');
        console.log("state" + state);

        // If code is present, we came back from the provider
        if (code && state) {
            console.log("oauth callback received")
            useLogin({ location });
        }
    }, [useLogin]);

    const handleLogin = () => {
        useLogin(); // Do not provide code, just trigger the redirection
    };

    return (
        <div>
            <CardActions>
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Login!

                </Button>
            </CardActions>
        </div>
    );
}


export default MyLoginPage;