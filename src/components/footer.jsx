import React from "react";
import "../assets/css/footer.css";

export default function Footer() {
  return (
    <footer className="main-footer-div ff text-white pt-5 pb-3 px-3">
     
     <div className="container mb-5"> 
      <div className="container mb-4">
        <h5 className="fw-semibold">
          Join DN Today. Getting More Done Together.
        </h5>
      </div>

      <div className="container mt-5 ">
        <div className="row mt-5">
          
          <div className="col-12 col-md-4 mb-4 mb-md-0 footer-li">
            <ul className="list-unstyled fs-2 fw-bold">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Service</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Career</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
            </ul>
          </div>

         
          <div className="col-12 col-md-4 ms-auto text-start text-md-end footer-right-sec">
           
            <div className="mb-4">
              <h6 className="fw-bold footer-add-conn mb-4">Address</h6>
              <p className="mb-0">
                C-40, Second Floor, Block C, Sector 58, Noida,<br/>
                Uttar Pradesh 201301
              </p>
            </div>

            
            <div className="mt-5">
              <h6 className="fw-bold footer-add-conn mb-4">Contact Us</h6>
              <p className="mb-0">
                +91 941 601 1100 <br />
                +91 720 660 5872 <br />
                info@dndesigns.co.in
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container mt-4 pt-3 footer-hr">
        <p className="mb-0 fw-semibold">
          Copyright © 2025 DN Designs. All rights reserved
        </p>
      </div>
      </div>
    </footer>
  );
}
