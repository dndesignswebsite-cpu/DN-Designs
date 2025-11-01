import React, { useState } from "react";
import "../assets/css/Form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name + " " + email + " " + mobilenumber + " " + message);
  };

  return (
    <div>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Let’s Discuss Over a Cup of Coffee</h3>
              <p>
                Some brands simply stand out! You recognise them, you trust them
                and you do not think twice before purchasing from them. That’s
                how powerful a brand can be! However, building such an
                influential brand is quite a task.
              </p>
              <p>
                No worries for you, though, for we are here to turn your dreams
                into reality. If you have the same vision for your brand, think
                no further. Just get in touch with us and tell us all you have
                in mind for your product.Let’s discuss how to make your brand
                something others love and envy.
              </p>
            </div>
            <div className="col form-wrapper">
              <div className="form-box">
                <form onSubmit={handleSubmit}>
                  <div className="two-columns">
                    <div className="form-group">
                      <label>
                        Name <span className="color">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        Mobile No. <span className="color">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Mobile No."
                        value={mobilenumber}
                        onChange={(e) => setMobilenumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Project Details</label>
                    <textarea
                      placeholder="Project Details"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="6"
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;
