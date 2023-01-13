import React from 'react';
import emailjs from 'emailjs-com';
import './Reserve.css';

const Reserve = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_p6km8i4','template_2swxfja', e.target,
         "ZL-Q0Vg6WeBfw_xFM"
         ).then(res =>{
             console.log(res);
         }).catch(err=>console.log(err));
    }
    return (
        <div class="container mt-5"data-aos="fade-left">
            <h3>RESERVE YOUR SEAT</h3>
            <hr class="mx-auto reverse_hr"/>
            <div class="row">
  <div class="col-sm-6">
    <div class="col p-3">
      <div class="card-body">
        <h1 class="card-title"><i class="bi bi-phone phn_cl"></i></h1>
        <h5 class="card-text mt-4">PHONE NUMBER</h5>
        <h5 class="card-text phn_num mt-4">+91 8745885500</h5>
        <div class="mt-5">
            <h1 class="phn_cl"><i class="bi bi-envelope"></i></h1>
            <h5 class="mt-4">EMAIL</h5>
            <h5 class="phn_cl mt-4">contact@eazydms.com</h5>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div className="book-form  " data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <form onSubmit={sendEmail}> 
                        <label></label>
                        <input
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='Name*'
                        />
                        <label></label>
                        <input
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='Designation*'
                        />
                        <label></label>
                        <input
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='Company Name*'
                        />
                        <label></label>
                        <input
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='Contact Number*'
                        />
                        <label></label>
                        <input
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='E-mail (Official)*'
                        />
                        <br />
                        <input
                        type="submit"
                        value="Sent"
                        className="btn btn-info w-50 text-white"
                        />
                    </form>
                </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Reserve;