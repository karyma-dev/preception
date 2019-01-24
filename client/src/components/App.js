import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Process from './Process'
import Guide from './Guide'
import DataMetric from './DataMetric'
import Contact from './Contact'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/process" component={Process} />
        <Route path="/guide" component={Guide} />
        <Route path="/dataMetric" component={DataMetric} />
        <Route path="/contact" component={Contact} />
      </Fragment>
    )
  }
}
