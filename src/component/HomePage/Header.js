import React from 'react';
import eazydms from '../../assets/Images/easydms.png'
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark  p-md-3">
      <div class="container">
        <a class="navbar-brand" href="#"><img src={eazydms} class="logo"/></a>
        <h5 class="head-text">| A Distributor Management System</h5>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text_blue" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text_blue" href="#">About</a>
            </li>
           <li class="nav-item">
              <a class="nav-link " href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

        </div>
    );
};

export default Header;