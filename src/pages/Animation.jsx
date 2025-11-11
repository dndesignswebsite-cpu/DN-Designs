import React, { useState, useRef } from "react";
import Breadcrumb from "../components/Breadcrumb";
import "../assets/css/Animation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Animation() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); 

  const modalSwiperRef = useRef(null); 

  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
  ];

  
  function handleShow(breakpoint, index) {
    setFullscreen(breakpoint);
    setActiveIndex(index); 
    setShow(true);
  }

  
  const handleModalShown = () => {
    if (modalSwiperRef.current) {
      modalSwiperRef.current.slideToLoop(activeIndex, 0); 
    }
  };

  return (
    <div>
      <section>
        <Breadcrumb />
      </section>

      {/* Hero Section */}
      <section className="animation-hero">
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
              Packaging design is similar to a movie teaser. If it doesn’t capture the audience’s interest, they will spend their time and money elsewhere. Packaging design is, therefore, crucial to make the first impactful impression on customers that will eventually lead to sales. As a creative design agency in India, we offer you just that. Stay with us as we walk you through our work portfolio and structured work process.
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


      {/* Explore Our Video Gallery */}
      <section>
        <div className="container">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            slidesPerView={3}
            loop={true}
            spaceBetween={30}
              breakpoints={{
    0: {           
      slidesPerView: 1,
    },
    768: {         
      slidesPerView: 2,
    },
    1024: {        
      slidesPerView: 3,
    },
  }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index} onClick={() => handleShow(true, index)}>
                <video
                  width="320"
                  height="240"
                  poster="https://dndesigns.co.in/wp-content/uploads/2025/07/comex.jpg"
                  muted
                  controls
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modal */}
        <div className="model-wraper">
        <Modal
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
          onEntered={handleModalShown} 
        >
          <Modal.Header closeButton>
            <Modal.Title>Model</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section>
              <div className="container">
                <Swiper
                  onSwiper={(swiper) => (modalSwiperRef.current = swiper)} 
                  navigation={true}
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  className="modalSwiper"
                  slidesPerView={1}
                  loop={true}
                  spaceBetween={30}
                >
                  {videos.map((video, index) => (
                    <SwiperSlide key={index}>
                      <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        controls
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
          </Modal.Body>
        </Modal>
        </div>
      </section>



{/* We Are The Leading Video */}
      <section className="we-are-the-leading">
      <div className="container">
        <div className="row">
            <h3>We Are The Leading Video
            Production Company For Brands</h3>
            <div className="col-12 col-md-6 we-are-the-leading-para" >
              <p>A video shouldn’t just play; it should pull its viewer in (well, figuratively speaking). It should fulfil its objective (educate, promote or entertain), communicate brand value, build trust and inspire customers to convert. As a business animation studio in Noida, we provide you just that. It doesn’t matter whether you are an emerging start-up or an established brand; we work with equal enthusiasm.</p>
            </div>
            <div className="col-12 col-md-6 we-are-the-leading-para">
              <p>We focus on your objectives and vision and pair them up with our creative and technical skills. Our studio is teeming with strategists, scriptwriters, cinematographers, editors, social media experts and production team – all of whom pool in their special talents to transform your vision into reality. Want us to create a compelling video that grabs attention, evokes emotion and enhances engagement? Just get in touch with us.</p>
            </div>
        </div>
      </div>
        
      </section>







      {/* Characteristics of Good Brand Name? */}

      <section className="characteristics-of-good">
        <div className="container">
          {/* 1st row */}
          <div className="row">
            <h2 className="text-center headg">
              Characteristics of <span className="every-pr"> Good Brand Name?</span>
            </h2>
            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and Designing is our core, and we
                    excel in it. BeDesigning is our core, and we excel in it.
                    BeDesigning is our core, and we excel in it. Bewe excel in
                    it. Be it the overall brand design, website design or
                    content design – we have expertise and experience in all. We
                    understand your vision and create a design that boosts your
                    brand value and increases ROI.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and Designing is our core, and we
                    excel in it. BeDesigning is our core, and we excel in it.
                    BeDesigning is our core, and we excel in it. Bewe excel in
                    it. Be it the overall brand design, website design or
                    content design – we have expertise and experience in all. We
                    understand your vision and create a design that boosts your
                    brand value and increases ROI.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design – we have
                    expertise and experience in all. We understand your vision
                    and create a design that boosts your brand value and
                    increases ROI.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

          </div>

          {/* 2nd row */}
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and Designing is our core, and we
                    excel in it. BeDesigning is our core, and we excel in it.
                    BeDesigning is our core, and we excel in it. Bewe excel in
                    it. Be it the overall brand design, website design or
                    content design – we have expertise and experience in all. We
                    understand your vision and create a design that boosts your
                    brand value and increases ROI.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className=" characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and Designing is our core, and we
                    excel in it. BeDesigning is our core, and we excel in it.
                    BeDesigning is our core, and we excel in it. Bewe excel in
                    it. Be it the overall brand design, website design or
                    content design – we have expertise and experience in all. We
                    understand your vision and create a design that boosts your
                    brand value and increases ROI.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-2 characteristics-of-good-main-div">
              <div className="p-3 characteristics-of-good-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="characteristics-of-good-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="characteristics-of-good-back-content">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design – we have
                    expertise and experience in all. We understand your vision
                    and create a design that boosts your brand value and
                    increases ROI.
                  </p>
                </div>
              </div>
              <img
                className="characteristics-of-good-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
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


{/* The Power of Animation */}
<section className="power-of-animation">
  <diV className="container">
    <div className="row text-center">
    <h3>The Power of Animation</h3>
    <p>Spark Interest & Build Engagement</p>
      <div className="col">
        <img src="https://dndesigns.co.in/wp-content/uploads/2019/02/11.jpg" className="img-fluid"></img>
      </div>
      <div className="col">
        <img src="https://dndesigns.co.in/wp-content/uploads/2019/02/22.jpg" className="img-fluid"></img>
      </div>
    </div>
  </diV>
</section>

    </div>
  );
}

export default Animation;
