import React from 'react'

export default function Form() {
  return (
    <div className="contact">
      <h3 className="contact-header">Contact</h3>
      <form className="contact-form">
        <div className="contact-form-required">*Required Field</div>
        <div className="contact-form-group">
          <input type="text" placeholder="Name*" />
        </div>

        <div className="contact-form-group">
          <input type="email" placeholder="Email*" />
        </div>

        <div className="contact-form-group">
          <input type="tel" placeholder="Phone Number*" />
        </div>

        <div className="contact-form-group">
          <div className="contact-form-subheader">I am an...</div>
          <input type="radio" /> Investor <br />
          <input type="radio" /> Organization <br />
          <input type="radio" /> Athlete <br />
          <input type="radio" /> Other <br />
        </div>

        <div className="contact-form-group">
          <textarea placeholder="Message" />
        </div>

        <button className="btn">Submit</button>
      </form>
    </div>
  )
}
