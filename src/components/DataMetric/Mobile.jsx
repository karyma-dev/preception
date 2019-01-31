import React from "react";

import { MobileMapped } from "./MobileMapped";


export default class Mobile extends React.Component{
  state ={ activeId: "" }

  handleInputClick = e => this.setState({activeId:e.target.name})


  render(){

    let listofOptions = this.props.options.map((elem, i)=><MobileMapped key={i} option={elem.option} activeId={this.state.activeId} answer={elem.answer} handleClick={this.handleInputClick} id={elem.id} />)

    return(
      <div className="mobile-data-section">

        <h2>Perception Data Metrics</h2>
        {listofOptions}
      </div>
    )
  }
}