import React from 'react'
import "../assets/css/Branding.css"

function Branding() {
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
        <div className='row'>
            <div className='col-6'>

            </div>
            <div className='col-6'>

            </div>
        </div>
      </div>
      </section>

    </div>
  )
}

export default Branding
