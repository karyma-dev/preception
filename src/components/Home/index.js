import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import pod from '../../images/pod.png'
import coolLogo from '../../images/logo/cool-logo.png'
import downArrow from '../../images/arrow.svg'

import { teamMembers } from '../TeamMember'
import { Members } from './Members'

export default class Home extends React.Component {
  handleArrowClick = () => {
    this.refs.arrow.scrollIntoView()
  }

  render() {
    let members = teamMembers.map((member, i) => (
      <Members key={i} name={member.name} image={member.image} position={member.position} />
    ))
    return (
      <Fragment>
        <header className="header">
          <img className="header--img" src={coolLogo} alt="preception logo" />
          <h1 className="header--primary-header">Preception</h1>
          <h2 className="header--secondary-header">The Future of Training</h2>
          <img
            className="header--arrow"
            onClick={this.handleArrowClick}
            src={downArrow}
            alt="scroll down"
          />
        </header>
        <div ref="arrow" />
        <section className="quotes-section">
          <div className="quotes-section-text">
            <p className="quotes-section--primary-para">
              We are a training tool for something that cannot be trained any other way...
            </p>
            <p className="quotes-section--secondary-para">
              The Ability to act</p> <h4>first</h4>
            <Link to="/contact">
              <input type="button" className="btn quotes-section--button" value="Contact Us" />
            </Link>
          </div>
        </section>

        <section className="what-we-do-section">
          <h3 className="what-we-do-section--header">What We Do</h3>
          <p className="what-we-do-section-para">
            Preception specifically trains{' '}
            <text className="what-we-do-section-para--bolded">Mental Speed</text> and
            <text className="what-we-do-section-para--bolded">Awareness</text>
          </p>
          <p className="what-we-do-section-para">
            Our results in a total of 4 hours of training is <br />
            <text className="what-we-do-section-para--bolded--bigger"> 0.24 Seconds</text> <br />
            quicker in all directions
          </p>

          {/* <Link to="/process">
          <button className="btn what-we-do-section--btn">Learn More</button>
        </Link> */}
        </section>

        {/* <section className="performance-metrics-section">
        <h3 className="performance-metrics-section--header">Preception Performance Metrics</h3>
        <ul className="performance-metrics-section--list">
          <li>Awareness Rating %</li>
          <li>Scans/Minute</li>
          <li>Average Decision Making Speed</li>
          <li>Complexity of Decisions</li>
          <li>Awareness Balance</li>
          <li>Orientation Rating</li>
        </ul>
        <Link to="/data">
          <button className="btn performance-metrics-section--btn">Learn More</button>
        </Link>
      </section> */}

        <section className="testinomal-section">
          <h3 className="testinomal-section--header">Testimonials</h3>
          <div className="testinomal-section-part">
            <q className="testinomal-section-part--quote">
              If you're not trying to utilize technology in some form, you're going to be left
              behind.. This is something I want to incorportate into every training session.
            </q>
            <p className="testinomal-section-part--quoter">
              Kevin Harmse, Former Professional Soccer Player, Assistant Coach - Simon Fraser
              University
            </p>
          </div>
          <div className="testinomal-section-part">
            <q className="testinomal-section--quote">
              The results became visually evident in short time. Players were displaying and
              repeating the habits reinforced through the training (i.e. constant shoulder
              checking/scanning) and then also started to more noticeably apply these habits into
              their other regular training sessions and matches
            </q>
            <p className="testinomal-section--quoter">
              Josh Smith, CSA <q>A</q> Licensed Coach
            </p>
          </div>
        </section>

        <section className="how-it-works-section">
          <h3 className="how-it-works-section--header">How It Works</h3>
          <img className="how-it-works-section--img" src={pod} alt="preception on demand system" />
          <Link to="/pod">
            <button className="btn how-it-works-section--btn">Learn More</button>
          </Link>
        </section>

        <section className="team-section">
          <div className="team-section--header">
            <h3>Preception Team</h3>
          </div>

          <div className="team-section--members">{members}</div>

          <p className="team-section--para">
            Lorem ipsum dolor sit amet, sollicitudin quis ultrices et quisque, diam elit ultricies
            congue suspendisse curabitur, lobortis tortor. Ut mi eleifend nisl. Cras ut auctor
            libero, faucibus posuere semper consectetuer, donec mauris est pellentesque augue,
            congue accumsan lobortis justo integer leo. Ligula quis porta suspendisse malesuada
            adipiscing fermentum, tempor pede, adipiscing diam, id semper auctor consectetuer
            consectetuer fusce, malesuada urna sed felis wisi. Non lectus ipsum purus nulla, vel
            etiam suspendisse neque turpis. 
          </p>
          <Link to="/teampage">
            <button className="btn">Learn More</button>
          </Link>
        </section>

        <section className="roadmap-section">
          <h3 className="roadmap-section--header">Roadmap</h3>
          <h1 className="roadmap-section--coming">Coming in 2020...</h1>
        </section>
      </Fragment>
    )
  }
}
