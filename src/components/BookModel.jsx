import { useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../assets/css/BookModel.css"
import HTMLFlipBook from "react-pageflip";

function BookModel() {
    //  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
     const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }


  const bookRef = useRef();

useEffect(() => {
  if (show && bookRef.current) {
    setTimeout(() => {
      bookRef.current.pageFlip().update();
    }, 300); // wait for modal animation
  }
}, [show]);
  return (

    <div>
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
              
               <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/01/1.jpg"
                    className="img-fluid"
                   variant="primary" onClick={() => setShow(true)} />

      
      </div>
          </div>
        </div>
      </section>



      
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='book-wrapper'>
          <HTMLFlipBook ref={bookRef} width={window.innerWidth - 1000} height={window.innerHeight - 300}>

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
              </HTMLFlipBook> 


        </div>

        </Modal.Body>
      </Modal>

    </div>
  )
}

export default BookModel





{/* <HTMLFlipBook showCover={true} height={500} width={150}>
                <div className="demoPage1">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2025/01/Green-Horn-Catalogue.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="demoPage2">
                  <img
                    src="https://dndesigns.co.in/wp-content/uploads/2023/12/eiuwhiofwej.jpg"
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
              </HTMLFlipBook> 
 */}
