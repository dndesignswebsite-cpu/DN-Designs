import React, { useState, useRef } from "react";
import "../assets/css/CatalogueDesigning.css";
import Breadcrumb from "../components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HTMLFlipBook from "react-pageflip";
import Faqs from '../components/Faqs';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Form from '../components/Form';

function CatalogueDesigning() {

   const leftFaqs = [
    {
      question: "How can I contact your team?",
      answer: "You can use the contact form or call us directly at +91-9999999999.",
    },
    {
      question: "Do you offer remote consultation?",
      answer: "Yes! We do virtual meetings over Zoom, Google Meet, or Microsoft Teams.",
    },
       {
      question: "Do you offer remote consultation?",
      answer: "Yes! We do virtual meetings over Zoom, Google Meet, or Microsoft Teams.",
    },
  ];

  const rightFaqs = [
    {
      question: "Where is your office located?",
      answer: "We are based in Noida, India, but work with clients worldwide.",
    },
    {
      question: "What is your response time?",
      answer: "We usually reply within 24 hours of receiving your query.",
    },
  ];


  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/*Hero section*/}

      <section className="catalogue-designing-hero">
        <div className="container">
          <div className="row">
            <h1>Strategic Packaging Design Agency</h1>
            <h3>Get Noticed, Build Connection and Drive Sales</h3>
            <div className="col-12 col-md-4">{/* .. */}</div>
            <div className="col-12 col-md-8">
              <div className="talk-to-us-div">
                <button className="talk-to-us talk-to-us-Laptop">
                  Talk to Us
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="18px"
                    className="fontAwesomeIcon-right-arrow"
                  />
                </button>
              </div>
              <p>
                Packaging design is similar to a movie teaser. If it doesn’t
                capture the audience’s interest, they will spend their time and
                money elsewhere. Packaging design is, therefore, crucial to make
                the first impactful impression on customers that will eventually
                lead to sales. As a creative design agency in India, we offer
                you just that. Stay with us as we walk you through our work
                portfolio and structured work process.
              </p>
              <button className="talk-to-us talk-to-us-mobile">
                Talk to Us
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="18px"
                  className="fontAwesomeIcon-right-arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Portfolio */}

      <section className="our-work-portfolio">
        <div className="our-work-portfolio-custom-container">

        <h2 className="text-center">Our <span className="every-pr">Work Portfolio</span></h2>

          <div className="our-work-portfolio-custom-row">
            <div className="our-work-portfolio-custom-col">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg"
                className="img-fluid"
              />
            </div>
            <div className="our-work-portfolio-custom-col">
               {/* <HTMLFlipBook showCover={true}>
                <div className="demoPage1">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="demoPage2">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="demoPage3">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="demoPage4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="demoPage5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="demoPage6">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="demoPage6">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg"
                    className="img-fluid"
                  />
                </div>
              </HTMLFlipBook>  */}
               <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/01/1.jpg"
                    className="img-fluid"
                  />
            </div>
          </div>
        </div>
      </section>

      {/*The Protagonists */}

      <section className="appr-pro">
        <div className="container">

          <div className="">
            <div className="row appr-pro-row-main">
              <div className="col-12 col-md-12 col-lg-6 mt-3">
                <h2 className="appr-pro-main-head">
                  The Protagonists of
                  <span className="every-pr"> Catalogue Design</span>
                </h2>
              </div>

             <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Discovery & Planning</h3>
                  <p>
                    The fundamentals come first - understanding the product, its
                    USP, the brand’s vision, its target audience and
                    competitors. Solid research leads to a solid foundation upon
                    which we base our strategic plan.
                  </p>
                </div>
              </div>
            </div>

              <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Discovery & Planning</h3>
                  <p>
                    The fundamentals come first - understanding the product, its
                    USP, the brand’s vision, its target audience and
                    competitors. Solid research leads to a solid foundation upon
                    which we base our strategic plan.
                  </p>
                </div>
              </div>
            </div>

            </div>
          </div>

          <div className="row appr-pro-row-main">
            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Discovery & Planning</h3>
                  <p>
                    The fundamentals come first - understanding the product, its
                    USP, the brand’s vision, its target audience and
                    competitors. Solid research leads to a solid foundation upon
                    which we base our strategic plan.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className="app-pro-div app-pro-div-gray">
                <div>
                  <h3>Design, Development & Execution</h3>
                  <p>
                    Designing and developing practical options follows. A
                    crucial aspect of this step is revision and refinement. We
                    work on and modify our designs to ensure they match your
                    vision.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-white">
                <div>
                  <h3>Testing & Launch</h3>
                  <p>
                    Once everything is ready, it’s time to test it. For us,
                    testing is important both before and after the product
                    launch. This is to ensure that everything works smoothly at
                    both stages.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-3">
              <div className=" app-pro-div app-pro-div-gray">
                <div>
                  <h3>Ongoing Support</h3>
                  <p>
                    We provide our clients with ongoing support even after the
                    project is over. If you face problems post-completion of the
                    work, we are there to resolve them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Catalogues */}

      <section className="e-catalogues">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 e-catalogues-main-col">
              <div className="e-catalogues-left">
                <h4>E-Catalogues</h4>
                <h3>
                  Make Your Catalogues More Accessible, Interactive And
                  Shareable
                </h3>
                <p>
                  Conveniently share and update information about your company,
                  products and services through online brochures and catalogues.
                  These are downloadable and enable customers to place an order
                  right there.
                </p>
                <div className="e-catalogues-left-btn-div">
                  <button>Get in Touch
                   <FontAwesomeIcon
                    icon={faArrowRight}
                    size="18px"
                    className="fontAwesomeIcon-right-arrow"
                  />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12 col-xl-6 e-catalogues-main-col">
              <div className="e-catalogues-right">
                <div className="row e-catalogues-right-row">
                  <div className="col-12 col-md-12 col-lg-6">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/02/1.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 e-cata-right-img">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/02/2.jpg"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="row e-catalogues-right-row e-catalogues-right-row-d">
                  <div className="col-12 col-md-12 col-lg-6">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/02/3.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 e-cata-right-img">
                    <img
                      src="https://dndesigns.co.in/wp-content/uploads/2025/02/4.jpg"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Catalogue Designing - Our Process desktop view */}

      <section className="creating-your-brand">
        <div class="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            Creating Your Brand Story,
            <span className="every-pr">
              <br />
              Your Way
            </span>
          </h2>
          <ul id="cards-create">
            <li class="card-create" id="card1-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">01</div>
                <div className="col-10">
                  <h2>Brand Understanding</h2>
                  <p>
                    If anything has to stand the test of time, it needs to begin
                    with a firm footing. In branding, this beginning is
                    understanding the product/business. We sit down with you for
                    a deep discussion to understand your product or service as
                    well as your vision and mission. This helps us make a good
                    start and prepares us for an exciting journey ahead.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card2-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">02</div>
                <div className="col-10">
                  <h2>Competitor Analysis</h2>
                  <p>
                    You are not alone in the market; there are several other
                    products in the same category out there trying to build
                    their presence. How do you craft your own little corner?
                    Analysing competition is crucial, and this is what we, as a
                    brand design company, do next. We conduct a thorough
                    research of your competitors and understand your current
                    position in the market to ensure that we have enough
                    knowledge and data to take a step forward, creating your
                    branding strategy.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card3-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">03</div>
                <div className="col-10">
                  <h2>Planning Your Brand</h2>
                  <p>
                    It’s now time to create your brand strategy. Every aspect of
                    branding is carefully thought out and discussed with you -
                    be it your brand personality, story, message, values, or
                    even communication and website design. As a creative
                    branding agency, we decide on these elements based on how we
                    want the audience to perceive your brand.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card4-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">04</div>
                <div className="col-10">
                  <h2>Implementing the Strategy</h2>
                  <p>
                    Let’s turn words and ideas into action. We now sit down to
                    do the actual work - naming your brand, designing your logo,
                    creating your packaging design, crafting a tagline,
                    composing your message, and much more. In addition, we
                    design and develop your website too.
                  </p>
                </div>
              </div>
            </li>

            <li class="card-create" id="card5-create">
              <div class="card-body-create row">
                <div className="col-2 create-number text-center">05</div>
                <div className="col-10">
                  <h2>Feedback & Launch</h2>
                  <p>
                    The final stage in our branding journey, this is where we
                    seek a review of our work. Based on your feedback, we make
                    changes, and reseek your feedback. Once we receive a green
                    light from you, we go ahead and launch your brand.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Creative Catalogue Designing - Our Process mobile view */}

      <section className="creating-your-brand-mobile">
        <div className="conatiner">
          <h2 className="text-center our-brand-heading-a-mobile">
            Creating Your Brand Story,
            <span className="every-pr"> Your Way</span>
          </h2>
          <div className="row creating-brand-mobile-row">
            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">01</h3>
                <div className="card-body-create-mobile">
                  <h2>Brand Understanding</h2>
                  <p>
                    If anything has to stand the test of time, it needs to begin
                    with a firm footing. In branding, this beginning is
                    understanding the product/business. We sit down with you for
                    a deep discussion to understand your product or service as
                    well as your vision and mission. This helps us make a good
                    start and prepares us for an exciting journey ahead.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">02</h3>
                <div className="card-body-create-mobile">
                  <h2>Competitor Analysis</h2>
                  <p>
                    You are not alone in the market; there are several other
                    products in the same category out there trying to build
                    their presence. How do you craft your own little corner?
                    Analysing competition is crucial, and this is what we, as a
                    brand design company, do next. We conduct a thorough
                    research of your competitors and understand your current
                    position in the market to ensure that we have enough
                    knowledge and data to take a step forward, creating your
                    branding strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">03</h3>
                <div className="card-body-create-mobile">
                  <h2>Planning Your Brand</h2>
                  <p>
                    It’s now time to create your brand strategy. Every aspect of
                    branding is carefully thought out and discussed with you -
                    be it your brand personality, story, message, values, or
                    even communication and website design. As a creative
                    branding agency, we decide on these elements based on how we
                    want the audience to perceive your brand.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">04</h3>
                <div className="card-body-create-mobile">
                  <h2>Implementing the Strategy</h2>
                  <p>
                    Let’s turn words and ideas into action. We now sit down to
                    do the actual work - naming your brand, designing your logo,
                    creating your packaging design, crafting a tagline,
                    composing your message, and much more. In addition, we
                    design and develop your website too.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="creating-your-brand-mobile-box">
                <h3 className="create-number-mobile">05</h3>
                <div className="card-body-create-mobile">
                  <h2>Feedback & Launch</h2>
                  <p>
                    The final stage in our branding journey, this is where we
                    seek a review of our work. Based on your feedback, we make
                    changes, and reseek your feedback. Once we receive a green
                    light from you, we go ahead and launch your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Brochure Design But With A Twist */}

      <section className="creative-brochure">
      <div className="container creative-brochure-div">
       <h2>
            Creative Brochure Design But With A Twist
          </h2>
      
        <Swiper
          slidesPerView={1.2} 
          spaceBetween={30}
           loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
          <div className="swipper-slide-div-brochure">
          <img src="https://dndesigns.co.in/wp-content/uploads/2025/02/Bi-fold-1-scaled.jpg" className="img-fluid"/>
          </div>
          </SwiperSlide>
           <SwiperSlide>
          <div className="swipper-slide-div-brochure">
          <img src="https://dndesigns.co.in/wp-content/uploads/2025/02/Bi-fold-1-scaled.jpg" className="img-fluid"/>
          </div>
          </SwiperSlide>
           <SwiperSlide>
          <div className="swipper-slide-div-brochure">
          <img src="https://dndesigns.co.in/wp-content/uploads/2025/02/Bi-fold-1-scaled.jpg" className="img-fluid"/>
          </div>
          </SwiperSlide>
           <SwiperSlide>
          <div className="swipper-slide-div-brochure">
          <img src="https://dndesigns.co.in/wp-content/uploads/2025/02/Bi-fold-1-scaled.jpg" className="img-fluid"/>
          </div>
          </SwiperSlide>
           <SwiperSlide>
          <div className="swipper-slide-div-brochure">
          <img src="https://dndesigns.co.in/wp-content/uploads/2025/02/Bi-fold-1-scaled.jpg" className="img-fluid"/>
          </div>
          </SwiperSlide>
        </Swiper>
        </div>
      </section>

      
      {/* faqs */}
      
            <section className="faqs">
            <div className="container">
              <div className="row text-center">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
                  <Faqs
                    title="CONTACT FAQs"
                    leftFaqs={leftFaqs}
                    rightFaqs={rightFaqs}
                  />
            </section>


{/* form */}
<Form/>



    </div>
  );
}

export default CatalogueDesigning;
