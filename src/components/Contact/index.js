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
              width="20px"
              onClick={this.closeHandler}
            />
            <form>
              <div>
                <label>Name</label>
                <br />
                <input type="text" />
              </div>
              <div>
                <label>E-Mail</label>
                <br />
                <input type="text" />
              </div>
              <div>
                <label>Phone Number</label>
                <br />
                <input type="text" />
              </div>
              <div>
                <label>Message</label>
                <br />
                <textarea rows="4" cols="50" />
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    )
  }
}
