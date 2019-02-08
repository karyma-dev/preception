import React, { Component, Fragment } from 'react'
import exit from '../../images/nav/exit.svg'
import contactIcon from '../../images/contact.svg'

export default class Contact extends Component {
  state = { display: false }

  modalHandler = () => {
    this.setState({
      display: !this.state.display
    })
  }

  closeHandler = () => {
    this.setState({ display: false })
  }

  buttonConfig = () => {
    if (this.props.className === 'btn-contact') {
      return (
        <button className={this.props.className} onClick={this.modalHandler}>
          <img className='contact-image' src={contactIcon} alt='' />
        </button>
      )
    } else if (this.props.className === 'btn') {
      return (
        <button className={this.props.className} onClick={this.modalHandler}>
          {this.props.buttonText}
        </button>
      )
    }
  }

  render() {
    const style = this.state.display ? { display: 'flex' } : { display: 'none' }
    const button = this.buttonConfig()

    return (
      <Fragment>
        {button}

        <div className='modal' style={style}>
          <div class='modal-content'>
            <h2 style={{ display: 'inline-block' }}>Contact Us</h2>
            <img
              src={exit}
              alt='exit icon for modal box'
              style={{
                float: 'right',
                width: '20px'
              }}
              onClick={this.closeHandler}
            />
            <form className='contact'>
              <div className='contact-group'>
                <label className='contact-label'>Name</label>
                <br />
                <input className='contact-input' type='text' />
              </div>

              <div className='contact-group'>
                <label className='contact-label'>E-Mail</label>
                <br />
                <input className='contact-input' type='email' />
              </div>

              <div className='contact-group'>
                <label className='contact-label'>Phone Number</label>
                <br />
                <input className='contact-input' type='tel' />
              </div>

              <div className='check'>
                <label className='check-container'>
                  <input type='checkbox' />
                  <span className='check-title'>Investor</span>
                </label>

                <label className='check-container'>
                  <input type='checkbox' />
                  <span className='check-title'>Organization</span>
                </label>

                <label className='check-container'>
                  <input type='checkbox' />
                  <span className='check-title'>Athlete</span>
                </label>

                <label className='check-container'>
                  <input type='checkbox' />
                  <span className='check-title'>Other</span>
                </label>
              </div>

              <div className='contact-group'>
                <label className='contact-label'>Message</label>
                <br />
                <textarea />
              </div>
              <button className='btn'>Submit</button>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}
