import React, { Fragment } from 'react'
import Contact from '../Contact'

export default function Home() {
  return (
    <Fragment>
      <header className="header">
        <div className="header--primary-header">Preception</div>
        <div className="header--secondary-header">The Future of Training</div>
      </header>
      <section className="quotes-section">
        <p className="quotes-section--primary-para">We are a training tool for something that cannot be trained any other way...</p>
        <p className="quotes-section--secondary-para">The Ability to act<br /> first</p>
        <input type="button" className="btn quotes-section--button" value="Contact Us" />
      </section>
      <section>
        <h3>The 4 Step Process</h3>
        <div>
          <span>Observe</span>
          <span>Orient</span>
          <span>Decide</span>
          <span>Act</span>
        </div>
        <button>Learn More</button>
      </section>

      <section>
        <h3>How It Works</h3>
        <img src="" alt="" />
        <button>Learn More</button>
      </section>

      <section>
        <h3>Preception Performance Metrics</h3>
        <ul>
          <li>Awareness Rating %</li>
          <li>Scans/Minute</li>
          <li>Average Decision Making Speed</li>
          <li>Complexity of Decisions</li>
          <li>Awareness Balance</li>
          <li>Orientation Rating</li>
        </ul>
        <button>Learn More</button>
      </section>

      <section>
        <h3>Roadmap</h3>
      </section>

      <section>
        <h3>Testimonials</h3>
        <div>
          <q>
            If you're not trying to utilize technology in some form, you're going to be left
            behind.. This is something I want to incorportate into every training [as a coach]
          </q>
          <p>
            Kevin Harmse, Former Professional Soccer Player, Assistant - Simon Fraser University
          </p>
        </div>
        <div>
          <q>
            The results became visually evident in short time. Players were displaying and repeating
            the habits reinforced through the training (i.e. constant shoulder checking/scanning)
            and then also started to more noticeably apply these habits into their other regular
            training sessions and matches
          </q>
          <p>
            Josh Smith, CSA <q>A</q> Licensed Coach
          </p>
        </div>
      </section>

      <section>
        <h3>Preception Team</h3>

        <div>
          <img src="" alt="" />
          <h4>
            Founder CEO <br /> Leigh Sembaluk
          </h4>
          <button>Read Blogs</button>
          <button>Purchase Book</button>
        </div>

        <div>
          <img src="" alt="" />
          <h4>
            Data Analyst <br /> Alex Zucca
          </h4>
        </div>

        <div>
          <img src="" alt="" />
          <h4>
            Data Analyst <br /> Felipe Pardo
          </h4>
        </div>

        <div>
          <img src="" alt="" />
          <h4>
            Developer <br /> Yuan Wang
          </h4>
        </div>

        <div>
          <img src="" alt="" />
          <h4>
            Researcher <br /> Jordan Shimell
          </h4>
        </div>
      </section>

      <Contact />
    </Fragment>
  )
}
