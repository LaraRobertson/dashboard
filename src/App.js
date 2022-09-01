import * as React from 'react';
import { Provider } from 'react-redux';
import { Route } from "react-router";

// material
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { createTheme } from '@material-ui/core/styles';

// react admin
import {Admin, Resource, ListGuesser} from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
//import fakeDataProvider from 'ra-data-fakerest';


// pages
import {PostList, PostEdit, PostCreate, PostShow} from './pages/posts';
import {UserList} from './pages/users';
import loginPage from "./pages/login";
import { ProfileEdit } from "./components/profile";

// components
import Dashboard from './components/Dashboard';
import authProvider from './utils/authProvider';
import dataProvider from "./utils/dataProvider";
import MyLayout from "./components/MyLayout";

// browser history
import { createBrowserHistory as createHistory } from 'history';
const history = createHistory();

const theme = createTheme({
    palette: {
        type: 'light', // Switching the dark mode on is a single property value change.
        secondary: {
            main: "#0C73AE",
        },
    },
    overrides: {
        // name of style sheet
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: '#4A90E2'
                }
            }
        }
    }
});

const App = () => (
    <Admin
        layout={MyLayout}
        authProvider={authProvider}
        dataProvider={dataProvider}
        customRoutes={[
            <Route
                key="my-profile"
                path="/my-profile"
                render={() => <ProfileEdit />}
            />
        ]}
        history={history}
        dashboard={Dashboard}
        loginPage={loginPage}
        theme={theme}



    >
        <Resource
            name="posts"
            icon={PostIcon}
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            show={PostShow}
        />
        <Resource name="users" icon={UserIcon} list={UserList}/>
        <Resource name="comments" list={ListGuesser}/>
    </Admin>
);
export default App;
