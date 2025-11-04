import React from "react";
import "../assets/css/LogoDesigning.css";
import Form from "../components/Form";
import Breadcrumb from "../components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LogoDesigning() {
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
                Logos have strong recall value. A compelling and
                creative company logo can, therefore, make your business a brand
                that people will forever remember. As a premium brand identity
                design agency in India, we strive to achieve exactly that for
                you. Come along as we show you the types of logos we design and
                our work process. Explore our portfolio and read through the
                FAQs to find the answers you are looking for.
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
  );
}

export default LogoDesigning;
