import React from 'react'
import pod from '../../images/pod-alt.png'

export default function Pod() {
  return (
    <div className="container">
      <div className="pod spacer-top">
        <h3 className="pod-title">Preception On Demand (Pod) System</h3>

        <img className="pod-image" src={pod} alt="pod diagram" />

        <h5 className="pod-header">How it works</h5>

        <div className="pod-section">
          <h6 className="pod-section-header">Hardware</h6>
          <p className="pod-section-summary">
          Integration of the hardware within training not only measures an athletes ability to see and think under pressure, it enhances it.  The hardware is portable, easily set up, and can be used in nearly any natural team training environment (indoor/outdoor, rain or shine).  Unlike other cognitive sports technologies, we eliminate the question of transfer as it is used in existing team training environments without the coach needing to fundamentally change the way they coach, we simply add a layer to exercises they already do.  

          </p>
        </div>

        <div className="pod-section">
          <h6 className="pod-section-header">Software</h6>
          <p className="pod-section-summary">
          Our software controls the hardware and the environment it creates while collecting real time data on everything that happens within it.  It gives objective feedback for team and individual performance in real time.  Coaches are given the ability to run adaptive training sessions for the first time with the control at their fingertips.
          </p>
        </div>

        <div className="pod-section">
          <h6 className="pod-section-header">Analytics</h6>
          <p className="pod-section-summary">
          Our analytics happens at two points: First, real time analytics give only what is relevant through our KPI's.  These are done instantly, on field, during the session when the coach can immediately influence their teams.  Second, our machine learning platform tracks performance over time and goes in depth to track player and team performance over time, improve accuracy for each player, and provide insights that can not be discovered any other way.  Our objective data is also tagged to training video to allow for coaches, staff and athletes to get greater context into their performance.
          </p>
        </div>
        <div className="pod-section">
          <h6 className="pod-section-header">Results</h6>
          <p className="pod-section-summary">
          Our average outcome is that every athlete is a step faster in any direction necessary over 10 yards with only four hours of training.  This is 4 hours total for the entire team together, with each individual athlete getting that average benefit.  This was among over 300 athletes specifically tested with over 600 athletes trained total.
          </p>
        </div>
      </div>
    </div>
  )
}
