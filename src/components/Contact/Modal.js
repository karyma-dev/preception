import React, { Component, Fragment } from 'react'
import Button from './Button'

import exitIcon from '../../images/nav/exit.svg'

export default class Modal extends Component {
  state = { display: false }

  closeHandler = () => {
    this.setState({ display: false })
  }

  modalHandler = () => {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    const style = this.state.display ? { display: 'flex' } : { display: 'none' }
    return (
      <Fragment>
        <Button modalHandler={this.modalHandler} className='btn-contact' />
        <div className='modal' style={style}>
          <div class='modal-content'>
            <h2 style={{ display: 'inline-block' }}>Contact Us</h2>
            <img
              src={exitIcon}
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
