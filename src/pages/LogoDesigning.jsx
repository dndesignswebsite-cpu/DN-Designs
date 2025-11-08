import React, { useState } from "react";
import "../assets/css/LogoDesigning.css";
import Form from "../components/Form";
import Breadcrumb from "../components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Faqs from "../components/Faqs";

function LogoDesigning() {
  //  faqs
  const leftFaqs = [
    {
      question: "Why are there so many types of logos? How should I choose the best one for my business?",
      answer:
        "Businesses have their own distinct identity, values and vision. They want their logo to reflect all these. Moreover, they also want their logo to appeal to their target audience. The different types of logos help them do that. To decide which type of logo best suits your business, you must consider the various factors mentioned above. Alternatively, you can just get in touch with us and we will do the needful.",
    },
    {
      question: "What are logo variations and what are their different types?",
      answer:
        "Businesses need to use their company logo in different places -  official website, social media platforms, business cards, emails, reports, product packaging and letterhead. A single logo is not suitable for all due to space and layout restrictions. Therefore, businesses adapt the primary logo and use the variations in different places. These variations include a secondary logo (stacked or horizontal), submark logo, wordmark/lettermark logo, icon/brandmark design,  monochrome/one-colour logo and inverted/reversed logo.",
    },
  ];

  const rightFaqs = [
    {
      question: "Where is your office located Where is your office located?",
      answer: "We are based in Noida, India, but work with clients worldwide. Where is your office locatedBusinesses need to use their company logo in different places -  official website, social media platforms, business cards, emails, reports, product packaging and letterhead. A single logo is not suitable for all due to space and layout restrictions. Therefore, businesses adapt the primary logo and use the variations in different places. These variations include a secondary logo (stacked or horizontal), submark logo, wordmark/lettermark logo, icon/brandmark design,  monochrome/one-colour logo and inverted/reversed logo.",
    },
    {
      question: "What is your response time Where is your office located?",
      answer: "We usually reply within 24 hours of receiving your query Businesses need to use their company logo in different places -  official website, social media platforms, business cards, emails, reports, product packaging and letterhead. A single logo is not suitable for all due to space and layout restrictions. Therefore, businesses adapt the primary logo and use the variations in different places. These variations include a secondary logo (stacked or horizontal), submark logo, wordmark/lettermark logo, icon/brandmark design,  monochrome/one-colour logo and inverted/reversed logo..",
    },
  ];

  return (
    <div>
      {/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* Hero section */}

      <section className="logo-designing-hero">
        <div className="container">
          <div className="row">
            <h1>Logo Design Services</h1>
            <h3>Don’t Just Be Seen, Be Remembered</h3>
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
                Logos have strong recall value. A compelling and creative
                company logo can, therefore, make your business a brand that
                people will forever remember. As a premium brand identity design
                agency in India, we strive to achieve exactly that for you. Come
                along as we show you the types of logos we design and our work
                process. Explore our portfolio and read through the FAQs to find
                the answers you are looking for.
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

      {/* Brand Identity We Created*/}
      <section className="brand-identity">
        <div className="container">
          <h2 className="text-center">
            Brand Identity<span className="every-pr"> We Created</span>
          </h2>
          <div className="row brand-identity-row">
            <div className="col-12 col-md-6 px-2 brand-identity-main-div ">
              <div className="brand-identity-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
                  className="img-fluid"
                />
                <div className="brand-identity-content">
                  <div className="brand-identity-div-btns">
                    <div className="brand-identity-div-headg">
                      <h3>Enlite</h3>
                    </div>
                    <div className="brand-identity-btn-up">
                      <h4 className="brand-identity-btn">Brand Identity</h4>
                      <h4 className="brand-identity-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    Enlite’s sparkling mineral water and prebiotic drink range,
                    meant to refresh and rejuvenate customers, required a
                    captivating brand identity, including can and logo design,
                    to attract a young audience. We offered them just that.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 port-main-div">
              <div className="port-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/08/I-organic.jpg"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>iOrganic</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Packaging</h4>
                    </div>
                  </div>

                  <p>
                    For the organic dairy & food brand, iOrganic, we created a
                    vibrant and engaging packaging design. Additionally, we
                    provided professional photography services for their
                    e-commerce sale and advertising purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row port-row">
            <div className="col-12 col-md-6 px-2 port-main-div">
              <div className=" port-div">
                <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/wp-content/uploads/2025/08/Bombzy.mp4#t=,3"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Mr. Bomzy</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    We delivered comprehensive services to the cocktail bombs
                    brand Mr. Bomzy. This included creating their identity,
                    crafting brand guidelines, designing the package, developing
                    UI/UX design & website, and framing social media strategy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 port-main-div">
              <div className=" port-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/Deeproots.jpg"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Deeproot</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Brand Identity</h4>
                      <h4 className="our-port-btn">Label Design</h4>
                    </div>
                  </div>

                  <p>
                    Deeproot, offering wholesome snacks, collaborated with our
                    creative design agency to strengthen their brand presence in
                    the market. Our range of services for them included identity
                    design, packaging design, UI/UX design and website
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row port-row">
            <div className="col-12 col-md-6 px-2 port-main-div">
              <div className=" port-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/Thames.jpg"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Thames</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Web Design</h4>
                    </div>
                  </div>

                  <p>
                    Created an alluring packaging design for Thames dried
                    blueberries product to capture the attention of the
                    audience. To boost their online presence, we also designed
                    their UI/UX and provided website development solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-2 port-main-div">
              <div className=" port-div">
                <img
                  src="https://dndesigns.co.in/wp-content/uploads/2025/06/Smartyums.jpg"
                  className="img-fluid"
                />
                <div className="port-content">
                  <div className="potfolio-div-btns">
                    <div className="port-div-headg">
                      <h3>Smartyums</h3>
                    </div>
                    <div className="our-port-btn-up">
                      <h4 className="our-port-btn">Label Design</h4>
                      <h4 className="our-port-btn">Merchandising</h4>
                    </div>
                  </div>

                  <p>
                    Smartyums, with their crunchy protein bite products, wanted
                    a packaging design that focussed on, and attracted kids.
                    Expert designers at our agency created a playful and
                    visually appealing packaging design for them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* But Why Your Logo Even Matters?*/}
      <section className="but-why">
        <div className="container">
          <div className="row">
            <h2 className="text-center headg">
              But Why Your<span className="every-pr"> Logo Even Matters?</span>
            </h2>
            <div className="col-12 col-md-6 col-lg-3 px-2 but-why-main-div">
              <div className=" but-why-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="but-why-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="but-why-back-content">
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
                className="but-why-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3 px-2 but-why-main-div">
              <div className=" but-why-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="but-why-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="but-why-back-content">
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
                className="but-why-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3 px-2 but-why-main-div">
              <div className="p-3 but-why-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="but-why-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="but-why-back-content">
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
                className="but-why-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3 px-2 but-why-main-div">
              <div className="p-3 but-why-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="but-why-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="but-why-back-content">
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
                className="but-why-check-eye"
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* From Research to Design How We Create Your Logo desktop view */}
      <section className="creating-your-brand">
        <div class="container sticky-con">
          <h2 className="text-center our-brand-heading-a">
            From Research to Design
            <span className="every-pr">
              <br />
              How We Create Your Logo
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

      {/* Creating Your Brand mobile view */}

      <section className="creating-your-brand-mobile">
        <div className="conatiner">
          <h2 className="text-center our-brand-heading-a-mobile">
           From Research to Design
            <span className="every-pr"> How We Create Your Logo</span>
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

      {/* Types of Brand  */}
      <section>
        <div class="container logo-brand-parent">
          <h2 class="text-center brand-logo-heading">
           Types of Brand Identity {" "}
            <span className="red-headg">Logos We Design</span>
          </h2>
          <div class="row logo-brand1">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="logo-brand-title">Monogram</h2>
              <h6 class="logo-type">Lettermark</h6>
              <p class="logo-brand-paragraph">
                This combines the initial letters of the brand name to create an
                abbreviated version. Think of ESPN (Entertainment and Sports
                Programming Network) and P&G (Procter & Gamble). Companies with
                longer names prefer this type of design to make their logo
                compact and memorable.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-12 com-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/16.png"
                    alt="HBO logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/13.png"
                    alt="IBM logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/8.png"
                    alt="NASA logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row logo-brand2">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="fw-bold logo-brand-title">Wordmarks</h2>
              <h6 class="logo-type">Logotype</h6>
              <p class="logo-brand-paragraph">
                This comprises solely the brand name. Examples include Google,
                L’oreal and ebay. Brands with concise names and a strong persona
                pick this type of logo. Custom typography and styling that
                reflect brand identity make these logos memorable.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/22.png"
                    alt="Visa logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/18.png"
                    alt="Coca-Cola logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/4.png"
                    alt="Google logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row logo-brand3">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="fw-bold logo-brand-title">Pictorial</h2>
              <h6 class="logo-type">Brandmark/Symbol</h6>
              <p class="logo-brand-paragraph">
                As per its name, this type of logo draws on graphics, images,
                icons and symbols from the real world. The best example of this
                is Apple. This type of logo is best when brands can find
                pictures or symbols that appropriately present their business,
                whether literally or figuratively. This is very easy to
                recognise.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/2-1.png"
                    alt="Apple logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/9.png"
                    alt="X logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/14.png"
                    alt="Pinterest logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row logo-brand4">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="fw-bold logo-brand-title">Abstract</h2>
              <h6 class="logo-type">Represent Your Brand</h6>
              <p class="logo-brand-paragraph">
                In contrast to pictorial logos that use images from the real
                world, abstract logos use geometric shapes and colours to convey
                the right message and emotion. Few brands that use this type of
                logo include Mastercard, Pepsi and Mitsubishi. Brands that want
                a timeless logo that breaks cultural and language barriers (and
                thus has a global appeal) opt for an abstract logo.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/15.png"
                    alt="adidas logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/11.png"
                    alt="BP logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/7.png"
                    alt="Pepsi logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row logo-brand5">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="fw-bold logo-brand-title">Mascots</h2>
              <h6 class="logo-type">Characters</h6>
              <p class="logo-brand-paragraph">
                Brands that want to evoke a more fun and friendly emotion opt
                for this type of logo. Remember the logos of KFC and Amul? This
                type of logo has an illustrated character that represents the
                brand and fosters a strong emotional connection with the
                customers.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/5.png"
                    alt="KFC logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/19.png"
                    alt="Pringles logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/1-1.png"
                    alt="Amul logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row logo-brand6">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="fw-bold logo-brand-title">Combination</h2>
              <h6 class="logo-type">Text and Pictures</h6>
              <p class="logo-brand-paragraph">
                This logo combines text with symbol, image, mascot and shape to
                create a unique identity for the brand. It is adaptable, giving
                brands a scope to split the main logo and carve out variations
                from it. Few examples of this type of logos include Puma, Jaguar
                and Burger King.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/3.png"
                    alt="Doritos logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/12.png"
                    alt="Burger King logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/17.png"
                    alt="Lacoste logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row logo-brand7">
            <div class="col-12 col-lg-5 col-md-12">
              <h2 class="fw-bold logo-brand-title">The Emblem</h2>
              <h6 class="logo-type">Badge</h6>
              <p class="logo-brand-paragraph">
                Businesses that wish to convey an air of legacy, prestige and
                tradition usually go for an emblem logo. These logos include a
                shape that encompasses text, image or symbol. Some of the best
                examples of this type of logos are Harley-Davidson, Starbucks,
                Harvard University and Oxford University.
              </p>
            </div>
            <div class="col-12 col-lg-7 col-md-12 logo-list">
              <div class="row logo-brand-row">
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/logo.png"
                    alt="Harley-Davidson logo"
                    class="img-fluid logo"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/6.png"
                    alt="Harvard logo"
                    class="img-fluid"
                  />
                </div>
                <div class="col-4 col-lg-4 col-md-4">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2024/09/21.png"
                    alt="Starbucks logo"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Wow-Making */}
      <section>
        <div class="container logo-design-parent ">
          <div className="row text-center">
            <h2 class="text-center  logo-design-heading">
              The Wow-Making Elements Of
              <span className="red-headg">
                <br /> Professional Logo Design
              </span>
            </h2>
          </div>

          <div class="row logo-design-section">
            <div class="col-lg-8 col-md-7 position-relative logo-hover-wrapper">
              <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/04/1-3.jpg"
                alt="Nectarpure"
                class="img-fluid logo-design-img"
              />

              <img
                src="https://dndesigns.co.in/wp-content/uploads/2019/02/nec.jpg"
                alt="Slide Overlay"
                class="img-fluid logo-overlay-img"
              />
            </div>

            <div class="col-lg-4 col-md-5 mb-sm-4 image-stack">
              <div class="row">
                <div class="col-lg-12">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/06/wordmark-2048x1078.png"
                    alt=""
                    class="img-fluid logo-design-img2"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/06/nectarpure-1-2048x1078.jpg"
                    alt=""
                    class="img-fluid logo-design-img2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tabs desktop */}
      <section>
        <div class="container logo-tabs-container mt-5 tabs-section">
          <ul class="nav nav-tabs custom-tabs" id="logoTabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="style-tab"
                data-bs-toggle="tab"
                data-bs-target="#style"
                type="button"
                role="tab"
              >
                Logo Style
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tab-btn"
                id="palette-tab"
                data-bs-toggle="tab"
                data-bs-target="#palette"
                type="button"
                role="tab"
              >
                Colour palette
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="typography-tab"
                data-bs-toggle="tab"
                data-bs-target="#typography"
                type="button"
                role="tab"
              >
                Typography
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="shape-tab"
                data-bs-toggle="tab"
                data-bs-target="#shape"
                type="button"
                role="tab"
              >
                Shape
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="layout-tab"
                data-bs-toggle="tab"
                data-bs-target="#layout"
                type="button"
                role="tab"
              >
                Layout
              </button>
            </li>
          </ul>

          <div class="tab-content custom-tab-content" id="logoTabsContent">
            <div class="tab-pane fade show active" id="style" role="tabpanel">
              <p>
                Type/Style is all about how your logo appears in totality. As
                the best logo design company in India, we invest a lot of
                thought and carefully select the logo style for your brand
                depending on your requirements. We take into consideration your
                brand identity, personality, voice and how you want to be
                perceived by your audience, and match it up with the best logo
                type. These styles include combination marks, wordmarks, letter
                marks, abstract, emblems and dynamic.{" "}
              </p>
            </div>

            <div class="tab-pane fade" id="palette" role="tabpanel">
              <p>
                Colours convey certain emotions, and hence are a crucial design
                element. Our creative logo designers in Noida choose a colour
                palette that perfectly reflects your brand’s personality and
                emotions. To ensure the right selection and usage of colours, we
                – a logo design agency in Delhi NCR – research your target
                audience and market and additionally decide which colour will
                effectively communicate your brand’s USP.
              </p>
            </div>

            <div class="tab-pane fade" id="typography" role="tabpanel">
              <p>
                Like colours, typography, too, conveys the brand identity – its
                message, voice and tone. Whether your brand voice is more
                polished and professional or it is warm and friendly, whether it
                is inspiring and uplifting or leans more towards authority, your
                typography can reveal all. As a logo design agency, we can
                create a premium logo design that communicates your brand voice
                accurately.
              </p>
            </div>

            <div class="tab-pane fade" id="shape" role="tabpanel">
              <p>
                Like colours and typography, shapes too have a psychological
                effect on customers. These are silent messengers of brand
                personality, values and tone. For example, shapes like circles
                and ovals convey a feeling of inclusiveness and community. On
                the other hand, squares and rectangles evoke a sense of
                stability and reliability. Designers at a logo designing agency
                know this and hence select an appropriate shape for your
                creative company logo.
              </p>
            </div>

            <div class="tab-pane fade" id="layout" role="tabpanel">
              <p>
                Anything in the background doesn’t have much value. This could
                perhaps be true for a lot of things, but not logo design. Think
                of the red background of the McDonald’s logo. The feel of the
                brand is not complete without this background. As a logo design
                agency, we understand the importance of this design element and
                therefore create a layout that enhances the effect of your logo.
                While deciding the layout, we consider the need to incorporate a
                symbol or a tagline as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* tabs mobile */}
      <section>
        <div class="container mobile-tabs mt-5">
          <h2 class="mobile-tab-heading">Logo Style</h2>
          <p class="mobile-tab-paragraph mt-4">
            Type/Style is all about how your logo appears in totality. As the
            best logo design company in India, we invest a lot of thought and
            carefully select the logo style for your brand depending on your
            requirements. We take into consideration your brand identity,
            personality, voice and how you want to be perceived by your
            audience, and match it up with the best logo type. These styles
            include combination marks, wordmarks, letter marks, abstract,
            emblems and dynamic.
          </p>

          <h2 class="mobile-tab-heading mt-5">Colour palette</h2>
          <p class="mobile-tab-paragraph mt-4">
            Colours convey certain emotions, and hence are a crucial design
            element. Our creative logo designers in Noida choose a colour
            palette that perfectly reflects your brand’s personality and
            emotions. To ensure the right selection and usage of colours, we – a
            logo design agency in Delhi NCR – research your target audience and
            market and additionally decide which colour will effectively
            communicate your brand’s USP.
          </p>

          <h2 class="mobile-tab-heading mt-5">Typography</h2>
          <p class="mobile-tab-paragraph mt-4">
            Like colours, typography, too, conveys the brand identity – its
            message, voice and tone. Whether your brand voice is more polished
            and professional or it is warm and friendly, whether it is inspiring
            and uplifting or leans more towards authority, your typography can
            reveal all. As a logo design agency, we can create a premium logo
            design that communicates your brand voice accurately.
          </p>

          <h2 class="mobile-tab-heading mt-5">Shape</h2>
          <p class="mobile-tab-paragraph mt-4">
            Like colours and typography, shapes too have a psychological effect
            on customers. These are silent messengers of brand personality,
            values and tone. For example, shapes like circles and ovals convey a
            feeling of inclusiveness and community. On the other hand, squares
            and rectangles evoke a sense of stability and reliability. Designers
            at a logo designing agency know this and hence select an appropriate
            shape for your creative company logo.
          </p>

          <h2 class="mobile-tab-heading mt-5">Layout</h2>
          <p class="mobile-tab-paragraph mt-4">
            Anything in the background doesn’t have much value. This could
            perhaps be true for a lot of things, but not logo design. Think of
            the red background of the McDonald’s logo. The feel of the brand is
            not complete without this background. As a logo design agency, we
            understand the importance of this design element and therefore
            create a layout that enhances the effect of your logo. While
            deciding the layout, we consider the need to incorporate a symbol or
            a tagline as well.
          </p>
        </div>
      </section>

      {/* faqs */}

      <section className="faqs">
        <div className="container">
          <div className="row text-center">
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
        <Faqs title="CONTACT FAQs" leftFaqs={leftFaqs} rightFaqs={rightFaqs} />
      </section>

      {/* form */}
      <Form />
    </div>
  );
}

export default LogoDesigning;
