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
        <div class="container mt-5">
            <h3>RESERVE YOUR SEAT</h3>
            <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title"><i class="bi bi-phone"></i></h1>
        <h5 class="card-text">PHONE NUMBER</h5>
        <h5 class="card-text">+91 8745885500</h5>
        <div class="mt-5">
            <h1><i class="bi bi-envelope"></i></h1>
            <h5>EMAIL</h5>
            <h5>contact@eazydms.com</h5>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <div className="book-form text-white " data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <form onSubmit={sendEmail}> 
                        <label>name</label>
                        <input
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='Name*'
                        />
                        <label>designation</label>
                        <input
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='Designation*'
                        />
                        <label>name</label>
                        <input
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='Company Name*'
                        />
                        <label>number</label>
                        <input
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='Contact Number*'
                        />
                        <label>Email</label>
                        <input
                        className="p-3 my-2 w-100 book-form-input"
                        placeholder='E-mail (Official)*'
                        />
                        <br />
                        <input
                        type="submit"
                        value="Booking"
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