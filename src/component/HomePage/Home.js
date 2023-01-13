import React from 'react';
import About from './About';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Choose from './Choose';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <About/>
            <Aboutus/>
            <Choose/>
        </div>
    );
};

export default Home;