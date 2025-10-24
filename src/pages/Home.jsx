import React, { useState } from 'react'
import "../assets/css/Home.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
     <div>
      <section className="hero">
        <div class="container">
          <div class="row align-items-start">
            <div class="col left-hero">
              <h1>We Build Brands That Inspire Confidence and Drive Profit</h1>
              <p>Let’s collaborate and craft a truly standout brand for you.</p>
              <div>
                <button>Talk To Us</button>
                <button>Explore Our Work</button>
              </div>
            </div>
            <div class="col">
              <img src="https://dndesigns.co.in/wp-content/uploads/2025/09/hgefef.png"></img>
            </div>
          </div>
        </div>
      </section>


      <section className='our-constant-companions'>
<div class="container text-center">
  <div class="row align-items-start">
  <h2>Our Constant Companions</h2>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
  </div>

   <div class="row align-items-start">
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/07/wlues-1.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/07/wlues-1.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/07/wlues-1.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/07/wlues-1.png" className='img-fluid'></img>
    </div>
  </div>


 <div class="row align-items-start">
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
  </div>


 <div class="row align-items-start">
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
  </div>


 <div class="row align-items-start">
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
    <div class="col-6 col-md-3 companies">
      <img src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png" className='img-fluid'></img>
    </div>
  </div>

</div>
      </section>



      <section className="our-work">
      <div className="container-fluid">
        <h2 className="text-center mb-4">Our Work</h2>
        <div className="row">
          <div className="col-6">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-3">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2019/02/2-3.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-3">
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2019/02/thames-graphic-webiste-750x1050-1.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>

        
        {showMore && (
          <div className="row mt-4">
            <div className="col-6">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-3">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2019/02/2-3.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-3">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2019/02/thames-graphic-webiste-750x1050-1.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        )}
      
        <div className="mt-3">
          <button
            className="btn btn-primary"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>


 {/* <section className="testimonial">
      <div style={{ width: "400px", margin: "auto" }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="custom-swiper"
        >
          <SwiperSlide>
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
              alt="slide 1"
              className="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
              alt="slide 2"
              className="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
              alt="slide 3"
              className="img-fluid"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section> */}


<section className='our-brand'>
<h2>Our Brand</h2>
<div>
  <img
        src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
              alt="slide 2"
              className="img-fluid"
            />
</div>

<div>
  <img
        src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
              alt="slide 2"
              className="img-fluid"
            />
</div>

<div>
  <img
        src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
              alt="slide 2"
              className="img-fluid"
            />
</div>

</section>

    </div>
  )
}

export default Home
