import React from 'react';
import Header from '../../components/Header/Header';
import {Outlet} from 'react-router';
const Error = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>

    );
};

export default Error;