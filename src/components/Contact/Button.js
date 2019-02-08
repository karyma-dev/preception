import React, { Component, Fragment } from 'react'
import contactIcon from '../../images/contact.svg'

export default class Button extends Component {
  buttonConfig = () => {
    if (this.props.className === 'btn-contact') {
      return (
        <button className={this.props.className} onClick={this.props.modalHandler}>
          <img className='contact-image' src={contactIcon} alt='' />
        </button>
      )
    } else if (this.props.className === 'btn') {
      return (
        <button className={this.props.className} onClick={this.props.modalHandler}>
          {this.props.buttonText}
        </button>
      )
    }
  }

  render() {
    const button = this.buttonConfig()
    return <Fragment>{button}</Fragment>
  }
}
