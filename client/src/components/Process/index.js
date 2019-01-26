import React from 'react'
import ooda from '../../images/ooda.png'

export default function Process() {
  return (
    <div className="container">
      <h3>The 4 Step Process</h3>

      <img src={ooda} alt="ooda model" />

      <div>
        The 4 step linear process outlines every action you make: Observe, orient, decide, act. It
        has been nearly impossible to train and measure the first three steps. The final step (act)
        is a component that is regularly measured; however Preception measures the first three
        steps.
      </div>

      <div>
        <h4>Observe</h4>
        <p>
          Through integration in real team training environments athletes are able to observe their
          surroundings quicker and more complete ensuring they have access to key information at all
          times
        </p>
      </div>

      <div>
        <h4>Orient</h4>
        <p>
          Where individual athletes fit within the context of the team with more precision and
          flexibility
        </p>
      </div>

      <div>
        <h4>Decide</h4>
        <p>
          Athletes make quicker decision compared to opponents. Decisions are made with complete
          information ensuring the correct action
        </p>
      </div>

      <div>
        <h4>Act</h4>
        <p>The result of the first 3 steps ensures the correct action</p>
      </div>

      <button className="btn">Contact Us</button>
    </div>
  )
}
