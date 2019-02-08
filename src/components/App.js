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

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className='main'>
          <Modal className='btn-contact' />
          <Route exact path='/' component={Home} />
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
