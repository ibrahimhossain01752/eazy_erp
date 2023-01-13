import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      <div>
       <div class='banner-main text-white'>
            <div class="banner-overlay">
                <div class="container">
                    <div class="row">
                       <div class="col-lg-6">
                                <div class="banner-content text-center text-md-start banner">
                                    <h5 class="hed_fir para_one">Because every Business Partner Matters!</h5>
                                    <h1 class="hed_fir para_two">Fusion DMS 4.0</h1>
                                    <h6 class="hed_fir para_thr">Connecting Everyone</h6>
                                    <h2 class="hed_fir para_fo">Coming on 23 September</h2>
                                    <div class="mt-5">
                                        <button class="btn_one"><span class="italic">i</span>  Reverse your seat</button>
                                        <button class="btn_two"><i class="bi bi-caret-right-fill"></i> Know more</button>
                                    </div>
                                     </div>
                            </div>
                            <div class="col-md-6">
                            </div>
                       </div>
                </div>
            </div>
        </div>

       </div>
    );
};

export default Banner;