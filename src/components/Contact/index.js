import React from 'react'

export default function Contact() {
  return (
    <div className="container">
      <div className="contact spacer-top">
        <h3 className="contact-header">Contact</h3>
        <form className="contact-form">
          <div className="contact-form-required">*Required Field</div>
          <div className="contact-form-group">
            <input className="contact-form-field" type="text" placeholder="Name*" />
          </div>

          <div className="contact-form-group">
            <input className="contact-form-field" type="email" placeholder="Email*" />
          </div>

          <div className="contact-form-group">
            <input className="contact-form-field" type="tel" placeholder="Phone Number*" />
          </div>

          <div className="contact-form-group contact-form-radio">
            <div className="contact-form-subheader">I am an...</div>
            <input type="radio" /> Investor <br />
            <input type="radio" /> Organization <br />
            <input type="radio" /> Athlete <br />
            <input type="radio" /> Other <br />
          </div>

          <div className="contact-form-group">
            <textarea className="contact-form-textarea" placeholder="Message" />
          </div>

          <button className="btn contact-btn">Submit</button>
        </form>
      </div>
    </div>
  )
}
