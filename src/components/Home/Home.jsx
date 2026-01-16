import React from 'react';
import Hero from '../Header/Hero';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const doctors= useLoaderData();
    console.log(doctors);
    return (
        <div className=' min-h-screen bg-linear-to-b  from-gray-100 to-gray-300  mx-auto px-8'>
            <Hero></Hero>
            <Doctors doctors={doctors}></Doctors>
        </div>
    );
};

export default Home;