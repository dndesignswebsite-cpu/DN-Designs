import React, { useState } from "react";
import "../assets/css/Home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/*.....hero...... */}
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

      {/*.....our brands...... */}

      <section className="our-brand">
        <div class="container">
          <h2 className="text-center our-brand-heading">Our Brand Journals</h2>
          <ul id="cards">
            <li class="card" id="card1">
              <div class="card-body">
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
            <li class="card" id="card2">
              <div class="card-body">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
                  alt="Image for Card 2"
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
            <li class="card" id="card3">
              <div class="card-body">
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
            <li class="card" id="card4">
              <div class="card-body">
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
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                className="img-fluid"
              />
              <h2 className="mobile-view-our-brand-h3">Rithm’s Enlite</h2>
              <div className="our-brand-mobile-btn-up">
                <button className="our-brand-mobile-btn">Brand Identity</button>
                <button className="our-brand-mobile-btn">Packaging</button>
              </div>
              <div>
                <button className="our-brand-mobile-btn our-brand-mobile-btn-bottom">
                  Communication Design
                </button>
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
            <div class="col-12 col-md-6">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                className="img-fluid"
              />
              <h2 className="mobile-view-our-brand-h3">Rithm’s Enlite</h2>
              <div className="our-brand-mobile-btn-up">
                <button className="our-brand-mobile-btn">Brand Identity</button>
                <button className="our-brand-mobile-btn">Packaging</button>
              </div>
              <div>
                <button className="our-brand-mobile-btn our-brand-mobile-btn-bottom">
                  Communication Design
                </button>
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
            <div class="col-12 col-md-6">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                className="img-fluid"
              />
              <h2 className="mobile-view-our-brand-h3">Rithm’s Enlite</h2>
              <div className="our-brand-mobile-btn-up">
                <button className="our-brand-mobile-btn">Brand Identity</button>
                <button className="our-brand-mobile-btn">Packaging</button>
              </div>
              <div>
                <button className="our-brand-mobile-btn our-brand-mobile-btn-bottom">
                  Communication Design
                </button>
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
            <div class="col-12 col-md-6">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/1.jpg"
                className="img-fluid"
              />
              <h2 className="mobile-view-our-brand-h3">Rithm’s Enlite</h2>
              <div className="our-brand-mobile-btn-up">
                <button className="our-brand-mobile-btn">Brand Identity</button>
                <button className="our-brand-mobile-btn">Packaging</button>
              </div>
              <div>
                <button className="our-brand-mobile-btn our-brand-mobile-btn-bottom">
                  Communication Design
                </button>
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
      </section>

      {/*.....our-constant-companions...... */}

      <section className="our-constant-companions">
        <div class="container text-center">
          <div class="row align-items-start">
            <h2 className="our-brand-heading">Our Constant Companions</h2>

            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/holidayinn_logo.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2024/08/audi.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/PB_Business.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/iOrganic-Logo-NEW-web.png"
                className="img-fluid"
              ></img>
            </div>
          </div>

          <div class="row align-items-start">
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/07/wlues-1.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/iOrganic-Logo-NEW-web-1.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/enlite.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/nectarpure.png"
                className="img-fluid"
              ></img>
            </div>
          </div>

          <div class="row align-items-start">
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2023/10/smartyum.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Thames.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/veikk.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/enliiv.png"
                className="img-fluid"
              ></img>
            </div>
          </div>

          <div class="row align-items-start">
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/bobalist.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Nature-balance.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Untitled-1.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/07/qualiteq.png"
                className="img-fluid"
              ></img>
            </div>
          </div>

          <div class="row align-items-start">
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/07/rungta.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/07/floris.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/07/david.png"
                className="img-fluid"
              ></img>
            </div>
            <div class="col-6 col-md-3 companies">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/07/david.png"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </section>

      {/*.....our work...... */}
      <section className="our-work">
        <div className="container-fluid">
          <h2 className="text-center mb-4">Our Work</h2>
          <div className="row mt-4">
            <div className="col-sm-12 col-md-6">
              <div class="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg"
                  alt="demo"
                />
                <div class="overlay"></div>
                <div class="overlay-box">
                  <div class="overlay-title">Rithm's Enlite</div>
                  <p class="Pras">Bubbles with benefits</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div class="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/2-3.jpg"
                  alt="demo"
                />
                <div class="overlay"></div>
                <div class="overlay-box">
                  <div class="overlay-title">NectarPure</div>
                  <p class="Pras">A Revolution in Nutritional Absorption</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div class="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/thames-graphic-webiste-750x1050-1.jpg"
                  alt="demo"
                />
                <div class="overlay"></div>
                <div class="overlay-box">
                  <div class="overlay-title">Thames</div>
                  <p class="Pras">For the Love of Protein</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm-12 col-md-3">
              <div class="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/thames-graphic-webiste-750x1050-1.jpg"
                  alt="demo"
                />
                <div class="overlay"></div>
                <div class="overlay-box">
                  <div class="overlay-title">Thames</div>
                  <p class="Pras">For the Love of Protein</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div class="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/nature-balance.jpg"
                  alt="demo"
                />
                <div class="overlay"></div>
                <div class="overlay-box">
                  <div class="overlay-title">Nature's Balance</div>
                  <p class="Pras">Fuel your day the green way</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div class="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2019/02/VEIKK.jpg"
                  alt="demo"
                />
                <div class="overlay"></div>
                <div class="overlay-box">
                  <div class="overlay-title">Veikk</div>
                  <p class="Pras">Photography</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm-12 col-md-6">
              <div class="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/07/greenhorn-manu.jpg"
                  alt="demo"
                />
                <div class="overlay"></div>
                <div class="overlay-box">
                  <div class="overlay-title">Green Horn</div>
                  <p class="Pras">Smart Energy, Bold You</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div class="imag-cont">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/kalprishi.jpg"
                  alt="demo"
                />
                <div class="overlay"></div>
                <div class="overlay-box">
                  <div class="overlay-title">Kalprishi</div>
                  <p class="Pras">Flavours that celebrate</p>
                </div>
              </div>
            </div>
          </div>

          {showMore && (
            <div>
              <div className="row mt-4">
                <div className="col-sm-12 col-md-6">
                  <div class="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/04/5.jpg"
                      alt="demo"
                    />
                    <div class="overlay"></div>
                    <div class="overlay-box">
                      <div class="overlay-title">The Bobalist</div>
                      <p class="Pras">Pop the boba, feel the Fun</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3">
                  <div class="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/9.jpg"
                      alt="demo"
                    />
                    <div class="overlay"></div>
                    <div class="overlay-box">
                      <div class="overlay-title">iOrganic</div>
                      <p class="Pras">Ideal food for you</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3">
                  <div class="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/3-2.jpg"
                      alt="demo"
                    />
                    <div class="overlay"></div>
                    <div class="overlay-box">
                      <div class="overlay-title">Koshish</div>
                      <p class="Pras">Vasudhaiva Kutumvakam</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-sm-12 col-md-3">
                  <div class="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/Logo.jpg"
                      alt="demo"
                    />
                    <div class="overlay"></div>
                    <div class="overlay-box">
                      <div class="overlay-title">Deeproot</div>
                      <p class="Pras">One crunch, many flavours</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div class="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/04/5.jpg"
                      alt="demo"
                    />
                    <div class="overlay"></div>
                    <div class="overlay-box">
                      <div class="overlay-title">The Bobalist</div>
                      <p class="Pras">Pop the boba, feel the Fun</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3">
                  <div class="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2019/02/smartyums-1.jpg"
                      alt="demo"
                    />
                    <div class="overlay"></div>
                    <div class="overlay-box">
                      <div class="overlay-title">Smart Yums</div>
                      <p class="Pras">Food of the Future</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-sm-12 col-md-6">
                  <div class="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/08/Wlues.jpg"
                      alt="demo"
                    />
                    <div class="overlay"></div>
                    <div class="overlay-box">
                      <div class="overlay-title">Wlue's</div>
                      <p class="Pras">Only for winners</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div class="imag-cont">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2024/10/ezgif.com-speed-1.gif"
                      alt="demo"
                    />
                    <div class="overlay"></div>
                    <div class="overlay-box">
                      <div class="overlay-title">iOrganic</div>
                      <p class="Pras">Ideal food for you</p>
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
      {/* 
<section className='point'>
<div class="container">
  <div class="row g-0 align-items-center points-row">
    <div class="col-4 points-left">
      <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/350x1100.jpg' className='img-fluid'/>
    </div>
    <div class="col-8 points-right">
    <div className='points'>
      <h2>1</h2>
      <h3>Branding</h3>
      <div className='points-para'>
        <p>It is a significant challenge to create a space for your product in the market. It requires strategic thinking, creative skills, and a relentless pursuit of goals.</p>
        <p>Worried? Don’t be, for we are here.</p>
      </div>
       <div className='points-para'>
        <p>We provide end-to-end branding services.</p>
        <p>  Brand Identity Design
  Packaging Design
  Catalogue Design</p>
      </div>
    </div>

      <div className='points'>
      <h2>2</h2>
      <h3>Communication Strategy</h3>
      <div className='points-para'>
        <p>Customers must be aware of your excellent product. Communication, therefore, is crucial to establishing and strengthening your brand’s presence in the market.</p>
        <p>What are you waiting for then? Connect with us today.</p>
      </div>
       <div className='points-para'>
        <p>It is a significant challenge to create a space for your product in the market. It requires strategic thinking, creative skills, and a relentless pursuit of goals.</p>
        <p>Worried? Don’t be, for we are here.</p>
      </div>
    </div>

      <div className='points'>
      <h2>3</h2>
      <h3>Web Design</h3>
      <div className='points-para'>
        <p>It is a significant challenge to create a space for your product in the market. It requires strategic thinking, creative skills, and a relentless pursuit of goals.</p>
        <p>Worried? Don’t be, for we are here.</p>
      </div>
       <div className='points-para'>
        <p>It is a significant challenge to create a space for your product in the market. It requires strategic thinking, creative skills, and a relentless pursuit of goals.</p>
        <p>Worried? Don’t be, for we are here.</p>
      </div>
    </div>
    </div>
  </div>
</div>
</section>
 */}

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
                <div class="custom-swiper">
                  <div class="swiper-slide">
                    <div class="row align-items-stretch testi-slide shadow-lg rounded-xl">
                      <div class="col-6 col-md-4 testi-left-content">
                        <div>
                          <div class="testi-icon">
                            <img
                              src="https://images.vexels.com/media/users/3/223246/isolated/preview/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat.png"
                              alt="Icon"
                              onerror="this.onerror=null; this.src='https://placehold.co/24x24/CA2734/ffffff?text=T';"
                            />
                            <p>TESTIMONIALS</p>
                          </div>
                          <h3>
                            WHAT THEY SAY
                            <br />
                            ABOUT US
                          </h3>
                          <div class="quote-mark">&#x201C;</div>
                        </div>

                        <div className="founder-name">
                          <h2 class="fs-4 fw-bold mb-0">Mr. Vineet Tiwari</h2>
                          <p class="fs-6 opacity-75">Founder, The Bobalist</p>
                        </div>
                      </div>

                      <div class="col-6 col-md-4 testi-main-img">
                        <img
                          src="https://dndesigns.co.in/wp-content/uploads/2025/09/TDG06181.jpg"
                          alt="Testimonial Person"
                          class="img-fluid"
                          onerror="this.onerror=null; this.src='https://placehold.co/800x600/6b7280/ffffff?text=User+Photo';"
                        />
                      </div>

                      <div class="col-12 col-md-4 testi-right-content">
                        <p>
                          <i>
                            "Our association with DN Designs was very fruitful.
                            They handled the entire branding for us, right from
                            consultation to the final launch of the products in
                            the retail market. Customer feedback is simply
                            amazing. Great Work Team! Way to Go!"
                          </i>
                        </p>

                        <div class="rating-icons">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                          <i class="bi bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
               <div>
                <div class="custom-swiper">
                  <div class="swiper-slide">
                    <div class="row align-items-stretch testi-slide shadow-lg rounded-xl">
                      <div class="col-6 col-md-4 testi-left-content">
                        <div>
                          <div class="testi-icon">
                            <img
                              src="https://images.vexels.com/media/users/3/223246/isolated/preview/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat.png"
                              alt="Icon"
                              onerror="this.onerror=null; this.src='https://placehold.co/24x24/CA2734/ffffff?text=T';"
                            />
                            <p>TESTIMONIALS</p>
                          </div>
                          <h3>
                            WHAT THEY SAY
                            <br />
                            ABOUT US
                          </h3>
                          <div class="quote-mark">&#x201C;</div>
                        </div>

                        <div className="founder-name">
                          <h2 class="fs-4 fw-bold mb-0">Mr. Vineet Tiwari</h2>
                          <p class="fs-6 opacity-75">Founder, The Bobalist</p>
                        </div>
                      </div>

                      <div class="col-6 col-md-4 testi-main-img">
                        <img
                          src="https://dndesigns.co.in/wp-content/uploads/2025/09/1662129811700.jpg"
                          alt="Testimonial Person"
                          class="img-fluid"
                          onerror="this.onerror=null; this.src='https://placehold.co/800x600/6b7280/ffffff?text=User+Photo';"
                        />
                      </div>

                      <div class="col-12 col-md-4 testi-right-content">
                        <p>
                          <i>
                            "Our association with DN Designs was very fruitful.
                            They handled the entire branding for us, right from
                            consultation to the final launch of the products in
                            the retail market. Customer feedback is simply
                            amazing. Great Work Team! Way to Go!"
                          </i>
                        </p>

                        <div class="rating-icons">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                          <i class="bi bi-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
               <div>
                <div class="custom-swiper">
                  <div class="swiper-slide">
                    <div class="row align-items-stretch testi-slide shadow-lg rounded-xl">
                      <div class="col-6 col-md-4 testi-left-content">
                        <div>
                          <div class="testi-icon">
                            <img
                              src="https://images.vexels.com/media/users/3/223246/isolated/preview/a5e1b4a04c71beac7b6d7537dd007b35-like-icon-flat.png"
                              alt="Icon"
                              onerror="this.onerror=null; this.src='https://placehold.co/24x24/CA2734/ffffff?text=T';"
                            />
                            <p>TESTIMONIALS</p>
                          </div>
                          <h3>
                            WHAT THEY SAY
                            <br />
                            ABOUT US
                          </h3>
                          <div class="quote-mark">&#x201C;</div>
                        </div>

                        <div className="founder-name">
                          <h2 class="fs-4 fw-bold mb-0">Mr. Vineet Tiwari</h2>
                          <p class="fs-6 opacity-75">Founder, The Bobalist</p>
                        </div>
                      </div>

                      <div class="col-6 col-md-4 testi-main-img">
                        <img
                          src="https://dndesigns.co.in/wp-content/uploads/2025/09/1737743837430.jpg"
                          alt="Testimonial Person"
                          class="img-fluid"
                          onerror="this.onerror=null; this.src='https://placehold.co/800x600/6b7280/ffffff?text=User+Photo';"
                        />
                      </div>

                      <div class="col-12 col-md-4 testi-right-content">
                        <p>
                          <i>
                            "Our association with DN Designs was very fruitful.
                            They handled the entire branding for us, right from
                            consultation to the final launch of the products in
                            the retail market. Customer feedback is simply
                            amazing. Great Work Team! Way to Go!"
                          </i>
                        </p>

                        <div class="rating-icons">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                          <i class="bi bi-star"></i>
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
    </div>
  );
}

export default Home;
