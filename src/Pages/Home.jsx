import React from 'react';
import Carousel from '../Components/Carousel';
import Productivity from '../Components/Productivity.JSX';
import Health from '../Components/Health';
import Education from '../Components/Education';
import NewsLatter from '../Components/NewsLatter';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <>
        <Carousel></Carousel>
        <Productivity></Productivity>
        <Health></Health>
        <Education></Education>
        <NewsLatter></NewsLatter>
        <Footer></Footer>
            
        </>
    );
};

export default Home;