import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router';
import Footer from './Components/Footer';

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
            
        </>
    );
};

export default Root;