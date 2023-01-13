import React from 'react';
import About from './About';
import Aboutus from './Aboutus';
import Banner from './Banner';
import Choose from './Choose';
import Fusion from './Fusion';
import Header from './Header';
import Reserve from './Reserve';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <About/>
            <Aboutus/>
            <Choose/>
            <Fusion/>
            <Reserve/>
        </div>
    );
};

export default Home;