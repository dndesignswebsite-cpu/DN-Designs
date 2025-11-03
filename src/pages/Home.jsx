import React, { useState, useRef } from "react";
import "../assets/css/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import OurConstant from "../components/OurConstant";
import Form from "../components/Form"

function Home() {
  const [showMore, setShowMore] = useState(false);
  const ourWorkRef = useRef(null);

  const ourWork = () => {
    ourWorkRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div>
      {/*.....hero...... */}
      <section className="hero">
        <div className="container">
          <div className="row hero-rows">
            <div className="col left-hero">
              <h1>We Build Brands That Inspire Confidence and Drive Profit</h1>
              <p>Let’s collaborate and craft a truly standout brand for you.</p>
              <div>
                <button>Talk To Us</button>
                <button onClick={ourWork}>Explore Our Work</button>
              </div>
            </div>
            <div className="col hero-img">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/09/gkjeg.png"
                className="hero-bg-img"
              ></img>
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/09/hgefef.png"
                className="hero-img-main"
              ></img>
            </div>
          </div>
        </div>
      </section>

      {/*.....our brands...... */}

      <section className="our-brand">
        <div className="container">
          <h2 className="text-center our-brand-heading">Our Brand Journals</h2>
          <ul id="cards">
            <li className="card" id="card1">
              <div className="card-body">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                  alt="Image for Card 1"
                  className="img-fluid"
                />
                <div className="brand-overlay">
                  <div className="our-brand-content">
                    <h3>Grin Care</h3>
                    <div className="brand-buttons">
                      <button>Brand Identity</button>
                      <button>UI/UX</button>
                      <button>Website</button>
                    </div>
                    <p>
                      For Rithm’s Enlite, a brand with sparkling mineral water
                      and prebiotic drink range, we designed a thoughtful and
                      eye-catching brand identity, including can design, logo
                      design and character design. We created the character and
                      the overall brand design around the brand name to promote
                      the refreshing and calming properties of the product.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="card" id="card2">
              <div className="card-body">
                <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/GIF_1_1.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="brand-overlay">
                  <div className="our-brand-content">
                    <h3>Grin Care</h3>
                    <div className="brand-buttons">
                      <button>Brand Identity</button>
                      <button>UI/UX</button>
                      <button>Website</button>
                    </div>
                    <p>
                      For Rithm’s Enlite, a brand with sparkling mineral water
                      and prebiotic drink range, we designed a thoughtful and
                      eye-catching brand identity, including can design, logo
                      design and character design. We created the character and
                      the overall brand design around the brand name to promote
                      the refreshing and calming properties of the product.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="card" id="card3">
              <div className="card-body">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/Nectarpure.jpg"
                  alt="Image for Card 3"
                  className="img-fluid"
                />
                <div className="brand-overlay">
                  <div className="our-brand-content">
                    <h3>Grin Care</h3>
                    <div className="brand-buttons">
                      <button>Brand Identity</button>
                      <button>UI/UX</button>
                      <button>Website</button>
                    </div>
                    <p>
                      For Rithm’s Enlite, a brand with sparkling mineral water
                      and prebiotic drink range, we designed a thoughtful and
                      eye-catching brand identity, including can design, logo
                      design and character design. We created the character and
                      the overall brand design around the brand name to promote
                      the refreshing and calming properties of the product.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="card" id="card4">
              <div className="card-body">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/13.jpg"
                  alt="Image for Card 4"
                  className="img-fluid"
                />
                <div className="brand-overlay">
                  <div className="our-brand-content">
                    <h3>Grin Care</h3>
                    <div className="brand-buttons">
                      <button>Brand Identity</button>
                      <button>UI/UX</button>
                      <button>Website</button>
                      <button>Website</button>
                    </div>
                    <p>
                      For Rithm’s Enlite, a brand with sparkling mineral water
                      and prebiotic drink range, we designed a thoughtful and
                      eye-catching brand identity, including can design, logo
                      design and character design. We created the character and
                      the overall brand design around the brand name to promote
                      the refreshing and calming properties of the product.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* our brand mobile view */}

      <section className="mobile-view-our-brand">
        <div className="container">
          <div className="row">
          <h2 className="text-center">Our Brand Journals</h2>
          <div className="our-brand-mobile-all-div">
            <div className="col-12 col-md-6 our-brand-mobile-div">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                className="img-fluid"
              />
              <div className="our-brand-mobile-div-content">
              <h3 className="mobile-view-our-brand-h3">Rithm’s Enlite</h3>
              <div className="our-brand-mobile-btn-up">
                <h4 className="our-brand-mobile-btn">Brand Identity</h4>
                <h4 className="our-brand-mobile-btn">Packaging</h4>
              </div>
              <div>
                <h4 className="our-brand-mobile-btn our-brand-mobile-btn-bottom text-center">
                  Communication Design
                </h4>
              </div>
              <p>
                For Rithm’s Enlite, a brand with sparkling mineral water and
                prebiotic drink range, we designed a thoughtful and eye-catching
                brand identity, including can design, logo design and character
                design. We created the character and the overall brand design
                around the brand name to promote the refreshing and calming
                properties of the product.
              </p>
            </div>
            </div>
             <div className="col-12 col-md-6 our-brand-mobile-div">
              <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/GIF_1_1.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              <div className="our-brand-mobile-div-content">
              <h3 className="mobile-view-our-brand-h3">Rithm’s Enlite</h3>
              <div className="our-brand-mobile-btn-up">
                <h4 className="our-brand-mobile-btn">Brand Identity</h4>
                <h4 className="our-brand-mobile-btn">Packaging</h4>
              </div>
               <div className="our-brand-mobile-btn-up">
                <h4 className="our-brand-mobile-btn">Brand Identity</h4>
                <h4 className="our-brand-mobile-btn">Packaging</h4>
              </div>
              <p>
                For Rithm’s Enlite, a brand with sparkling mineral water and
                prebiotic drink range, we designed a thoughtful and eye-catching
                brand identity, including can design, logo design and character
                design. We created the character and the overall brand design
                around the brand name to promote the refreshing and calming
                properties of the product.
              </p>
            </div>
            </div>
             <div className="col-12 col-md-6 our-brand-mobile-div">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                className="img-fluid"
              />
              <div className="our-brand-mobile-div-content">
              <h3 className="mobile-view-our-brand-h3">Rithm’s Enlite</h3>
              <div className="our-brand-mobile-btn-up">
                <h4 className="our-brand-mobile-btn">Brand Identity</h4>
                <h4 className="our-brand-mobile-btn">Packaging</h4>
              </div>
              <div>
                <h4 className="our-brand-mobile-btn our-brand-mobile-btn-bottom text-center">
                  Communication Design
                </h4>
              </div>
              <p>
                For Rithm’s Enlite, a brand with sparkling mineral water and
                prebiotic drink range, we designed a thoughtful and eye-catching
                brand identity, including can design, logo design and character
                design. We created the character and the overall brand design
                around the brand name to promote the refreshing and calming
                properties of the product.
              </p>
            </div>
            </div>
         <div className="col-12 col-md-6 our-brand-mobile-div">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                className="img-fluid"
              />
              <div className="our-brand-mobile-div-content">
              <h3 className="mobile-view-our-brand-h3">Rithm’s Enlite</h3>
              <div className="our-brand-mobile-btn-up">
                <h4 className="our-brand-mobile-btn">Brand Identity</h4>
                <h4 className="our-brand-mobile-btn">Packaging</h4>
              </div>
              <div>
                <h4 className="our-brand-mobile-btn our-brand-mobile-btn-bottom text-center">
                  Communication Design
                </h4>
              </div>
              <p>
                For Rithm’s Enlite, a brand with sparkling mineral water and
                prebiotic drink range, we designed a thoughtful and eye-catching
                brand identity, including can design, logo design and character
                design. We created the character and the overall brand design
                around the brand name to promote the refreshing and calming
                properties of the product.
              </p>
            </div>
            </div>
             </div>
          </div>
        </div>
      </section>

      {/*.....our-constant-companions...... */}

      <OurConstant />

      {/*.....our work...... */}
      <section className="our-work" ref={ourWorkRef}>
        <div className="container-fluid">
          <h2 className="text-center mb-4">Our Work</h2>
          <div className="row our-work-row">
            <div className="col-sm-12 col-md-6 our-work-div-unit">
              <div className="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
                  alt="demo"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Rithm's Enlite</div>
                  <p className="Pras">Bubbles with benefits</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 our-work-div-unit">
              <div className="imag-cont ">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/2-3.jpg"
                  alt="demo"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">NectarPure</div>
                  <p className="Pras">A Revolution in Nutritional Absorption</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 our-work-div-unit">
              <div className="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/thames-graphic-webiste-750x1050-1.jpg"
                  alt="demo"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Thames</div>
                  <p className="Pras">For the Love of Protein</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row our-work-row">
            <div className="col-sm-12 col-md-3">
              <div className="imag-cont">
                 <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/finalboba.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Thames</div>
                  <p className="Pras">For the Love of Protein</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 our-work-div-unit">
              <div className="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/nature-balance.jpg"
                  alt="demo"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Nature's Balance</div>
                  <p className="Pras">Fuel your day the green way</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 our-work-div-unit">
              <div className="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/VEIKK.jpg"
                  alt="demo"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Veikk</div>
                  <p className="Pras">Photography</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row our-work-row">
            <div className="col-sm-12 col-md-6">
              <div className="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/greenhorn-manu.jpg"
                  alt="demo"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Green Horn</div>
                  <p className="Pras">Smart Energy, Bold You</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 our-work-div-unit">
              <div className="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/kalprishi.jpg"
                  alt="demo"
                />
                <div className="overlay"></div>
                <div className="overlay-box">
                  <div className="overlay-title">Kalprishi</div>
                  <p className="Pras">Flavours that celebrate</p>
                </div>
              </div>
            </div>
          </div>

          {showMore && (
            <div>
              <div className="row our-work-row">
                <div className="col-sm-12 col-md-6">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/04/5.jpg"
                      alt="demo"
                    />
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">The Bobalist</div>
                      <p className="Pras">Pop the boba, feel the Fun</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 our-work-div-unit">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/9.jpg"
                      alt="demo"
                    />
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">iOrganic</div>
                      <p className="Pras">Ideal food for you</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 our-work-div-unit">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/3-2.jpg"
                      alt="demo"
                    />
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">Koshish</div>
                      <p className="Pras">Vasudhaiva Kutumvakam</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row our-work-row">
                <div className="col-sm-12 col-md-3">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/Logo.jpg"
                      alt="demo"
                    />
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">Deeproot</div>
                      <p className="Pras">One crunch, many flavours</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 our-work-div-unit">
                  <div className="imag-cont">
                     <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/jhfjk.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">The Bobalist</div>
                      <p className="Pras">Pop the boba, feel the Fun</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 our-work-div-unit">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/smartyums-1.jpg"
                      alt="demo"
                    />
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">Smart Yums</div>
                      <p className="Pras">Food of the Future</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row our-work-row">
                <div className="col-sm-12 col-md-6">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/08/Wlues.jpg"
                      alt="demo"
                    />
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">Wlue's</div>
                      <p className="Pras">Only for winners</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 our-work-div-unit">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2024/10/ezgif.com-speed-1.gif"
                      alt="demo"
                    />
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">iOrganic</div>
                      <p className="Pras">Ideal food for you</p>
                    </div>
                  </div>
                </div>
              </div>

               <div className="row our-work-row">
                <div className="col-sm-12 col-md-6">
                  <div className="imag-cont">
                  <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/finaljhhh.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">The Bobalist</div>
                      <p className="Pras">Pop the boba, feel the Fun</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 our-work-div-unit">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/9.jpg"
                      alt="demo"
                    />
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">iOrganic</div>
                      <p className="Pras">Ideal food for you</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 our-work-div-unit">
                  <div className="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/3-2.jpg"
                      alt="demo"
                    />
                    <div className="overlay"></div>
                    <div className="overlay-box">
                      <div className="overlay-title">Koshish</div>
                      <p className="Pras">Vasudhaiva Kutumvakam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-3 text-center">
            <button
              className="showmore-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </section>

      {/*.....points...... */}
      
<section className='point'>
<div class="container point-cont">
  <div class="row points-row">
    <div class="col-3 points-left">
      <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/350x1100.jpg'/>
    </div>
    <div class="col-12 col-md-12 col-lg-9 points-right">
    <div className='points row'>
      <div className="col-12 col-md-12 col-lg-2">
      <h2>1</h2>
      </div>
      <div className="col-12 col-md-12 col-lg-3">
      <h3>Branding pages</h3>
      </div>
      <div className='points-para col-12 col-md-12 col-lg-4'>
        <p>It is a significant challenge to create a space for your product in the market. It requires strategic thinking, creative skills, and a relentless pursuit of goals.</p>
        <p>Worried? Don’t be, for we are here.</p>
      </div>
       <div className='points-para col-12 col-md-12 col-lg-3'>
        <p>We provide end-to-end branding services.</p>
        <p>  Brand Identity Design
  Packaging Design
  Catalogue Design</p>
      </div>
    </div>

      <div className='points row Points-Comm'>
        <div className="col-12 col-md-12 col-lg-2">
      <h2>2</h2>
      </div>
       <div className="col-12 col-md-12 col-lg-3">
      <h3>Communication Strategy</h3>
      </div>
      <div className='points-para col-12 col-md-12 col-lg-4'>
        <p>Customers must be aware of your excellent product. Communication, therefore, is crucial to establishing and strengthening your brand’s presence in the market.</p>
        <p>What are you waiting for then? Connect with us today.</p>
      </div>
       <div className='points-para col-12 col-md-12 col-lg-3'>
        <p>It is a significant challenge to create a space for your product in the market. It requires strategic thinking, creative skills, and a relentless pursuit of goals.</p>
        <p>Worried? Don’t be, for we are here.</p>
      </div>
    </div>

      <div className='points row'>
        <div className="col-12 col-md-12 col-lg-2">
      <h2>3</h2>
      </div>
       <div className="col-12 col-md-12 col-lg-3">
      <h3>Web Design</h3>
      </div>
      <div className='points-para col-12 col-md-12 col-lg-4'>
        <p>It is a significant challenge to create a space for your product in the market. It requires strategic thinking, creative skills, and a relentless pursuit of goals.</p>
        <p>Worried? Don’t be, for we are here.</p>
      </div>
       <div className='points-para col-12 col-md-12 col-lg-3'>
        <p>It is a significant challenge to create a space for your product in the market. It requires strategic thinking, creative skills, and a relentless pursuit of goals.</p>
        <p>Worried? Don’t be, for we are here.</p>
      </div>
    </div>
    </div>
  </div>
</div>
</section>


      {/*.....testimonial...... */}

      <section className="testimonial">
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="custom-swiper"
          >
            <SwiperSlide>
              <div>
                <div className="custom-swiper">
                  <div className="swiper-slide">
                    <div className="row align-items-stretch testi-slide shadow-lg rounded-xl">
                      <div className="col-6 col-md-4 testi-left-content">
                        <div>
                          <div className="testi-icon">
                            <img
                              src="https://images.vexels.com/media/users/3/223246/isolated/preview/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat.png"
                              alt="Icon"
                            />
                            <p>TESTIMONIALS</p>
                          </div>
                          <h3>
                            WHAT THEY SAY
                            <br />
                            ABOUT US
                          </h3>
                          <div className="quote-mark">&#x201C;</div>
                        </div>

                        <div className="founder-name">
                          <h2 className="fs-4 fw-bold mb-0">Mr. Vineet Tiwari</h2>
                          <p className="fs-6 opacity-75">Founder, The Bobalist</p>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 testi-main-img">
                        <img
                          src="https://dndesigns.co.in/wp-content/uploads/2025/09/TDG06181.jpg"
                          alt="Testimonial Person"
                          className="img-fluid"
                        />
                      </div>

                      <div className="col-12 col-md-4 testi-right-content">
                        <p>
                          <i>
                            "Our association with DN Designs was very fruitful.
                            They handled the entire branding for us, right from
                            consultation to the final launch of the products in
                            the retail market. Customer feedback is simply
                            amazing. Great Work Team! Way to Go!"
                          </i>
                        </p>

                        <div className="rating-icons">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                          <i className="bi bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="custom-swiper">
                  <div className="swiper-slide">
                    <div className="row align-items-stretch testi-slide shadow-lg rounded-xl">
                      <div className="col-6 col-md-4 testi-left-content">
                        <div>
                          <div className="testi-icon">
                            <img
                              src="https://images.vexels.com/media/users/3/223246/isolated/preview/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat.png"
                              alt="Icon"
                            />
                            <p>TESTIMONIALS</p>
                          </div>
                          <h3>
                            WHAT THEY SAY
                            <br />
                            ABOUT US
                          </h3>
                          <div className="quote-mark">&#x201C;</div>
                        </div>

                        <div className="founder-name">
                          <h2 className="fs-4 fw-bold mb-0">Mr. Vineet Tiwari</h2>
                          <p className="fs-6 opacity-75">Founder, The Bobalist</p>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 testi-main-img">
                        <img
                          src="https://dndesigns.co.in/wp-content/uploads/2025/09/1662129811700.jpg"
                          alt="Testimonial Person"
                          className="img-fluid"
                          />
                      </div>

                      <div className="col-12 col-md-4 testi-right-content">
                        <p>
                          <i>
                            "Our association with DN Designs was very fruitful.
                            They handled the entire branding for us, right from
                            consultation to the final launch of the products in
                            the retail market. Customer feedback is simply
                            amazing. Great Work Team! Way to Go!"
                          </i>
                        </p>

                        <div className="rating-icons">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                          <i className="bi bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="custom-swiper">
                  <div className="swiper-slide">
                    <div className="row align-items-stretch testi-slide shadow-lg rounded-xl">
                      <div className="col-6 col-md-4 testi-left-content">
                        <div>
                          <div className="testi-icon">
                            <img
                              src="https://images.vexels.com/media/users/3/223246/isolated/preview/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat.png"
                              alt="Icon"
                              />
                            <p>TESTIMONIALS</p>
                          </div>
                          <h3>
                            WHAT THEY SAY
                            <br />
                            ABOUT US
                          </h3>
                          <div className="quote-mark">&#x201C;</div>
                        </div>

                        <div className="founder-name">
                          <h2 className="fs-4 fw-bold mb-0">Mr. Vineet Tiwari</h2>
                          <p className="fs-6 opacity-75">Founder, The Bobalist</p>
                        </div>
                      </div>

                      <div className="col-6 col-md-4 testi-main-img">
                        <img
                          src="https://dndesigns.co.in/wp-content/uploads/2025/09/1737743837430.jpg"
                          alt="Testimonial Person"
                          className="img-fluid"
                         />
                      </div>

                      <div className="col-12 col-md-4 testi-right-content">
                        <p>
                          <i>
                            "Our association with DN Designs was very fruitful.
                            They handled the entire branding for us, right from
                            consultation to the final launch of the products in
                            the retail market. Customer feedback is simply
                            amazing. Great Work Team! Way to Go!"
                          </i>
                        </p>

                        <div className="rating-icons">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                          <i className="bi bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Form/>
    </div>
  );
}

export default Home;
