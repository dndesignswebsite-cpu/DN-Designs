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
    </div>
  );
}

export default Animation;
