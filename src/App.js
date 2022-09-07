import * as React from 'react';
import { Route } from "react-router";
import { HashRouter,BrowserRouter } from "react-router-dom";


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
import {ControllerList, ControllerEdit, ControllerCreate, ControllerShow} from './pages/controllers';
import loginPage from "./pages/login";


// components
import Dashboard from './components/Dashboard';
import authProvider from './utils/authProvider';
import dataProvider from "./utils/dataProvider";
import MyLayout from "./components/MyLayout";
import Settings from './components/Settings';
import MySidebar from './components/MySidebar';

// browser history
import { defaultTheme } from 'react-admin';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

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
    <HashRouter basename={process.env.PUBLIC_URL}>
    <Admin
        layout={MyLayout}
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}
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
        <Resource
            name="controllers"
            icon={Book}
            list={ControllerList}
            edit={ControllerEdit}
            create={ControllerCreate}
            show={ControllerShow}
        />
        <Resource name="organizations" icon={UserIcon} list={ListGuesser}/>
        <Resource name="events" icon={UserIcon} list={ListGuesser}/>

    </Admin>
    </HashRouter>
);
export default App;
