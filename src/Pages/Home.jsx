import React from 'react';
import Carousel from '../Components/Carousel';
import Productivity from '../Components/Productivity.JSX';
import Health from '../Components/Health';
import Education from '../Components/Education';
import NewsLatter from '../Components/NewsLatter';

const Home = () => {
    return (
        <>
        <Carousel></Carousel>
        <Productivity></Productivity>
        <Health></Health>
        <Education></Education>
        <NewsLatter></NewsLatter>
            
        </>
    );
};

export default Home;