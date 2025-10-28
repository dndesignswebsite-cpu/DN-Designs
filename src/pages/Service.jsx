import React, { useState } from "react";
import "../assets/css/Service.css";

function Service() {
  const [activeTab, setActiveTab] = useState('Branding');
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const sheet_one = [
    {
      title: "Section 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Section 2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Section 3",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];


    const sheet_two = [
    {
      title: "Section 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Section 2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Section 3",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  
  return (
    <div>
      <section className="service-hero">
        <div class="container">
          <div class="row">
            <h1>Services</h1>
            <div class="col-12 col-md-4">{/* .. */}</div>
            <div class="col-12 col-md-8">
              <div className="talk-to-us-div">
                <button className="talk-to-us">Talk to Us</button>
              </div>
              <p>
                Successful brands are not made in a day. They are a result of
                consistent hard work, perseverance and unwavering passion.
                Long-term vision, strategy and creativity are pivotal too. Lots
                of work and lots of dedication are required. This is why you
                need the services of a branding & design agency like us. Let’s
                walk you through our services and inform you of our capabilities
                and approach. If there are questions in your mind, check out our
                FAQs section. Alternatively, reach out to us and we will
                promptly answer them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* our services */}

      <section className="our-service">
        <div className="container">
          <div className="row">
            <h2>
              <span className="our">Our</span> Services
            </h2>
            <div className="col-12 col-md-4 service-div">
              <div class="service-card">
                <div className="front">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/brand-identity.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>01</h3>
                  <p>Brand Identity</p>
                </div>

                <div className="back">
                  <div className="back-up">
                    <h3>01</h3>
                    <p>Brand Identity</p>
                    <div className="hr"></div>
                  </div>

                  <div className="back-down">
                    <ul>
                      <li>
                        <a
                          href="https://dndesigns.co.in/branding/"
                          class="page-linking"
                        >
                          Branding
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/logo-designing/"
                          class="page-linking"
                        >
                          Logo Designing
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/brand-name-suggestion/"
                          class="page-linking"
                        >
                          Brand Name Suggestion
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/packaging-design/"
                          class="page-linking"
                        >
                          Packaging Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/catalogue-designing/"
                          class="page-linking"
                        >
                          Catalogue Designing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        <div className="col-12 col-md-4 service-div">
              <div class="service-card">
                <div className="front">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/brand-identity.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>01</h3>
                  <p>Brand Identity</p>
                </div>

                <div className="back">
                  <div className="back-up">
                    <h3>01</h3>
                    <p>Brand Identity</p>
                    <div className="hr"></div>
                  </div>

                  <div className="back-down">
                    <ul>
                      <li>
                        <a
                          href="https://dndesigns.co.in/branding/"
                          class="page-linking"
                        >
                          Branding
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/logo-designing/"
                          class="page-linking"
                        >
                          Logo Designing
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/brand-name-suggestion/"
                          class="page-linking"
                        >
                          Brand Name Suggestion
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/packaging-design/"
                          class="page-linking"
                        >
                          Packaging Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/catalogue-designing/"
                          class="page-linking"
                        >
                          Catalogue Designing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-4 service-div">
              <div class="service-card">
                <div className="front">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2019/02/brand-identity.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>01</h3>
                  <p>Brand Identity</p>
                </div>

                <div className="back">
                  <div className="back-up">
                    <h3>01</h3>
                    <p>Brand Identity</p>
                    <div className="hr"></div>
                  </div>

                  <div className="back-down">
                    <ul>
                      <li>
                        <a
                          href="https://dndesigns.co.in/branding/"
                          class="page-linking"
                        >
                          Branding
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/logo-designing/"
                          class="page-linking"
                        >
                          Logo Designing
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/brand-name-suggestion/"
                          class="page-linking"
                        >
                          Brand Name Suggestion
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/packaging-design/"
                          class="page-linking"
                        >
                          Packaging Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dndesigns.co.in/catalogue-designing/"
                          class="page-linking"
                        >
                          Catalogue Designing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>



      {/* Approach project */}

      <section className="appr-pro">
      <div className="container">
        <div className="row">
               <h2>How We Approach <span className="every-pr">Every Project</span></h2>
               <p>For us, every new project is a fresh new journey with its own set of challenges. Each demands an innovative strategy and solution; however, certain steps stay common and consistent.</p>
       <div className="col-12 col-md-6 col-lg-3 px-2">
        <div className="app-pro-div  m-2">
          <h3>Discovery & Planning</h3>
          <p>The fundamentals come first - understanding the product, its USP, the brand’s vision, its target audience and competitors. Solid research leads to a solid foundation upon which we base our strategic plan.</p>
        </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 px-2">
        <div className="app-pro-div bg-app  m-2">
          <h3>Design, Development & Execution</h3>
          <p>Designing and developing practical options follows. A crucial aspect of this step is revision and refinement. We work on and modify our designs to ensure they match your vision.</p>
        </div>
        </div>

<div className="col-12 col-md-6 col-lg-3 px-2">
        <div className="app-pro-div  m-2">
          <h3>Testing & Launch</h3>
          <p>Once everything is ready, it’s time to test it. For us, testing is important both before and after the product launch. This is to ensure that everything works smoothly at both stages.</p>
        </div>
</div>

<div className="col-12 col-md-6 col-lg-3 px-2">
        <div className="app-pro-div bg-app  m-2">
          <h3>Ongoing Support</h3>
          <p>We provide our clients with ongoing support even after the project is over. If you face problems post-completion of the work, we are there to resolve them.

</p>
        </div>
        </div>
        
        </div>
      </div>
      </section>

    {/* top capibilities */}

    <section className="top-cap">
      <div className="container">
        <div className="row">
           <h2 className="text-center headg">Top<span className="every-pr"> Capabilities</span></h2>
           <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
           <div className="p-3 top-cap-div m-3">
           <div className="text-center m-5">
            <img src="https://img.icons8.com/?size=100&id=47615&format=png&color=000000" className="cap-img"></img>
            </div>
            <div className="top-cap-btm">
            <h3>Design</h3>
            <p>Designing is our core, and we excel in it. Be it the overall brand design, website design or content design</p>
            </div>
            <div className="top-cap-back-content">
            <h3>Design</h3>
            <p>Designing is our core, and we excel in it. Be it the overall brand design, website design or content design – we have expertise and experience in all. We understand your vision and create a design that boosts your brand value and increases ROI.</p>
            </div>
           </div>
           </div>
           
               <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
           <div className="p-3 top-cap-div m-3">
           <div className="text-center m-5">
            <img src="https://img.icons8.com/?size=100&id=47615&format=png&color=000000" className="cap-img"></img>
            </div>
            <div className="top-cap-btm">
            <h3>Design</h3>
            <p>Designing is our core, and we excel in it. Be it the overall brand design, website design or content design</p>
            </div>
            <div className="top-cap-back-content">
            <h3>Design</h3>
            <p>Designing is our core, and we excel in it. Be it the overall brand design, website design or content design – we have expertise and experience in all. We understand your vision and create a design that boosts your brand value and increases ROI.</p>
            </div>
           </div>
           </div>


              <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
           <div className="p-3 top-cap-div m-3">
           <div className="text-center m-5">
            <img src="https://img.icons8.com/?size=100&id=47615&format=png&color=000000" className="cap-img"></img>
            </div>
            <div className="top-cap-btm">
            <h3>Design</h3>
            <p>Designing is our core, and we excel in it. Be it the overall brand design, website design or content design</p>
            </div>
            <div className="top-cap-back-content">
            <h3>Design</h3>
            <p>Designing is our core, and we excel in it. Be it the overall brand design, website design or content design – we have expertise and experience in all. We understand your vision and create a design that boosts your brand value and increases ROI.</p>
            </div>
           </div>
           </div>
        </div>
      </div>
    </section>

    <section className="our-work-tab">
    <div className="container">
      <div className="row">
            <h2 className="text-center headg">Our<span className="every-pr"> Work</span></h2>



<div>
    

      <div className="tab">
        <button
          className={`tablinks ${activeTab === "Branding" ? "active" : ""}`}
          onClick={() => setActiveTab("Branding")}
        >
          Branding
        </button>
        <button
          className={`tablinks ${activeTab === "Packaging Design" ? "active" : ""}`}
          onClick={() => setActiveTab("Packaging Design")}
        >
          Packaging Design
        </button>
        <button
          className={`tablinks ${activeTab === "Brand Identity" ? "active" : ""}`}
          onClick={() => setActiveTab("Brand Identity")}
        >
          Brand Identity
        </button>
         <button
          className={`tablinks ${activeTab === "Website Development" ? "active" : ""}`}
          onClick={() => setActiveTab("Website Development")}
        >
          Website Development
        </button>

         <button
          className={`tablinks ${activeTab === "CGI Ads" ? "active" : ""}`}
          onClick={() => setActiveTab("CGI Ads")}
        >
          CGI Ads
        </button>
      </div>

      {activeTab === "Branding" && (
        <div id="Branding" className="tabcontent">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <img src="https://dndesigns.co.in/wp-content/uploads/2024/10/ezgif.com-speed-1.gif" className="img-fluid tab-img"></img>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="row">
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/08/enlite-2.jpg" className="img-fluid tab-img"></img></div>
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2024/10/smartyums_GIf.gif" className="img-fluid tab-img"></img></div>
            </div>
              <div className="row">
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/08/nature-balance.jpg" className="img-fluid tab-img"></img></div>
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/08/nectarpure-2.jpg" className="img-fluid tab-img"></img></div>
            </div>
          </div>
        </div>
        </div>
      )}

      {activeTab === "Packaging Design" && (
        <div id="Packaging Design" className="tabcontent">
           <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <img src="https://dndesigns.co.in/wp-content/uploads/2025/07/greenhorn-manu.jpg" className="img-fluid tab-img"></img>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="row">
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/08/BObalist.jpg" className="img-fluid tab-img"></img></div>
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/08/thames.jpg" className="img-fluid tab-img"></img></div>
            </div>
              <div className="row">
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/08/kalprishi.jpg" className="img-fluid tab-img"></img></div>
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/08/Wlues.jpg" className="img-fluid tab-img"></img></div>
            </div>
          </div>
        </div>
        </div>
      )}

      {activeTab === "Brand Identity" && (
        <div id="Brand Identity" className="tabcontent">
         <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <img src="https://dndesigns.co.in/wp-content/uploads/2025/08/koshish.jpg" className="img-fluid tab-img"></img>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="row">
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/08/nature-balance-22.jpg" className="img-fluid tab-img"></img></div>
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/08/deeproot-3.jpg" className="img-fluid tab-img"></img></div>
            </div>
              <div className="row">
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2024/09/logo-mock-up.jpg" className="img-fluid tab-img"></img></div>
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/07/luxmi-cars.jpg" className="img-fluid tab-img"></img></div>
            </div>
          </div>
        </div>
        </div>
      )}

      {activeTab === "Website Development" && (
        <div id="Website Development" className="tabcontent">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <img src="https://dndesigns.co.in/wp-content/uploads/2025/07/web-vihaan.jpg" className="img-fluid tab-img"></img>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="row">
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/04/5.jpg" className="img-fluid tab-img"></img></div>
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/04/2.jpg" className="img-fluid tab-img"></img></div>
            </div>
              <div className="row">
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/07/Qualiteq-image.jpg" className="img-fluid tab-img"></img></div>
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/07/mr-bomzy-2-1.jpg" className="img-fluid tab-img"></img></div>
            </div>
          </div>
        </div>
        </div>
      )}


       {activeTab === "CGI Ads" && (
        <div id="CGI Ads" className="tabcontent">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <img src="https://dndesigns.co.in/wp-content/uploads/2025/07/3.jpg" className="img-fluid tab-img"></img>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="row">
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/07/Natures-Balance-3D.jpg" className="img-fluid tab-img"></img></div>
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/07/EAU.jpg" className="img-fluid tab-img"></img></div>
            </div>
              <div className="row">
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/07/greenhorn-THUMB.jpg" className="img-fluid tab-img"></img></div>
              <div className="col-6"><img src="https://dndesigns.co.in/wp-content/uploads/2025/07/foodsure-thumb.jpg" className="img-fluid tab-img"></img></div>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
<div className="explore-more text-center">
<button>Explore More</button>
</div>
      </div>
    </div>
    </section>

    <section className="faqs">
    <div className="container">
      <div className="row">
        <h2 className="text-center">Frequently Asked Questions</h2>
        <div className="col-12 col-md-12 col-lg-6">
<div>
      
      {sheet_one.map((first_sheet, index) => (
        <div key={index}>
          <button
            className={`accordion ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            {first_sheet.title}
          </button>
          <div
            className="panel"
            style={{
              display: activeIndex === index ? "block" : "none",
            }}
          >
            <p>{first_sheet.content}</p>
          </div>
        </div>
      ))}
    </div>
        </div>

          <div className="col-12 col-md-12 col-lg-6">
<div>
      
      {sheet_two.map((second_sheet, index) => (
        <div key={index}>
          <button
            className={`accordion ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            {second_sheet.title}
          </button>
          <div
            className="panel"
            style={{
              display: activeIndex === index ? "block" : "none",
            }}
          >
            <p>{second_sheet.content}</p>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
    </section>
    </div> 
  );
}

export default Service;
