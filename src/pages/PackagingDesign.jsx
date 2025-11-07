import React, {useState} from 'react'
import "../assets/css/PackagingDesign.css"
import Breadcrumb from "../components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Faqs from '../components/Faqs';
import Form from "../components/Form.jsx"
import HTMLFlipBook from "react-pageflip";


function PackagingDesign() {
// faqs
 const leftFaqs = [
    {
      question: "How can I contact your team?",
      answer: "You can use the contact form or call us directly at +91-9999999999.",
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



{/* Standalone Packaging Design Services */}
   const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 1,
      point: "01",
      title: "Consultation and Research",
      description:
        "You want a product package design & your mind is flooded with ideas and questions about design, market & audience. Let’s solve them one at a time.",
      image:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/smart-adult-caucasi.jpg",
    },
    {
      id: 2,
      point: "02",
      title: "Brand Identity Design",
      description:
        "Whether it is the name, logo, tagline or a unique feature, all form part of your brand identity. Partner with us to create one that commands attention.",
      image:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/9-1.jpg",
    },
    {
      id: 3,
      point: "03",
      title: "Product Photography",
      description:
        "Want a captivating photograph to enhance the appeal of your packaging design? Utilise our professional product photography service to elevate your packaging.",
      image:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/Untitled-1.jpg",
    },
    {
      id: 4,
      point: "04",
      title: "Legal Compliance",
      description:
        "Legal compliance can sound a bit complex & intimidating, but your packaging design is incomplete without it. Contact us to create a legally compliant design.",
      image:
        "https://dndesigns.co.in/wp-content/uploads/2025/06/10.jpg",
    },
  ];

  return (
    <div>  
{/*Breadcrumb*/}
      <section>
        <Breadcrumb />
      </section>

      {/* Hero section */}

      <section className="package-design-hero">
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
      <section className='portfolio'>
      <div className='container'>
      <h2 className="text-center">
              Brand Identity<span className="every-pr"> We Created</span>
            </h2>
        <div className='row port-row'>
            <div className='col-12 col-md-6 px-2 port-main-div '>
            <div className='port-div'>
            <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/Enlite-3.jpg"
                className="img-fluid"
              />
              <div className='port-content'>
              <div className='potfolio-div-btns'>
              <div className='port-div-headg'><h3>Enlite</h3></div>
                <div className="our-port-btn-up">
                <h4 className="our-port-btn">Brand Identity</h4>
                <h4 className="our-port-btn">Label Design</h4>
              </div>
              </div>
             
              <p>Enlite’s sparkling mineral water and prebiotic drink range, meant to refresh and rejuvenate customers, required a captivating brand identity, including can and logo design, to attract a young audience. We offered them just that.
              </p>
              </div>
            </div>
            </div>
         <div className='col-12 col-md-6 px-2 port-main-div'>
            <div className='port-div'>
            <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/08/I-organic.jpg"
                className="img-fluid"
              />
              <div className='port-content'>
              <div className='potfolio-div-btns'>
              <div className='port-div-headg'><h3>iOrganic</h3></div>
                <div className="our-port-btn-up">
                <h4 className="our-port-btn">Label Design</h4>
                <h4 className="our-port-btn">Packaging</h4>
              </div>
              </div>
             
              <p>For the organic dairy & food brand, iOrganic, we created a vibrant and engaging packaging design. Additionally, we provided professional photography services for their e-commerce sale and advertising purposes.
              </p>
              </div>
            </div>
            </div>
        </div>

        <div className='row port-row'>
            <div className='col-12 col-md-6 px-2 port-main-div'>
            <div className=' port-div'>
             <video className="img-fluid" autoPlay muted loop playsInline>
                  <source
                    src="https://dndesigns.co.in/wp-content/uploads/2025/08/Bombzy.mp4#t=,3"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              <div className='port-content'>
              <div className='potfolio-div-btns'>
              <div className='port-div-headg'><h3>Mr. Bomzy</h3></div>
                <div className="our-port-btn-up">
                <h4 className="our-port-btn">Brand Identity</h4>
                <h4 className="our-port-btn">Label Design</h4>
              </div>
              </div>
             
              <p>We delivered comprehensive services to the cocktail bombs brand Mr. Bomzy. This included creating their identity, crafting brand guidelines, designing the package, developing UI/UX design & website, and framing social media strategy.
              </p>
              </div>
            </div>
            </div>
         <div className='col-12 col-md-6 px-2 port-main-div'>
            <div className=' port-div'>
            <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Deeproots.jpg"
                className="img-fluid"
              />
              <div className='port-content'>
              <div className='potfolio-div-btns'>
              <div className='port-div-headg'><h3>Deeproot</h3></div>
                <div className="our-port-btn-up">
                <h4 className="our-port-btn">Brand Identity</h4>
                <h4 className="our-port-btn">Label Design</h4>
              </div>
              </div>
             
              <p>Deeproot, offering wholesome snacks, collaborated with our creative design agency to strengthen their brand presence in the market. Our range of services for them included identity design, packaging design, UI/UX design and website development.
              </p>
              </div>
            </div>
            </div>
        </div>

        <div className='row port-row'>
            <div className='col-12 col-md-6 px-2 port-main-div'>
            <div className=' port-div'>
            <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Thames.jpg"
                className="img-fluid"
              />
              <div className='port-content'>
              <div className='potfolio-div-btns'>
              <div className='port-div-headg'><h3>Thames</h3></div>
                <div className="our-port-btn-up">
                <h4 className="our-port-btn">Label Design</h4>
                <h4 className="our-port-btn">Web Design</h4>
              </div>
              </div>
             
              <p>Created an alluring packaging design for Thames dried blueberries product to capture the attention of the audience. To boost their online presence, we also designed their UI/UX and provided website development solutions.
              </p>
              </div>
            </div>
            </div>
         <div className='col-12 col-md-6 px-2 port-main-div'>
            <div className=' port-div'>
            <img
                src="https://dndesigns.co.in/wp-content/uploads/2025/06/Smartyums.jpg"
                className="img-fluid"
              />
              <div className='port-content'>
              <div className='potfolio-div-btns'>
              <div className='port-div-headg'><h3>Smartyums</h3></div>
                <div className="our-port-btn-up">
                <h4 className="our-port-btn">Label Design</h4>
                <h4 className="our-port-btn">Merchandising</h4>
              </div>
              </div>
             
              <p>Smartyums, with their crunchy protein bite products, wanted a packaging design that focussed on, and attracted kids. Expert designers at our agency created a playful and visually appealing packaging design for them.
              </p>
              </div>
            </div>
            </div>
        </div>
      </div>
      </section>


       {/* Creating Your Brand desktop view */}
                 <section className="creating-your-brand">
        <div class="container sticky-con">
          <h2 className="text-center our-brand-heading-a">Creating Your Brand Story,
<span className='every-pr'><br/>Your Way</span></h2>
          <ul id="cards-create">
            <li class="card-create" id="card1-create">
              <div class="card-body-create row">
                   <div className='col-2 create-number text-center'>01</div>
                   <div className='col-10'>
                    <h2>Brand Understanding</h2>
                    <p>If anything has to stand the test of time, it needs to begin with a firm footing. In branding, this beginning is understanding the product/business. We sit down with you for a deep discussion to understand your product or service as well as your vision and mission. This helps us make a good start and prepares us for an exciting journey ahead.</p>
                   </div>
                  </div>
            </li>

            

            <li class="card-create" id="card2-create">
              <div class="card-body-create row">
                   <div className='col-2 create-number text-center'>02</div>
                   <div className='col-10'>
                    <h2>Competitor Analysis</h2>
                    <p>You are not alone in the market; there are several other products in the same category out there trying to build their presence. How do you craft your own little corner? Analysing competition is crucial, and this is what we, as a brand design company, do next. We conduct a thorough research of your competitors and understand your current position in the market to ensure that we have enough knowledge and data to take a step forward, creating your branding strategy.</p>
                   </div>
                  </div>
            </li>

               <li class="card-create" id="card3-create">
              <div class="card-body-create row">
                   <div className='col-2 create-number text-center'>03</div>
                   <div className='col-10'>
                    <h2>Planning Your Brand</h2>
                    <p>It’s now time to create your brand strategy. Every aspect of branding is carefully thought out and discussed with you - be it your brand personality, story, message, values, or even communication and website design. As a creative branding agency, we decide on these elements based on how we want the audience to perceive your brand.</p>
                   </div>
                  </div>
            </li>

            <li class="card-create" id="card4-create">
              <div class="card-body-create row">
                   <div className='col-2 create-number text-center'>04</div>
                   <div className='col-10'>
                    <h2>Implementing the Strategy</h2>
                    <p>Let’s turn words and ideas into action. We now sit down to do the actual work - naming your brand, designing your logo, creating your packaging design, crafting a tagline, composing your message, and much more. In addition, we design and develop your website too.</p>
                   </div>
                  </div>
            </li>


               <li class="card-create" id="card5-create">
              <div class="card-body-create row">
                   <div className='col-2 create-number text-center'>05</div>
                   <div className='col-10'>
                    <h2>Feedback & Launch</h2>
                    <p>The final stage in our branding journey, this is where we seek a review of our work. Based on your feedback, we make changes, and reseek your feedback. Once we receive a green light from you, we go ahead and launch your brand.</p>
                   </div>
                  </div>
            </li> 
            </ul>
            </div>
            </section>


            {/* Creating Your Brand mobile view */}

            <section className="creating-your-brand-mobile">
              <div className="conatiner">
               <h2 className="text-center our-brand-heading-a-mobile">Creating Your Brand Story,<span className='every-pr'> Your Way</span></h2>
              <div className="row creating-brand-mobile-row">

                <div className="col-12">
                     <div className="creating-your-brand-mobile-box">
                   <h3 className="create-number-mobile">01</h3>
                   <div className="card-body-create-mobile">
                    <h2>Brand Understanding</h2>
                    <p>If anything has to stand the test of time, it needs to begin with a firm footing. In branding, this beginning is understanding the product/business. We sit down with you for a deep discussion to understand your product or service as well as your vision and mission. This helps us make a good start and prepares us for an exciting journey ahead.</p>
                   </div>
                  </div>
                </div>

                 <div className="col-12">
                     <div className="creating-your-brand-mobile-box">
                   <h3 className="create-number-mobile">02</h3>
                   <div className="card-body-create-mobile">
                    <h2>Competitor Analysis</h2>
                    <p>You are not alone in the market; there are several other products in the same category out there trying to build their presence. How do you craft your own little corner? Analysing competition is crucial, and this is what we, as a brand design company, do next. We conduct a thorough research of your competitors and understand your current position in the market to ensure that we have enough knowledge and data to take a step forward, creating your branding strategy.</p>
                   </div>
                  </div>
                </div>

                 <div className="col-12">
                     <div className="creating-your-brand-mobile-box">
                   <h3 className="create-number-mobile">03</h3>
                   <div className="card-body-create-mobile">
                    <h2>Planning Your Brand</h2>
                    <p>It’s now time to create your brand strategy. Every aspect of branding is carefully thought out and discussed with you - be it your brand personality, story, message, values, or even communication and website design. As a creative branding agency, we decide on these elements based on how we want the audience to perceive your brand.</p>
                   </div>
                  </div>
                </div>

                 <div className="col-12">
                     <div className="creating-your-brand-mobile-box">
                   <h3 className="create-number-mobile">04</h3>
                   <div className="card-body-create-mobile">
                     <h2>Implementing the Strategy</h2>
                    <p>Let’s turn words and ideas into action. We now sit down to do the actual work - naming your brand, designing your logo, creating your packaging design, crafting a tagline, composing your message, and much more. In addition, we design and develop your website too.</p>
                   </div>
                  </div>
                </div>

                 <div className="col-12">
                     <div className="creating-your-brand-mobile-box">
                   <h3 className="create-number-mobile">05</h3>
                   <div className="card-body-create-mobile">
                   <h2>Feedback & Launch</h2>
                    <p>The final stage in our branding journey, this is where we seek a review of our work. Based on your feedback, we make changes, and reseek your feedback. Once we receive a green light from you, we go ahead and launch your brand.</p>
                   </div>
                  </div>
                </div>

              </div>
               </div>
            </section>

                    


      {/* top capibilities */}

      <section className="top-cap">
        <div className="container">
          <div className="row">
            <h2 className="text-center headg">
              Top<span className="every-pr"> Capabilities</span>
            </h2>
            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className=" top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="top-cap-back-content">
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
              <img className="top-cap-check-eye" src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png" />
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className="p-3 top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="top-cap-back-content">
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
              <img className="top-cap-check-eye" src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png" />
            </div>

            <div className="col-12 col-md-12 col-lg-4 px-2 top-cap-main-div">
              <div className="p-3 top-cap-div m-3">
                <div className="text-center m-5">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/07/design.svg"
                    className="cap-img"
                  ></img>
                </div>
                <div className="top-cap-btm">
                  <h3>Design</h3>
                  <p>
                    Designing is our core, and we excel in it. Be it the overall
                    brand design, website design or content design
                  </p>
                </div>
                <div className="top-cap-back-content">
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
              <img className="top-cap-check-eye" src="https://dndesigns.co.in/wp-content/uploads/2025/06/Frame-427324112.png" />
            </div>
          </div>
        </div>
      </section>

 

 {/* Standalone Packaging Design Services desktop view */}
  <div className="container my-5 d-xl-block d-none">
      <h2 className="text-center fw-bold packaging-heading mb-3">
        Standalone Packaging 
        <span style={{ color: "#CA2734" }}> Design Services</span>
      </h2>

      <div className="row align-items-start g-5">
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
          <img
            src={cards[activeIndex].image}
            alt={cards[activeIndex].title}
            className="img-fluid packaging-images"
            style={{ transition: "0.5s ease" }}
          />
        </div>

        <div className="col-lg-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`row p-3 packaging-cards mb-2 ${
                activeIndex === index ? "active-card" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="col-lg-2 text-center">
                <h3 className="fw-bold packaging-point-number">
                  {card.point}
                </h3>
              </div>
              <div className="col-lg-10 text-start">
                <h3 className="fw-semibold packaging-points-title">
                  {card.title}
                </h3>
                <p className="packaging-points-para m-0">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Standalone Packaging Design Services mobile view */}

    <section>
       <div className="container my-5 d-xl-none d-block">
      <h2 className="text-center fw-bold packaging-heading mb-4">
        Standalone Packaging{" "}
        <span style={{ color: "#CA2734" }}>Design Services</span>
      </h2>

      <div className="row g-5 standalone-packaging-mobile  ">
        <div className="col-md-6 col-12">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/06/smart-adult-caucasi.jpg"
            alt=""
            className="img-fluid mb-3 packaging-images"
          />
          <div className="d-flex align-items-center">
            <h3 className="fw-bold packaging-point-number m-0">01</h3>
            <h4 className="fw-semibold packaging-points-title ms-4 text-start">
              Consultation and Research
            </h4>
          </div>
          <p className="mt-4 packaging-points-para text-start">
            You want a product package design & your mind is flooded with ideas
            and questions about design, market & audience. Let’s solve them one
            at a time.
          </p>
        </div>

        <div className="col-md-6 col-12">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/06/9-1.jpg"
            alt=""
            className="img-fluid mb-3 packaging-images"
          />
          <div className="d-flex align-items-center">
            <h3 className="fw-bold packaging-point-number m-0">02</h3>
            <h4 className="fw-semibold packaging-points-title ms-4 text-start">
              Brand Identity Design
            </h4>
          </div>
          <p className="mt-4 packaging-points-para text-start">
            Whether it is the name, logo, tagline or a unique feature, all form
            part of your brand identity. Partner with us to create one that
            commands attention.
          </p>
        </div>
      </div>

      <div className="row g-5 mt-2">
        <div className="col-md-6 col-12">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/06/Untitled-1.jpg"
            alt=""
            className="img-fluid mb-3 packaging-images"
          />
          <div className="d-flex align-items-center">
            <h3 className="fw-bold packaging-point-number m-0">03</h3>
            <h4 className="fw-semibold packaging-points-title ms-4 text-start">
              Product Photography
            </h4>
          </div>
          <p className="mt-4 packaging-points-para text-start">
            Want a captivating photograph to enhance the appeal of your packaging design? Utilise our professional product photography service to elevate your packaging.
          </p>
        </div>

        <div className="col-md-6 col-12">
          <img
            src="https://dndesigns.co.in/wp-content/uploads/2025/06/10.jpg"
            alt=""
            className="img-fluid mb-3 packaging-images"
          />
          <div className="d-flex align-items-center">
            <h3 className="fw-bold packaging-point-number m-0">04</h3>
            <h4 className="fw-semibold packaging-points-title ms-4 text-start">
              Legal Compliance
            </h4>
          </div>
          <p className="mt-4 packaging-points-para text-start">
            Legal compliance can sound a bit complex & intimidating, but your packaging design is incomplete without it. Contact us to create a legally compliant design.
          </p>
        </div>
      </div>
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


      {/* sjnd */}

     <section>
       <div className='container text-center'>
       <div className='row'>
        <div className='col-12 col-md-6 px-2'>
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
          <div className='col-12 col-md-6 px-2'>
                <HTMLFlipBook width={300} height={500}>
          <div className="demoPage1">Page 1 Content</div>
          <div className="demoPage2">Page 2 Content</div>
          <div className="demoPage3">Page 3 Content</div>
          <div className="demoPage4">Page 4 Content</div>
          <div className="demoPage5">Page 4 Content</div>
          <div className="demoPage6">Page 4 Content</div>
          <div className="demoPage6">Page 4 Content</div>
        </HTMLFlipBook>
        </div>
       </div>
      
    </div>
    </section>
       

      {/* form */}
      <Form/>
 
    </div>
  )
}

export default PackagingDesign
