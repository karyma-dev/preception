import React, { Component, Fragment } from 'react'
import exit from '../../images/nav/exit.svg'

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

  render() {
    const style = this.state.display ? { display: 'block' } : { display: 'none' }
    return (
      <Fragment>
        <button className="btn" onClick={this.modalHandler}>
          Contact
        </button>
        <div className="modal" style={style}>
          <div class="modal-content">
            <img
              src={exit}
              alt="exit icon for modal box"
              style={{
                float: 'right',
                width: '20px'
              }}
              onClick={this.closeHandler}
            />
            <form className="contact">
              <div className="contact-group">
                <label className="contact-label">Name</label>
                <br />
                <input className="contact-input" type="text" />
              </div>
              <div className="contact-group">
                <label className="contact-label">E-Mail</label>
                <br />
                <input className="contact-input" type="email" />
              </div>
              <div className="contact-group">
                <label className="contact-label">Phone Number</label>
                <br />
                <input className="contact-input" type="tel" />
              </div>
              <div className="contact-group">
                <label>
                  <input type="checkbox" />
                  <span>Investor</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Organization</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Athlete</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Other</span>
                </label>
              </div>
              <div className="contact-group">
                <label className="contact-label">Message</label>
                <br />
                <textarea rows="4" cols="50" />
              </div>
              <button className="contact-button">Submit</button>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}
