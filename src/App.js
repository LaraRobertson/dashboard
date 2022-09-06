import * as React from 'react';
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

// material
import Book from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import { createTheme } from '@mui/material';

// react admin
import {Admin, Resource, ListGuesser, MenuItemLink} from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
//import fakeDataProvider from 'ra-data-fakerest';


// pages
import {UserList, UserEdit, UserCreate, UserShow} from './pages/users';
import loginPage from "./pages/login";


// components
import Dashboard from './components/Dashboard';
import authProvider from './utils/authProvider';
import dataProvider from "./utils/dataProvider";
import MyLayout from "./components/MyLayout";
import Settings from './components/Settings';
import MySidebar from './components/MySidebar';

// browser history
import { createBrowserHistory as createHistory } from 'history';
import { defaultTheme } from 'react-admin';
import {Box} from "@mui/material";
const history = createHistory();


const theme = {
    ...defaultTheme,
    palette: {
        type: 'light', // Switching the dark mode on is a single property value change.
        secondary: {
            main: "#0C73AE",
        },
    },
    components: {
        ...defaultTheme.components,
        MuiDrawer: {
            styleOverrides: {
                root: {
                    backgroundColor: "#0C73AE",
                    marginTop: "-30px",
                    paddingBottom: "30px",
                    width:"200px"
                },
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    '&$focused': {
                        color: '#4A90E2'
                    },
                },
            }
        },
    }
};

const App = () => (
    <BrowserRouter>
    <Admin
        layout={MyLayout}
        authProvider={authProvider}
        dataProvider={dataProvider}
        customRoutes={[
            <Route
                exact
                path="/settings"
                component={(props) => <Settings {...props} />}
            />
        ]}
        history={history}
        dashboard={Dashboard}
        loginPage={loginPage}
        theme={theme}

    >



        <Resource
            name="users"
            icon={Book}
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
        />
        <Resource name="organizations" icon={UserIcon} list={ListGuesser}/>
        <Resource name="users" icon={UserIcon} list={UserList}/>

    </Admin>
    </BrowserRouter>
);
export default App;
