import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'

import Home from './Home'
import Process from './Process'
import Pod from './Pod'
import DataMetric from './DataMetric'
import Modal from './Contact/Modal'
import TeamPage from './Team'
import Button from './Contact/Button'

export default class App extends Component {
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
    return (
      <Fragment>
        <Navbar />
        <div className='main'>
          <Button modalHandler={this.modalHandler} buttonName='btn-contact' />
          <Modal display={this.state.display} closeHandler={this.closeHandler} />
          <Route
            exact
            path='/'
            render={props => <Home {...props} modalHandler={this.modalHandler} />}
          />
          <Route path='/process' component={Process} />
          <Route path='/pod' component={Pod} />
          <Route path='/data' component={DataMetric} />
          <Route path='/teampage' component={TeamPage} />
        </div>
        <Footer />
      </Fragment>
    )
  }
}
