import React, { Fragment } from 'react'
import Contact from '../Contact'

import ooda from '../../images/ooda.png'
import pod from '../../images/pod.png'
import roadmapWeb from '../../images/roadmap-web.png'

import alex from '../../images/profile/alex-zucca.png'
import yuan from '../../images/profile/yuan-wang.png'
import leigh from '../../images/profile/leigh.png'
import jordan from '../../images/profile/jordan.png'
import felipe from '../../images/profile/felipe.png'


export default function Home() {
  return (
    <Fragment>
      <header className="header">
        <div className="header--primary-header">Preception</div>
        <div className="header--secondary-header">The Future of Training</div>
      </header>

      <section className="quotes-section">
        <p className="quotes-section--primary-para">
          We are a training tool for something that cannot be trained any other way...
        </p>
        <p className="quotes-section--secondary-para">
          The Ability to act
          <br /> first
        </p>
        <input type="button" className="btn quotes-section--button" value="Contact Us" />
      </section>

      <section className="four-step-progress-section">
        <h3 className="four-step-progress-section--header">The 4-Step Process</h3>
        <img className="four-step-progress-section--img" src={ooda} alt="ooda model" />
        <button className="btn">Learn More</button>
      </section>

      <section className="how-it-works-section">
        <h3 className="how-it-works-section--header">How It Works</h3>
        <img className="how-it-works-section--img" src={pod} alt="preception on demand system" />
        <button className="btn">Learn More</button>
      </section>

      <section className="performance-metrics-section">
        <h3 className="performance-metrics-section--header">Preception Performance Metrics</h3>
        <ul className="performance-metrics-section--list">
          <li>Awareness Rating %</li>
          <li>Scans/Minute</li>
          <li>Average Decision Making Speed</li>
          <li>Complexity of Decisions</li>
          <li>Awareness Balance</li>
          <li>Orientation Rating</li>
        </ul>
        <button className="btn">Learn More</button>
      </section>

      <section className="roadmap-section">

        <h3 className="roadmap-section--header">Roadmap</h3>
        <div className="line-orange" />
        <img className="roadmap-section--img" src={roadmapWeb} alt="roadmap" />
        <div className="line-orange" />
      </section>

      <section className="testinomal-section">
        <h3 className="testinomal-section--header">Testimonials</h3>

          <q className="testinomal-section--quote">
            If you're not trying to utilize technology in some form, you're going to be left
            behind.. This is something I want to incorportate into every training [as a coach]
          </q>
          <p className="testinomal-section--quoter">
            Kevin Harmse, Former Professional Soccer Player, Assistant - Simon Fraser University
          </p>

          <q className="testinomal-section--quote">
            The results became visually evident in short time. Players were displaying and repeating
            the habits reinforced through the training (i.e. constant shoulder checking/scanning)
            and then also started to more noticeably apply these habits into their other regular
            training sessions and matches
          </q>
          <p className="testinomal-section--quoter">
            Josh Smith, CSA <q>A</q> Licensed Coach
          </p>

      </section>

      <section className="team-section">
        <div className="team-section--header">
          <h3>Preception Team</h3>
        </div>

        <div className="team-section--members">

          <div>
            <img src={alex} alt="Alex Zucca" />
            <h4>
              Alex Zucca
            </h4>
            <p>
              Data Analyst
            </p>
          </div>
          <div>
            <img src={felipe} alt="Felipe Pardo" />
            <h4>
              Felipe Pardo
            </h4>
            <p>
              Data Analyst
            </p>
          </div>
          <div>
            <img src={leigh} alt="Leigh Sembaluk" />
            <h4>
              Leigh Sembaluk
            </h4>
            <p>
              Founder, CEO
            </p>
          </div>
          <div>
            <img src={yuan} alt="Yuan Wang" />
            <h4>
              Yuan Wang
            </h4>
            <p>
              Developer
            </p>
          </div>
          <div>
            <img src={jordan} alt="Jordan Shimell" />
            <h4>
              Jordan Shimell
            </h4>
              <p>
                Developer
              </p>
          </div>
        </div>

        <div className="team-section--buttons">
          <button className="btn">Read Blogs</button>
          <button className="btn">Purchase Book</button>
        </div>
      </section>

      <Contact />
    </Fragment>
  )
}
