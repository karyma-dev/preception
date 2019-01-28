import React from 'react'

export default function DataMetric() {
  return (
    <div className="data-metrics">
      <h1 className="data-metrics--header">Preception Data Metrics</h1>

    <ul className="data-metrics--list">
      <li>
          <h2>KPI</h2>
          <h2>Insight</h2>
      </li>
      <li>
        <p>Awareness Rating</p>
        <p>How much you see</p>
      </li>
      <li>
        <p>Decision Making</p>
        <p>Time it takes to make a decisio</p>
      </li>
      <li>
        <p>Complexity of Decisions</p>
        <p>Simple, Complicated or Complex Decisions</p>
      </li>
      <li>
        <p>Scans Per Minute</p>
        <p>How often you look around</p>
      </li>
      <li>
        <p>Awareness Balance</p>
        <p>Where you see (Front, Back, Left, Right</p>
      </li>
      <li>
        <p>Orientation Rating</p>
        <p>Body position of the player</p>
      </li>

    </ul>

    </div>
  )
}

