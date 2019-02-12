import React, { Component, Fragment } from 'react'

export default class Button extends Component {
  render() {
    return (
      <Fragment>
        <button className={this.props.buttonName} onClick={this.props.modalHandler}>
          {this.props.buttonText}
        </button>
      </Fragment>
    )
  }
}
