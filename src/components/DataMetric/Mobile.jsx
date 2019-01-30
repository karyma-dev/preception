import React from "react";

import { MobileMapped } from "./MobileMapped";


export default class Mobile extends React.Component{
  state ={
    options: [
      {option: "Awareness Rating %", answer: "How much you see", id:"awareness"},
      {option: "Decision Making", answer: "Time it takes to make a decision", id:"decision"},
      {option: "Complexity of Decisions", answer: "Simple, Complicated or Complex Decisions", id:"complexity"},
      {option: "Scans Per Minute", answer: "How often you look around", id:"scans"},
      {option: "Awareness Balance", answer: "Where you see (Front, Back, Left, Right)", id:"balance"},
      {option: "Orientation Rating", answer: "Body position of the player", id:"orientation"},
    
    ],
    activeId: ""
  }

  handleInputClick = e => this.setState({activeId:e.target.name})


  render(){

    let listofOptions = this.state.options.map((elem, i)=><MobileMapped key={i} option={elem.option} activeId={this.state.activeId} answer={elem.answer} handleClick={this.handleInputClick} id={elem.id} />)

    return(
      <div className="mobile-data-section">

        <h2>Perception Data Metrics</h2>
        {listofOptions}
      </div>
    )
  }
}