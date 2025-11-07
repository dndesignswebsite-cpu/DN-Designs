import React from 'react'
import "../assets/css/CatalogueDesigning.css";
import Breadcrumb from "../components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HTMLFlipBook from "react-pageflip";

function CatalogueDesigning() {
  return (
    <div> 
{/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* Hero section */}

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


      {/* Our Work Portfolio */}

      <section className='our-work-portfolio'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/>
            </div>
            <div className='col'>
                 <HTMLFlipBook width={300} height={500}
                              showCover={true}>
                        <div className="demoPage1">
                          <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/>
                        </div>
                        <div className="demoPage2"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage3"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage4"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage5"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage6"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage6"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                      </HTMLFlipBook>
            </div>
          </div>


          <div className='row'>
            <div className='col'>
              <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/>
            </div>
            <div className='col'>
                 <HTMLFlipBook width={300} height={500}
                              showCover={true}>
                        <div className="demoPage1">
                          <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/>
                        </div>
                        <div className="demoPage2"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage3"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage4"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage5"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage6"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage6"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                      </HTMLFlipBook>
            </div>
          </div>


          <div className='row'>
            <div className='col'>
              <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/>
            </div>
            <div className='col'>
                 <HTMLFlipBook width={300} height={500}
                              showCover={true}>
                        <div className="demoPage1">
                          <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/>
                        </div>
                        <div className="demoPage2"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage3"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage4"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage5"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage6"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage6"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                      </HTMLFlipBook>
            </div>
          </div>


          <div className='row'>
            <div className='col'>
              <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/>
            </div>
            <div className='col'>
                 <HTMLFlipBook width={300} height={500}
                              showCover={true}>
                        <div className="demoPage1">
                          <img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/>
                        </div>
                        <div className="demoPage2"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage3"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage4"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage5"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage6"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                        <div className="demoPage6"><img src='https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg' className='img-fluid'/></div>
                      </HTMLFlipBook>
            </div>
          </div>
        </div>
      </section>



       {/*The Protagonists */}

      <section className="appr-pro">
        <div className="container">
          <div className="row">
          
            <div className="row appr-pro-row-main">

              <div className="col-12 col-md-6 col-lg-6 mt-3">
                <h2 className="appr-pro-main-head">
                How We Approach <span className="every-pr">Every Project</span>
              </h2>
              </div>


            

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Testing & Launch</h3>
                    <p>
                      Once everything is ready, it’s time to test it. For us,
                      testing is important both before and after the product launch.
                      This is to ensure that everything works smoothly at both
                      stages.
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

          
            <div className="row appr-pro-row-main">

              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className=" app-pro-div app-pro-div-white">
                  <div>
                    <h3>Discovery & Planning</h3>
                    <p>
                      The fundamentals come first - understanding the product, its
                      USP, the brand’s vision, its target audience and competitors.
                      Solid research leads to a solid foundation upon which we base
                      our strategic plan.
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className="app-pro-div app-pro-div-gray">
                  <div>
                    <h3>Design, Development & Execution</h3>
                    <p>
                      Designing and developing practical options follows. A crucial
                      aspect of this step is revision and refinement. We work on and
                      modify our designs to ensure they match your vision.
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
                      testing is important both before and after the product launch.
                      This is to ensure that everything works smoothly at both
                      stages.
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


    </div>
  )
}

export default CatalogueDesigning
