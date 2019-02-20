import React from 'react'

import { teamMembers } from '../TeamMember'
import { Member } from './Member'

export default class TeamPage extends React.Component {

  render(){
    let members = teamMembers.map(( member, i )=><Member 
      key={i} 
      name={member.name} 
      image={member.image} 
      position={member.position}
      links ={member.links}
      desc={member.desc}
      
    />)

    return(
      <React.Fragment>
        <h1 className='ourteam-header'>Team Members</h1>
        <div className="ourteam-members"> 
          {members}
          <p className="ourteam-last-para">
        The Preception team also includes many other talented individuals who have contributed, and continue to contribute in the following areas: Advisory/Mentorship, Hardware Development, Software Development, Database Management, Cloud Services, Business Strategy, Research, Customer Discovery/Acquisition, Fundraising, plus more.
        </p>
        </div>

      </React.Fragment>
    )
  }
}