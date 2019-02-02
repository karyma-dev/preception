import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Contact'

import ooda from '../../images/ooda.png'
import pod from '../../images/pod.png'
import roadmapWeb from '../../images/roadmap-web.png'
import roadmapMob from '../../images/roadmap-mobile.png'

import coolLogo from '../../images/logo/cool-logo.png'
import downArrow from '../../images/arrow.svg'

import alex from '../../images/profile/alex-zucca.png'
import yuan from '../../images/profile/yuan-wang.png'
import leigh from '../../images/profile/leigh.png'
import jordan from '../../images/profile/jordan.png'
import felipe from '../../images/profile/felipe.png'

export default class Home extends React.Component {
  handleArrowClick = () => {
    this.refs.arrow.scrollIntoView()
  }

  render(){

  return (
    <Fragment>
      <header className="header">
        <img className="header--img" src={coolLogo} alt="preception logo" />
        <h1 className="header--primary-header">
          <span id="header--primary-header">Preception</span>
        </h1>
        <h2 className="header--secondary-header">
          <span id="header--secondary-header">The Future of Training</span>
        </h2>
        <img className="header--arrow" onClick={this.handleArrowClick} src={downArrow} alt="scroll down" />
      </header>

      <section ref="arrow" className="quotes-section">
        <div className="quotes-section-text">
        <p className="quotes-section--primary-para">
          We are a training tool for something that cannot be trained any other way...
        </p>
        <p className="quotes-section--secondary-para">
          The Ability to act <h4>first</h4>
        </p>
        <Link to="/contact">
          <input type="button" className="btn quotes-section--button" value="Contact Us" />
        </Link>
        </div>

      </section>

      <section className="four-step-progress-section">
        <h3 className="four-step-progress-section--header">The 4-Step Process</h3>
        <img className="four-step-progress-section--img" src={ooda} alt="ooda model" />
        <Link to="/process">
          <button className="btn four-step-progress-section--btn">Learn More</button>
        </Link>
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

        <q className="testinomal-section--quote">
          If you're not trying to utilize technology in some form, you're going to be left behind..
          This is something I want to incorportate into every training session.
        </q>
        <p className="testinomal-section--quoter">
          Kevin Harmse, Former Professional Soccer Player, Assistant Coach - Simon Fraser University
        </p>

        <q className="testinomal-section--quote">
          The results became visually evident in short time. Players were displaying and repeating
          the habits reinforced through the training (i.e. constant shoulder checking/scanning) and
          then also started to more noticeably apply these habits into their other regular training
          sessions and matches
        </q>
        <p className="testinomal-section--quoter">
          Josh Smith, CSA <q>A</q> Licensed Coach
        </p>
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

        <div className="team-section--members">
          <div>
            <img src={leigh} alt="Leigh Sembaluk" />
            <span>
              <h4>Leigh Sembaluk</h4>
              <p>Founder, CEO</p>
            </span>
            {/* <section className="team-section--buttons">
              <button className="btn">Read Blogs</button>
              <button className="btn">Purchase Book</button>
            </section> */}
          </div>
          <div>
            {/* <section className="team-section--buttons-mobile">
              <button className="btn">Read Blogs</button>
              <button className="btn">Purchase Book</button>
            </section> */}
          </div>
          <div>
            <img src={alex} alt="Alex Zucca" />
            <span>
              <h4>Alex Zucca</h4>
              <p>Data Scientist</p>
            </span>
          </div>

          <div>
            <img src={felipe} alt="Felipe Pardo" />
            <span>
              <h4>Felipe Pardo</h4>
              <p>Data Analyst</p>
            </span>
          </div>

          <div>
            <img src={yuan} alt="Yuan Wang" />
            <span>
              <h4>Yuan Wang</h4>
              <p>Software Guru</p>
            </span>
          </div>

          <div className="team-section--members">
            <div>
              <img src={leigh} alt="Leigh Sembaluk" />
              <span>
                <h4>Leigh Sembaluk</h4>
                <p>Founder, CEO</p>
              </span>
              <section className="team-section--buttons">
                <button className="btn">Read Blogs</button>
                <button className="btn">Purchase Book</button>
              </section>
            </div>
            <div>
              <section className="team-section--buttons-mobile">
                <button className="btn">Read Blogs</button>
                <button className="btn">Purchase Book</button>
              </section>
            </div>
            <div>
              <img src={alex} alt="Alex Zucca" />
              <span>
                <h4>Alex Zucca</h4>
                <p>Data Scientist</p>
              </span>
            </div>

            <div>
              <img src={felipe} alt="Felipe Pardo" />
              <span>
                <h4>Felipe Pardo</h4>
                <p>Data Analyst</p>
              </span>
            </div>

            <div>
              <img src={yuan} alt="Yuan Wang" />
              <span>
                <h4>Yuan Wang</h4>
                <p>Software Guru</p>
              </span>
            </div>

            <div>
              <img src={jordan} alt="Jordan Shimell" />
              <span>
                <h4>Jordan Shimell</h4>
                <p>Neuroscientist</p>
              </span>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        <Contact />
      </Fragment>
    )
=======
      <section className="roadmap-section">
        <h3 className="roadmap-section--header">Roadmap</h3>
        <div className="line-orange" />
        <img className="roadmap-section--img--1" src={roadmapWeb} alt="roadmap" />
        <img className="roadmap-section--img--2" src={roadmapMob} alt="roadmap" />
        <div className="line-orange" />
      </section>

      <Contact />
    </Fragment>
  )
>>>>>>> ae504e673d530e0171278a2bd6b945879426ad63
  }
}
