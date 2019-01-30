import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'


import App from './components/App'
import './styles/css/main.css'
import ScrollToTop from './components/ScrollToTop'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()
