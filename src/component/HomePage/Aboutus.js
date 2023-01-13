import React from 'react';
import './Aboutus.css';
import aboutus from '../../assets/Images/about-image (2).jpeg';

const Aboutus = () => {
    return (
        <div>
            <div class="container mt-5">
           <div class="card-group">
  <div class="">
    <div class="card-body">
    <img src={aboutus} class="card-img-top w-100 h-100" alt="..."/>
    </div>
    </div>
  <div class="card">
  <h2 class="main_title">Because Every Business Partner Matters!</h2>
      <h6 class="card-title title_one italic">From the initial phase to today the software has traveled through various approaches i.e. From Portal Based System to Tally & Busy Integrated DMS to Hybrid DMS - the Nxt Gen DMS. The Journey itself depicts the vision of Eazy DMS of providing the Best Solution to its clients by:</h6>
      <h6 class="text_left"><i class="bi bi-check2-all"></i> Solving the Need of the Hour!</h6>
      <h6 class="text_left"><i class="bi bi-check2-all"></i> Providing the required platform as per the Industry Trend.</h6>
      <h6 class="text_left"><i class="bi bi-check2-all"></i> Binding the entire Business Channel Together.</h6>
      <br/>
      <h3 class="text_left">What to expect from Fusion 4.0 aka Eazy DMS 4.0?</h3>
      <h6 class="text_left"><i class="bi bi-check2-all"></i>A techno-fusion of your Present Need and Future Want!</h6>
      <h6 class="text_left"><i class="bi bi-check2-all"></i>A system bringing all your associates on a single platform.</h6>
      <h6 class="text_left"><i class="bi bi-check2-all"></i>Now More visibility, Clear Communication, Better Coordination and Best of Best Results.</h6>
    </div>
  </div>
        </div>
        </div>
    );
};

export default Aboutus;