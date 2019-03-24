import React, { Component, Fragment } from "react";
import axios from "axios";

import exitIcon from "../../images/nav/exit.svg";

export default class Modal extends Component {
  state = {
    name: "",
    email: "",
    phone: 0,
    message: "",
    investor: false,
    organization: false,
    athlete: false,
    other: false
  };

  handleName = e => this.setState({ name: e.target.value });
  handleEmail = e => this.setState({ email: e.target.value });
  handlePhone = e => this.setState({ phone: Number(e.target.value) });
  handleType = e => {
    const { investor, organization, athlete, other } = this.state;
    const evt = e.target.name;
    this.setState({
      investor: evt === "investor" ? !investor : investor,
      organization: evt === "organization" ? !organization : organization,
      athlete: evt === "athlete" ? !athlete : athlete,
      other: evt === "other" ? !other : other
    });
  };
  handleMessage = e => this.setState({ message: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios({
      method: "put",
      headers: { "Content-Type": "application/json" },
      url:
        "https://13oxbtb4d7.execute-api.us-west-2.amazonaws.com/default/NewForm",
      data: {
        ...this.state
      }
    }).then(res => console.log(res.data));
  };

  render() {
    const style = this.props.display
      ? { display: "flex" }
      : { display: "none" };

    return (
      <Fragment>
        <div className="modal" style={style}>
          <div class="modal-content">
            <h2 style={{ display: "inline-block" }}>Contact Us</h2>
            <img
              src={exitIcon}
              alt="exit icon for modal box"
              style={{
                float: "right",
                width: "20px"
              }}
              onClick={this.props.closeHandler}
            />
            <form id="#myform" className="contact">
              <div className="contact-group">
                <label className="contact-label">Name</label>
                <br />
                <input
                  className="contact-input"
                  onChange={this.handleName}
                  type="text"
                />
              </div>

              <div className="contact-group">
                <label className="contact-label">E-Mail</label>
                <br />
                <input
                  className="contact-input"
                  onChange={this.handleEmail}
                  type="email"
                />
              </div>

              <div className="contact-group">
                <label className="contact-label">Phone Number</label>
                <br />
                <input
                  className="contact-input"
                  onChange={this.handlePhone}
                  type="tel"
                />
              </div>

              <div className="check">
                <label className="check-container">
                  <input
                    type="checkbox"
                    name="investor"
                    onChange={this.handleType}
                  />
                  <span className="check-title">Investor</span>
                </label>

                <label className="check-container">
                  <input
                    type="checkbox"
                    name="organization"
                    onChange={this.handleType}
                  />
                  <span className="check-title">Organization</span>
                </label>

                <label className="check-container">
                  <input
                    type="checkbox"
                    name="athlete"
                    onChange={this.handleType}
                  />
                  <span className="check-title">Athlete</span>
                </label>

                <label className="check-container">
                  <input
                    type="checkbox"
                    name="other"
                    onChange={this.handleType}
                  />
                  <span className="check-title">Other</span>
                </label>
              </div>

              <div className="contact-group">
                <label className="contact-label">Message</label>
                <br />
                <textarea onChange={this.handleMessage} />
              </div>
              <button className="btn" onClick={this.handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
