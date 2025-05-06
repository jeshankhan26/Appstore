import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Category from './Components/Category';
import { Outlet } from 'react-router';

const AppRoot = () => {
    return (
        <>
        <Navbar></Navbar>
        <Category></Category>
        <Outlet></Outlet>
        <Footer></Footer>
            
        </>
    );
};

export default AppRoot;