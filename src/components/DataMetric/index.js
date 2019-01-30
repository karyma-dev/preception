import React from 'react'
import Mobile from './Mobile'
import { Web } from './Web'

export default function DataMetric() {
  let options = [
    {option: "Awareness Rating %", answer: "How much you see", id:"awareness"},
    {option: "Decision Making", answer: "Time it takes to make a decision", id:"decision"},
    {option: "Complexity of Decisions", answer: "Simple, Complicated or Complex Decisions", id:"complexity"},
    {option: "Scans Per Minute", answer: "How often you look around", id:"scans"},
    {option: "Awareness Balance", answer: "Where you see (Front, Back, Left, Right)", id:"balance"},
    {option: "Orientation Rating", answer: "Body position of the player", id:"orientation"},
  ]

  if (window.innerWidth < 1140){
    return <Mobile options={options} />
  }else {
    return <Web options={options} />
  }

}
