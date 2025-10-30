import React from 'react'
import "../assets/css/Branding.css"
 import HorizontalScroll from '../components/HorizontalScroll'
 import OurConstant from "../components/OurConstant"

function Branding() {

  const slidesData = [
    { title: "The Bobalist", img: 'https://dndesigns.co.in/wp-content/uploads/2025/06/14.jpg',
       para:"For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water "
     
     },
    { title: "Grin Care", img: 'https://dndesigns.co.in/wp-content/uploads/2025/06/11h.jpg',
       para:"For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water "
     
     },
    { title: "Nature's Balance", img: 'https://dndesigns.co.in/wp-content/uploads/2025/06/12.jpg',
       para:"For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water "
     
     },
    { title: "Nectarpure", img: 'https://dndesigns.co.in/wp-content/uploads/2025/06/13.jpg',
      para:"For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water For Rithm’s Enlite, a brand with sparkling mineral water "
     },
];

  return (
    <div>
      <div className="container uper-links"><a href="#">Home</a> &nbsp; &gt; &nbsp; Branding</div>
      <section className="branding-hero">
        <div class="container">
          <div class="row">
            <h1>Where Brands Are Born</h1>
            <h3>A Creative Branding Agency</h3>
            <div class="col-12 col-md-4">{/* .. */}</div>
            <div class="col-12 col-md-8">
              <div className="talk-to-us-div">
                <button className="talk-to-us">Talk to Us</button>
              </div>
              <p>
                Branding shapes the future of your business. It determines whether you will craft a legacy or simply fade into oblivion like many others. But what is branding and why is it so crucial? Want to know? Take this exciting branding journey with us – learn about branding, explore our portfolio, & go behind the scenes of our branding process. If you still have queries, check out our FAQs section.
              </p>
            </div>
          </div>
        </div>
      </section>


{/* work portfolio */}
      <section className='portfolio'>
      <div className='container'>
      <h2 className="text-center">
              Our<span className="every-pr"> Work Portfolio</span>
            </h2>
        <div className='row port-row'>
            <div className='col-12 col-md-6 px-2 '>
            <div className=' port-div'>
            <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
                className="img-fluid"
              />
              <div className='port-content'>
              <div className='potfolio-div-btns'>
              <div className='port-div-headg'><h3>Enlite</h3></div>
                <div className="our-port-btn-up">
                <button className="our-port-btn">Brand Identity</button>
                <button className="our-port-btn">Packaging</button>
              </div>
              </div>
             
              <p>Enlite’s sparkling mineral water and prebiotic drink range, meant to refresh and rejuvenate customers, required a captivating brand identity, including can and logo design, to attract a young audience. We offered them just that.
              </p>
              </div>
            </div>
            </div>
         <div className='col-12 col-md-6 px-2 '>
            <div className=' port-div'>
            <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/I-organic.jpg"
                className="img-fluid"
              />
              <div className='port-content'>
              <div className='potfolio-div-btns'>
              <div className='port-div-headg'><h3>Enlite</h3></div>
                <div className="our-port-btn-up">
                <button className="our-port-btn">Brand Identity</button>
                <button className="our-port-btn">Packaging</button>
              </div>
              </div>
             
              <p>Enlite’s sparkling mineral water and prebiotic drink range, meant to refresh and rejuvenate customers, required a captivating brand identity, including can and logo design, to attract a young audience. We offered them just that.
              </p>
              </div>
            </div>
            </div>
        </div>

        <div className='row port-row'>
            <div className='col-12 col-md-6 px-2 '>
            <div className=' port-div'>
            <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
                className="img-fluid"
              />
              <div className='port-content'>
              <div className='potfolio-div-btns'>
              <div className='port-div-headg'><h3>Enlite</h3></div>
                <div className="our-port-btn-up">
                <button className="our-port-btn">Brand Identity</button>
                <button className="our-port-btn">Packaging</button>
              </div>
              </div>
             
              <p>Enlite’s sparkling mineral water and prebiotic drink range, meant to refresh and rejuvenate customers, required a captivating brand identity, including can and logo design, to attract a young audience. We offered them just that.
              </p>
              </div>
            </div>
            </div>
         <div className='col-12 col-md-6 px-2 '>
            <div className=' port-div'>
            <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Deeproots.jpg"
                className="img-fluid"
              />
              <div className='port-content'>
              <div className='potfolio-div-btns'>
              <div className='port-div-headg'><h3>Enlite</h3></div>
                <div className="our-port-btn-up">
                <button className="our-port-btn">Brand Identity</button>
                <button className="our-port-btn">Packaging</button>
              </div>
              </div>
             
              <p>Enlite’s sparkling mineral water and prebiotic drink range, meant to refresh and rejuvenate customers, required a captivating brand identity, including can and logo design, to attract a young audience. We offered them just that.
              </p>
              </div>
            </div>
            </div>
        </div>

        <div className='row port-row'>
            <div className='col-12 col-md-6 px-2 '>
            <div className=' port-div'>
            <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Thames.jpg"
                className="img-fluid"
              />
              <div className='port-content'>
              <div className='potfolio-div-btns'>
              <div className='port-div-headg'><h3>Enlite</h3></div>
                <div className="our-port-btn-up">
                <button className="our-port-btn">Brand Identity</button>
                <button className="our-port-btn">Packaging</button>
              </div>
              </div>
             
              <p>Enlite’s sparkling mineral water and prebiotic drink range, meant to refresh and rejuvenate customers, required a captivating brand identity, including can and logo design, to attract a young audience. We offered them just that.
              </p>
              </div>
            </div>
            </div>
         <div className='col-12 col-md-6 px-2 '>
            <div className=' port-div'>
            <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Smartyums.jpg"
                className="img-fluid"
              />
              <div className='port-content'>
              <div className='potfolio-div-btns'>
              <div className='port-div-headg'><h3>Smartyums</h3></div>
                <div className="our-port-btn-up">
                <button className="our-port-btn">Brand Identity</button>
                <button className="our-port-btn">Packaging</button>
              </div>
              </div>
             
              <p>Enlite’s sparkling mineral water and prebiotic drink range, meant to refresh and rejuvenate customers, required a captivating brand identity, including can and logo design, to attract a young audience. We offered them just that.
              </p>
              </div>
            </div>
            </div>
        </div>
      </div>
      </section>


{/* branding that
      <section className='branding-that'>
      <div className='container'>
        <h2 className="text-center">
              Our<span className="every-pr"> Work Portfolio</span>
            </h2>

            
            <div className='branding-that-div'>
                <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/13.jpg'
                className='img-fluid'
                ></img>
                   <div className="brand-that-overlay">
                  <div className="our-brand-that-content">
                    <h3>Grin Care</h3>
                    <div className="brand-that-buttons">
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


            
            <div className='branding-that-div'>
                <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/13.jpg'
                className='img-fluid'
                ></img>
                   <div className="brand-that-overlay">
                  <div className="our-brand-that-content">
                    <h3>Grin Care</h3>
                    <div className="brand-that-buttons">
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

           
            <div className='branding-that-div'>
                <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/13.jpg'
                className='img-fluid'
                ></img>
                   <div className="brand-that-overlay">
                  <div className="our-brand-that-content">
                    <h3>Grin Care</h3>
                    <div className="brand-that-buttons">
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

            

            <div className='branding-that-div'>
                <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/13.jpg'
                className='img-fluid'
                ></img>
                   <div className="brand-that-overlay">
                  <div className="our-brand-that-content">
                    <h3>Grin Care</h3>
                    <div className="brand-that-buttons">
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
            
      </div>
      </section> */}

{/* branding that */}

<section className='branding-that'>
  <div className='container'>
    <h2 className="text-center">
              Our<span className="every-pr"> Work Portfolio</span>
            </h2>
  </div>

     <section className='horizontal-scroll-area'>
        <HorizontalScroll>
          {slidesData.map((slide, index) => (
            
            <div key={index} className='scroll-slide'>
                <div className='branding-that-div'>
                    <img 
                        src={slide.img}
                        className='img-fluid'
                    />
                    <div className="brand-that-overlay">
                        <div className="our-brand-that-content">
                            <h3>{slide.title}</h3>
                            <div className="brand-that-buttons">
                                <button>Brand Identity</button>
                                <button>UI/UX</button>
                                <button>Website</button>
                                <button>Website</button>
                            </div>
                            <p>{slide.para}</p>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </HorizontalScroll>
      </section>
      </section>


      {/* branding identity */}
      <section className='branding-identity'>
      <div className='container'>
      {/* first row */}
        <div className='row my-3'>
       <h2 className='text-center'><span className='every-pr'>Branding </span> is   VALUE</h2> 
          <div className='col-12 col-md-12 col-lg-4 px-3'>
            <div className='identity-div'>
              <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/2-3.jpg' className='img-fluid'/>
              <div className='identity-div-content'>
              <h3>Brand Identity</h3>
              <p>Let’s create an impactful brand identity for your business. Trust us, it’s important. It is how customers will recognise and connect with your product and distinguish it from others in the market.</p>
            </div>
             </div>
          </div>
          <div className='col-12 col-md-12 col-lg-4 px-3'>
             <div className='identity-div'>
              <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/2-3.jpg' className='img-fluid'/>
              <div className='identity-div-content'>
              <h3>Brand Identity</h3>
              <p>Let’s create an impactful brand identity for your business. Trust us, it’s important. It is how customers will recognise and connect with your product and distinguish it from others in the market.</p>
            </div>
             </div>
          </div>
          <div className='col-12 col-md-12 col-lg-4 px-3'>
             <div className='identity-div'>
              <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/2-3.jpg' className='img-fluid'/>
              <div className='identity-div-content'>
              <h3>Brand Identity</h3>
              <p>Let’s create an impactful brand identity for your business. Trust us, it’s important. It is how customers will recognise and connect with your product and distinguish it from others in the market.</p>
            </div>
             </div>
          </div>
        </div>

           {/* second row */}
           <div className='row my-4'> 
          <div className='col-12 col-md-12 col-lg-4 px-3'>
            <div className='identity-div'>
              <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/2-3.jpg' className='img-fluid'/>
              <div className='identity-div-content'>
              <h3>Brand Identity</h3>
              <p>Let’s create an impactful brand identity for your business. Trust us, it’s important. It is how customers will recognise and connect with your product and distinguish it from others in the market.</p>
            </div>
             </div>
          </div>
          <div className='col-12 col-md-12 col-lg-4 px-3'>
             <div className='identity-div'>
              <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/2-3.jpg' className='img-fluid'/>
              <div className='identity-div-content'>
              <h3>Brand Identity</h3>
              <p>Let’s create an impactful brand identity for your business. Trust us, it’s important. It is how customers will recognise and connect with your product and distinguish it from others in the market.</p>
            </div>
             </div>
          </div>
          <div className='col-12 col-md-12 col-lg-4 px-3'>
             <div className='identity-div'>
              <img src='https://dndesigns.co.in/wp-content/uploads/2025/06/2-3.jpg' className='img-fluid'/>
              <div className='identity-div-content'>
              <h3>Brand Identity</h3>
              <p>Let’s create an impactful brand identity for your business. Trust us, it’s important. It is how customers will recognise and connect with your product and distinguish it from others in the market.</p>
            </div>
             </div>
          </div>
        </div>
      </div>
      </section>
      
{/* our constant */}
                 <OurConstant/>


                 {/* marque */}
                <section className='marque-sec'>
              <marquee className="noun-mar" direction="left" scrollamount="12"> A Noun in Your Life, A Verb in Ours
               </marquee>
                </section>


                {/* Creating Your Brand */}
                 <section className="creating-your-brand">
        <div class="container sticky-con">
          <h2 className="text-center our-brand-heading-a">Creating Your Brand Story,
<span className='every-pr'><br/>Your Way</span></h2>
          <ul id="cards-create">
            <li class="card-create" id="card1-create">
              <div class="card-body-create row">
                   <div className='col-2 create-number'>01</div>
                   <div className='col-10'>
                    <h2>Brand Understanding</h2>
                    <p>If anything has to stand the test of time, it needs to begin with a firm footing. In branding, this beginning is understanding the product/business. We sit down with you for a deep discussion to understand your product or service as well as your vision and mission. This helps us make a good start and prepares us for an exciting journey ahead.</p>
                   </div>
                  </div>
            </li>

              <li class="card-create" id="card2-create">
              <div class="card-body-create">
                   <div class="card-body-create row">
                   <div className='col-2 create-number'>01</div>
                   <div className='col-10'>
                    <h2>Brand Understanding</h2>
                    <p>If anything has to stand the test of time, it needs to begin with a firm footing. In branding, this beginning is understanding the product/business. We sit down with you for a deep discussion to understand your product or service as well as your vision and mission. This helps us make a good start and prepares us for an exciting journey ahead.</p>
                   </div>
                  </div>
                  </div>
            </li>

              <li class="card-create" id="card3-create">
              <div class="card-body-create">
                   <div class="card-body-create row">
                   <div className='col-2 create-number'>01</div>
                   <div className='col-10'>
                    <h2>Brand Understanding</h2>
                    <p>If anything has to stand the test of time, it needs to begin with a firm footing. In branding, this beginning is understanding the product/business. We sit down with you for a deep discussion to understand your product or service as well as your vision and mission. This helps us make a good start and prepares us for an exciting journey ahead.</p>
                   </div>
                  </div>
                  </div>
            </li>

             <li class="card-create" id="card4-create">
              <div class="card-body-create">
                    <div class="card-body-create row">
                   <div className='col-2 create-number'>01</div>
                   <div className='col-10'>
                    <h2>Brand Understanding</h2>
                    <p>If anything has to stand the test of time, it needs to begin with a firm footing. In branding, this beginning is understanding the product/business. We sit down with you for a deep discussion to understand your product or service as well as your vision and mission. This helps us make a good start and prepares us for an exciting journey ahead.</p>
                   </div>
                  </div>
                  </div>
            </li>


              <li class="card-create" id="card5-create">
              <div class="card-body-create">
                  <div class="card-body-create row">
                   <div className='col-2 create-number'>01</div>
                   <div className='col-10'>
                    <h2>Brand Understanding</h2>
                    <p>If anything has to stand the test of time, it needs to begin with a firm footing. In branding, this beginning is understanding the product/business. We sit down with you for a deep discussion to understand your product or service as well as your vision and mission. This helps us make a good start and prepares us for an exciting journey ahead.</p>
                   </div>
                  </div>
                  </div>
            </li>  
            </ul>
            </div>
            </section>
<OurConstant/>
    </div>
  )
}

export default Branding
