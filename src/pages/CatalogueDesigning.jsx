import React from 'react'
import "../assets/css/CatalogueDesigning.css";
import Breadcrumb from "../components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

    </div>
  )
}

export default CatalogueDesigning
