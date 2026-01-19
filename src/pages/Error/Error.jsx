import React from 'react';
import Header from '../../components/Header/Header';
import {Outlet} from 'react-router';
const Error = () => {
    return (
        <>
            <Header></Header>
            <div className="items-center justify-center flex flex-col min-h-screen bg-red-100">
                <h1 className="text-2xl text-error-content">Opps! Page Not Found.</h1>
                <p className="text-error-content">The page you are looking for does not exist.</p>
                <button className="btn btn-primary mt-4" onClick={() => window.location.href = '/'}>Go to Home</button>
            </div>
        </>

    );
};

export default Error;