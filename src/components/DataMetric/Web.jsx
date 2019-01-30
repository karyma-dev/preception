import React from 'react'

import { WebMapped } from './WebMapped'


export const Web = ( {options} ) => {
  let listOfOptions = options.map((elem, i )=><WebMapped key={i} option={elem.option} answer={elem.answer} /> )
  return(
    <div className="data-metrics">
    <h1 className="data-metrics--header">Preception Data Metrics</h1>

  <ul className="data-metrics--list">
    <li className="data-metrics--list--header">
        <h2>KPI</h2>
        <h2>Insight</h2>
    </li>
    {listOfOptions}
  </ul>
  </div>
  )
}