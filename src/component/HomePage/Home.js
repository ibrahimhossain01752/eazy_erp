import React from 'react';
import About from './About';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <About/>
            <Aboutus/>
        </div>
    );
};

export default Home;