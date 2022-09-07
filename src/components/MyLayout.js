import * as React from 'react';
import { Layout } from "react-admin";
import MyAppBar from "./MyAppBar";
import MySidebar from "./MySidebar";

const MyLayout = (props) => (
        <Layout {...props} appBar={MyAppBar} menu={MySidebar}/>
);

export default MyLayout;