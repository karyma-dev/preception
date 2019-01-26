import React from 'react'
import ooda from '../../images/ooda.png'

export default function Process() {
  return (
    <div className="container">
      <div className="process">
        <h3 className="process-title">The 4 Step Process</h3>

        <img className="process-image" src={ooda} alt="ooda model" />

        <div className="process-summary">
          The 4 step linear process outlines every action you make: Observe, orient, decide, act. It
          has been nearly impossible to train and measure the first three steps. The final step
          (act) is a component that is regularly measured; however Preception measures the first
          three steps.
        </div>

        <div className="process-section">
          <h6 className="process-section-header">Observe</h6>
          <p className="process-section-summary">
            Through integration in real team training environments athletes are able to observe
            their surroundings quicker and more complete ensuring they have access to key
            information at all times
          </p>
        </div>

        <div className="process-section">
          <h6 className="process-section-header">Orient</h6>
          <p className="process-section-summary">
            Where individual athletes fit within the context of the team with more precision and
            flexibility
          </p>
        </div>

        <div className="process-section">
          <h6 className="process-section-header">Decide</h6>
          <p className="process-section-summary">
            Athletes make quicker decision compared to opponents. Decisions are made with complete
            information ensuring the correct action
          </p>
        </div>

        <div className="process-section">
          <h6 className="process-section-header">Act</h6>
          <p className="process-section-summary">
            The result of the first 3 steps ensures the correct action
          </p>
        </div>

        <button className="btn">Contact Us</button>
      </div>
    </div>
  )
}
