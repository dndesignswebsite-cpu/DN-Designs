import React, { useState } from 'react'
import "../assets/css/Contact.css";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(name + "" + email + mobilenumber + message);
  }

  return (
    <div>
      <section className='contact-hero'>
      <div className='container'> 
       <div className='contact-h1'><h1>PARTNER WITH US</h1></div>
      <div className='contact-para'><p>We take pride in everything we achieve on behalf of our clients. Making it Wonderful is easy, making it correct is hard</p></div>
      </div>
      </section>


{/* form section */}
     <section className='form-section'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-strip-col">
            <div></div>
          </div>

          <div className="col-md-6 form-col">
            <form className="contact-form" onSubmit={handleSubmit}>
              
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name-input">Name</label>
                <input
                  id="name-input"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email-input">Email</label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Mobile Number Field */}
              <div className="form-group">
                <label htmlFor="mobile-input">Mobile No. <span className="required-star">*</span></label>
                <input
                  id="mobile-input"
                  type="tel" 
                  placeholder="Mobile No."
                  value={mobilenumber}
                  onChange={(e) => setMobilenumber(e.target.value)}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message-input">Message</label>
                <textarea
                  id="message-input"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Button */}
            
              <button className="sbmt-button" type="submit">
                READY TO START
              </button>
          
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
