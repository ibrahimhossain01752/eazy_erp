import React from 'react';
import about from '../../assets/Images/about1.jpeg'
import './About.css';

const About = () => {
    return (
        <div class="container mt-5 " data-aos="fade-left">
            <h2>ABOUT US</h2>
            <hr class="about_hr mx-auto"/>
           <div class="card-group">
  <div class="col">
    <div class="card-body card_bg">
        <h6 class="main_title title_on">WHAT WE DO</h6>
      <h5 class="card-title title_one">Distribution network or Secondary Sales network is something which Companies were not able to manage completely.</h5>
      <p class="card-text text_pera">The pen and paper method was effective till the time goods were reaching directly from Manufacturer to Consumer. As and when the business started expanding, and the chain of distribution networks started to build in, that gave rise to the need of a software (Distributor Management System) which could Track, Manage and Control the entire activity....</p>
    </div>
    </div>
  <div class="col">
    <img src={about} class="card-img-top w-100 h-75 mt-5" alt="..."/>
    </div>
  </div>
        </div>
    );
};

export default About;