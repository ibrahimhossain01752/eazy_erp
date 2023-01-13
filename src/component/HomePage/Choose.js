import React from 'react';
import './Choose.css';
import choose1 from'../../assets/Images/choose1.jpg';
import choose2 from'../../assets/Images/choose2.jpg';
import choose3 from'../../assets/Images/choose3.jpg';
import choose4 from'../../assets/Images/choose4.jpeg';
import choose5 from'../../assets/Images/choose5.jpeg';
import choose6 from'../../assets/Images/choose6.jpeg';


const Choose = () => {
    return (
        <div class="container mt-5" data-aos="fade-left">
             <h3>Why Choose Rest when Industry Leaders Chose the Best!</h3>
  <div class="row mt-5">
    <div class="col"><img src={choose1} class="choose1" /></div>
    <div class="col"><img src={choose2} class="choose2" /></div>
    <div class="col"><img src={choose3} class="choose3" /></div>
    <div class="col"><img src={choose4} class="choose4" /></div>
    <div class="col"><img src={choose5} class="choose5" /></div>
    <div class="col"><img src={choose6} class="choose6" /></div>
  </div>
</div>
    );
};

export default Choose;