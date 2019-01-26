import React from 'react'

export default function Pod() {
  return (
    <div className="container">
      <div className="pod">
        <h3 className="pod-title">Preception On Demand (Pod) System</h3>

        <img className="pod-image" src="" alt="" />

        <h5 className="pod-header">How it works</h5>

        <div className="pod-section">
          <h6 className="pod-section-header">Hardware</h6>
          <p className="pod-section-summary">
            The benefit of training with our portable system are athletes are faster over 10 yards
            in any direction
          </p>
        </div>

        <div className="pod-section">
          <h6 className="pod-section-header">Software</h6>
          <p className="pod-section-summary">
            The software does two jobs it runs the hardware from a connected tablet and collects
            real time data for coaches. The benefit is objective feedback for team performance in
            real time and collects data for measuring the KPIs
          </p>
        </div>

        <div className="pod-section">
          <h6 className="pod-section-header">Analytics</h6>
          <p className="pod-section-summary">
            Coaches can automatically track and analyze players ability to make decision, how long
            it takes them to notice an opportunity and how long it takes to start their movement.
          </p>
        </div>

        <button className="btn">Contact Us</button>
      </div>
    </div>
  )
}
